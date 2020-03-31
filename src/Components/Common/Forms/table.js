import React, { Component } from "react";
import { Table, Input, Button, Popconfirm, Form, Icon } from "antd";
import converter from "number-to-words";
import "./table.scss";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      // console.log("TCL: values", values)
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    // console.log("TCL: form", form)
    // console.log("this is a log in a editRow -> ", this.props.inputType);
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: this.props.inputType === "number" ? "" : ""
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
            className={this.props.inputType === "number" ? "gujarati-font" : ""}
            // placeholder={this.props.inputType === "number" ? 0 : "Vigat"}
            type={this.props.inputType}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        // style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class Tables extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        // -----------------------------Vigat----------------------------
        title: "vaIgata",
        dataIndex: "type",
        width: "60%",
        editable: true,
        className: "table-font-gujarati table-animal-popup-td"
      },
      {
        // -----------------------------Amount--------------------------
        width: "30%",
        title: "rkma",
        dataIndex: "amount",
        editable: true,
        className: "gujarati-font table-animal-popup-td"
      },
      {
        //-----------------------------Delete---------------------------
        title: "DIlaIT",
        dataIndex: "operation",
        render: (text, record) =>
          this.state.dataSource.length > 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record._id)}
            >
              <div className="deleteicon">
                <Icon
                  type="delete"
                  theme="filled"
                  style={{ color: "rgba(255, 0, 0, 0.65)" }}
                />
              </div>
            </Popconfirm>
          ) : null
      }
    ];

    this.state = {
      dataSource: [
        {
          _id: "0",
          type: "",
          amount: "0"
        }
      ],
      count: 1,
      totalAmount: 0,
      update: false
    };
  }

  componentDidMount = () => {
    console.log("this is  alog in componentDidMount -> ", this.props);
    // const { money } = this.props.data;

    if (this.props.type) {
      this.setState({
        dataSource: this.props.data,
        totalAmount: this.props.total.amount
      });
    }
  };
  componentDidUpdate = prevProps => {
    // const { money } = this.props.data;
    if (prevProps.data !== this.props.data) {
      console.log("this is  alog in a add income table -> ", this.props.data);
      // if (!this.state.update) {
      this.setState({
        dataSource: this.props.data,
        totalAmount: this.props.total.amount
        // totalAmount: this.props.money
      });
      // }
    }
    if (prevProps.resetStatus !== this.props.resetStatus) {
      this.setState({
        dataSource: [
          {
            _id: "0",
            type: "",
            amount: "0"
          }
        ],
        count: 1,
        totalAmount: 0
      });
    }
  };

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item._id !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      _id: count,
      type: `vaIgata`,
      amount: 0
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };
  sumArray = (total, num) => {
    return total + num;
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row._id === item._id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    const totalAmount = newData.map(val => parseInt(val.amount, 10));
    console.log("TCL: totalAmount", totalAmount);
    const finalTotal = totalAmount.reduce(this.sumArray);
    console.log("TCL: finalTotal", finalTotal);
    console.log("TCL: Tables -> newData", newData);
    this.props.submit(newData);
    this.setState({
      dataSource: newData,
      totalAmount: finalTotal,
      update: true
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => {
          const checkInput = index => {
            // console.log("TCL: render -> index", index);
            switch (index) {
              case "amount":
                return "number";
              case "manager_name":
                return "input";
              case "carat":
                return "number";
              case "distrtibute_date":
                return "date";
              case "Available":
                return "number";
              default:
                return "text";
            }
          };
          return {
            record,
            inputType: checkInput(col.dataIndex),
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave
          };
        }
      };
    });
    return (
      <div className="table">
        <Table
          className="table-boder income-expense-table"
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
        <div className="totalamount">
          <h4 className="amount-in-words gujarati-font">
            kula rkma Sabdmaa :{" "}
            <span className="english-font-input">
              {" "}
              {converter.toWords(this.state.totalAmount)}
            </span>
          </h4>

          <h4 className="gujarati-font text-center">
            {this.state.totalAmount}
          </h4>
        </div>
        <Button
          icon="plus"
          onClick={this.handleAdd}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          laITI ]maorao
        </Button>
      </div>
    );
  }
}

export default Tables;
