import React, { Component } from "react";
import { Modal, Form, Input, DatePicker, Select, Button } from "antd";
import "../../Common/Forms/IncomeModels.styles.scss";
import moment from "moment";
import { addDeadAnimal } from "../../../Actions/Animal/DeadAnimal";
import NumericInput from "../../Common/Forms/InputNumber";
import { connect } from "react-redux";
import Index from "../Table";
import { animalCode, totalOfArray } from "../../../js/Helper";

class DeadAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "cash",
      tableData: "",
      value: "",
      data: "",
      tableStatus: false,
      total: 0
    };
  }

  componentDidMount = () => {};

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      const { data } = this.props;
      console.log("this is  aedit income modal ->", this.props);
      if (this.props.type) {
        this.setState({
          data: data
        });
        if (!this.state.tableStatus) {
          this.setState({
            tableData: data.animal
          });
        }
      }
    }
  };

  onChange = value => {
    this.setState({ value });
  };

  sumArray = (total, num) => {
    return total + num;
  };

  deadanimaldata = (values, finalTotal) => {
    console.log("incomeAnimal -> values, finalTotal", values, finalTotal);
    const date = moment(values.date).format("YYYY-MM-DD");
    const data = {
      date,
      note: values.note,
      total: finalTotal,
      animal: this.state.tableData
    };
    console.log("TCL: data", data);
    if (this.props.type) {
      this.props.submit(this.props.data._id, data);
    } else {
      this.props.addDeadAnimal(data).then(res => this.props.toggleModel());
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("TCL: values", values);
      const totalAmount = this.state.tableData.map(val =>
        parseInt(val.count, 10)
      );
      const finalTotal = totalAmount.reduce(this.sumArray);
      // console.log("TCL: amount", amount);
      if (!err) {
        this.deadanimaldata(values, finalTotal);
      }
    });
  };

  onTableSubmit = data => {
    console.log("TCL: onTableSubmit -> data", data);
    const tableData = animalCode(data);
    this.setState({
      tableData,
      tableStatus: true
    });
  };

  onChangeType = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      type: e.target.value
    });
  };

  onChangeSawingType = e => {};

  onChanges = value => {
    console.log(`selected ${value}`);
  };

  onBlur = () => {
    console.log("blur");
  };

  onFocus = () => {
    console.log("focus");
  };

  onSearch = val => {
    console.log("search:", val);
  };
  handleReset = () => {
    this.props.form.resetFields();
    this.props.toggleModel();
  };
  render() {
    const { type, data, total } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="income-model-wrapper">
        <Modal
          centered
          maskClosable={false}
          visible={this.props.visible}
          footer={null}
          onOk={this.props.toggleModel}
          onCancel={this.handleReset}
        >
          <h2 className="form-titel">muTyu pamel pxuAO nu r+S3r</h2>
          <Form className="form-income" onSubmit={this.handleSubmit}>
            <div className="row">
              {/* ------------------------------Date--------------------------------- */}
              <Form.Item className="date-input" label="tarIq">
                {getFieldDecorator("date", {
                  rules: [{ required: true, message: "Enter The Date!" }],
                  initialValue: type && moment(data.date)
                })(<DatePicker className="english-font-input" />)}
              </Form.Item>
            </div>

            <div className="row">
              {/* ------------------------------Note--------------------------------- */}
              <Form.Item className="ant-col-24" label="nO>6">
                {getFieldDecorator("note", {
                  rules: [{ required: true }],
                  initialValue: type && data.note
                })(
                  <Input
                    style={{
                      width: "100%"
                    }}
                    placeholder="nO>6"
                  />
                )}
              </Form.Item>
            </div>

            {/* ------------------------------Table--------------------------------- */}
            <div>
              <Index
                submit={this.onTableSubmit}
                data={data ? data.animal : ""}
                tableType={this.props.type}
                total={this.props.total}
                cancel={this.props.visible}
              />
            </div>

            <div className="m-btn-gru">
              {/* ----------------------------Cancel Button------------------------------- */}
              <Form.Item>
                <Button size="default" onClick={this.handleReset}>
                  rd
                </Button>
              </Form.Item>
              {/* ------------------------------Save Button--------------------------------- */}
              <Form.Item>
                <Button
                  icon="save"
                  size="default"
                  type="primary"
                  htmlType="submit"
                >
                  sev
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}
const DeadAnimals = Form.create({ name: "Income" })(DeadAnimal);

const mapStateToProps = state => ({
  ...state.Test
});

export default connect(mapStateToProps, { addDeadAnimal })(DeadAnimals);
