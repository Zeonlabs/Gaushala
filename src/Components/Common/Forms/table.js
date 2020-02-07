import React, { Component } from "react";
import { Table, Input, Button, Popconfirm, Form, Icon } from "antd";
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
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    // console.log("TCL: form", form)
    console.log("this is a log in a editRow -> ", this.props.inputType);
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
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
            type={this.props.inputType}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
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
        title: "vIgt",
        dataIndex: "name",
        width: "60%",
        editable: true
      },
      {
        // -----------------------------Amount--------------------------
        width: "30%",
        title: "rkm",
        dataIndex: "age",
        editable: true
      },
      {
        //-----------------------------Delete---------------------------
        title: "DIlI3",
        dataIndex: "operation",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
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
          key: "0",
          name: "vIgt",
          age: "rkm"
        },
        {
          key: "1",
          name: "vIgt",
          age: "rkm"
        }
      ]
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `vIgt`,
      age: "rkm"
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    console.log("TCL: Tables -> newData", newData);
    this.setState({ dataSource: newData });
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
              case "age":
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
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
        <div className="totalamount">
          <h4 className="amount-in-words english-font-input">
            Amount in words
          </h4>
          <h4 className="english-font-input">Total</h4>
        </div>
        <Button
          icon="plus"
          onClick={this.handleAdd}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          lI3I ]mero
        </Button>
      </div>
    );
  }
}

export default Tables;
