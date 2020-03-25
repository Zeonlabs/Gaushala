import React, { Component } from "react";
import { Modal, Form, Input, DatePicker, Select, Button, Row, Col } from "antd";
import "../../Common/Forms/IncomeModels.styles.scss";
import moment from "moment";
import { addIncomeAnimal } from "../../../Actions/Animal/IncomeAnimal";
import NumericInput from "../../Common/Forms/InputNumber";
import { connect } from "react-redux";
import Index from "../Table";
import { animalCode } from "../../../js/Helper";

class CreaditAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "cash",
      tableData: "",
      value: "",
      data: "",
      tableStatus: false,
      cancel: false
    };
  }

  componentDidMount = () => {
    // console.log("CreaditAnimal -> componentDidMount -> this.props", this.props);
  };

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

  incomeAnimal = (values, finalTotal) => {
    console.log("incomeAnimal -> values, finalTotal", values, finalTotal);
    const date = moment(values.date).format("YYYY-MM-DD");
    const data = {
      date,
      name: values.name,
      address: values.address,
      phone: parseInt(values.phone, 10),
      total: finalTotal,
      animal: this.state.tableData
    };
    console.log("TCL: data", data);
    if (this.props.type) {
      this.props.submit(this.props.data._id, data);
    } else {
      this.props.addIncomeAnimal(data).then(res => this.props.toggleModel());
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("TCL: values", values);
      // console.log("TCL: itemData", itemData);

      const totalAmount = this.state.tableData.map(val =>
        parseInt(val.count, 10)
      );
      console.log("TCL: totalAmount", totalAmount);
      const finalTotal = totalAmount.reduce(this.sumArray);
      console.log("TCL: finalTotal", finalTotal);
      // console.log("TCL: amount", amount);
      if (!err) {
        this.incomeAnimal(values, finalTotal);
      }
    });
  };

  onTableSubmit = data => {
    console.log("TCL: onTableSubmit -> data", data);
    const tableData = animalCode(data);
    console.log("tableData", tableData);
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
    console.log("CreaditAnimal -> handleReset -> this.props..toggleModel()");
  };
  render() {
    const { type, data } = this.props;
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
          <h2 className="form-titel">Aavel pxuAO nu r+S3r</h2>
          <Form className="form-income" onSubmit={this.handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------Date--------------------------------- */}
                <Form.Item className="date-input" label="tarIq">
                  {getFieldDecorator("date", {
                    rules: [{ required: true, message: "Enter The Date!" }],
                    initialValue: type && moment(data.date)
                  })(<DatePicker className="english-font-input" />)}
                </Form.Item>
              </Col>
              <Col span={16}>
                {/* ------------------------------Animal Giver Name-------------------------------- */}
                <Form.Item className="" label="pxu muknar nu nam">
                  {getFieldDecorator("name", {
                    rules: [{ required: true }],
                    initialValue: type && data.name
                  })(<Input placeholder="pxu muknar nu nam" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------Mobile no.--------------------------------- */}
                {this.props.type ? (
                  <Form.Item className="" label="moba[l n>.">
                    {getFieldDecorator("phone", {
                      rules: [{ required: true }],
                      initialValue: type && data.phone
                    })(
                      <NumericInput
                        value={this.state.value}
                        onChange={this.onChange}
                      />
                    )}
                  </Form.Item>
                ) : (
                  <Form.Item className="" label="moba[l n>.">
                    {getFieldDecorator("phone", {
                      rules: [{ required: true, len: 10 }]
                      // initialValue: type && data.phone
                    })(
                      <NumericInput
                        value={this.state.value}
                        onChange={this.onChange}
                      />
                    )}
                  </Form.Item>
                )}
              </Col>
              <Col span={16}>
                {/* ------------------------------Address-------------------------------- */}
                <Form.Item className="ant-col-24" label="srnamu">
                  {getFieldDecorator("address", {
                    rules: [{ required: true }],
                    initialValue: type && data.address
                  })(
                    <Input
                      style={{
                        width: "100%"
                      }}
                      placeholder="srnamu, gam nu nam"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              {/* ------------------------------Table--------------------------------- */}
              <Index
                submit={this.onTableSubmit}
                data={data ? data.animal : ""}
                tableType={this.props.type}
                total={data ? data.total : ""}
                cancel={this.props.visible}
              />
            </Row>

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
const CreaditAnimals = Form.create({ name: "Income" })(CreaditAnimal);

const mapStateToProps = state => ({
  ...state.Test
});

export default connect(mapStateToProps, { addIncomeAnimal })(CreaditAnimals);
