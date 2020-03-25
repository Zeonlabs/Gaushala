import React, { Component } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Radio,
  Button,
  InputNumber,
  Row,
  Col
} from "antd";
import "../../Common/Forms/IncomeModels.styles.scss";
import moment from "moment";
import Tables from "../../Common/Forms/table";
import { addGivenAnimal } from "../../../Actions/Animal/GivenAnimal";
import NumericInput from "../../Common/Forms/InputNumber";
import { connect } from "react-redux";
import Index from "../Table";
import { animalCode } from "../../../js/Helper";

const { Option } = Select;

class DebitAnimal extends Component {
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

  debitAnimalData = (values, finalTotal) => {
    console.log("incomeAnimal -> values, finalTotal", values, finalTotal);
    const date = moment(values.date).format("YYYY-MM-DD");
    const data = {
      date,
      name: values.name,
      tag: values.tag,
      address: values.address,
      phone: parseInt(values.phone, 10),
      animal: this.state.tableData
    };
    console.log("TCL: data", data);
    if (this.props.type) {
      this.props.submit(this.props.data._id, data);
    } else {
      this.props.addGivenAnimal(data).then(res => this.props.toggleModel());
    }
  };

  handleSubmit = e => {
    console.log("TCL: e", e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const totalAmount = this.state.tableData.map(val =>
        parseInt(val.amount, 10)
      );
      console.log("TCL: totalAmount", totalAmount);
      const finalTotal = totalAmount.reduce(this.sumArray);
      console.log("TCL: finalTotal", finalTotal);
      // console.log("TCL: amount", amount);
      if (!err) {
        this.debitAnimalData(values, finalTotal);
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
          <h2 className="form-titel">Aapel pxuAO nu r+S3r</h2>

          <Form className="form-income" onSubmit={this.handleSubmit}>
            <Row>
              {/* ------------------------------Date--------------------------------- */}
              <Form.Item className="date-input" label="tarIq">
                {getFieldDecorator("date", {
                  rules: [{ required: true, message: "Enter The Date!" }],
                  initialValue: type && moment(data.date)
                })(<DatePicker className="english-font-input" />)}
              </Form.Item>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={12}>
                {/* ------------------------------Teg No.--------------------------------- */}
                <Form.Item className="" label="3eg n>.">
                  {getFieldDecorator("tag", {
                    rules: [{ required: true }],
                    initialValue: type && data.tag
                  })(
                    <NumericInput
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                  )}
                </Form.Item>
              </Col>

              <Col span={12}>
                {/* ------------------------------Animal Taker Name-------------------------------- */}
                <Form.Item className="" label="pxu lenar nu namu">
                  {getFieldDecorator("name", {
                    rules: [{ required: true }],
                    initialValue: type && data.name
                  })(<Input placeholder="data 7I nam" />)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={12}>
                {/* ------------------------------phone No--------------------------------- */}
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
                    })(
                      <NumericInput
                        value={this.state.value}
                        onChange={this.onChange}
                      />
                    )}
                  </Form.Item>
                )}
              </Col>
              <Col span={12}>
                {/* ------------------------------Address--------------------------------- */}
                <Form.Item className="" label="srnamu">
                  {getFieldDecorator("address", {
                    rules: [{ required: true }],
                    initialValue: type && data.address
                  })(<Input placeholder="srnamu, gam nu nam" />)}
                </Form.Item>
              </Col>
            </Row>

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
const DebitAnimals = Form.create({ name: "Income" })(DebitAnimal);

const mapStateToProps = state => ({
  ...state.Test
});

export default connect(mapStateToProps, { addGivenAnimal })(DebitAnimals);
