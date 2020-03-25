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
import "./IncomeModels.styles.scss";
import moment from "moment";
import Tables from "./table";
import {
  addIncome,
  getIncome,
  getExpense,
  addExpense,
  editExpense,
  editIncome
} from "../../../Actions/Exapmple";
import NumericInput from "./InputNumber";
import { connect } from "react-redux";

const { Option } = Select;

class IncomeMobels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "cash",
      tableData: "",
      value: 0,
      finalTotal: 0,
      tableStatus: false
    };
  }

  componentDidMount() {
    // console.log("this is  aedit income modal ->", this.props);
    // const { type, modalType, data } = this.props;
    // if (type === "income") {
    // if (modalType === "edit") {
    // console.log("this is  aedit income modal ->", data);
    // }
    // }
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      console.log("this is  aedit income modal ->", this.props);
      if (this.props.modalType) {
        console.log("this is  aedit this.props.modalType ->", this.props);
        this.setState({
          value: this.props.data.phone
        });
      }
    }
  };

  onChange = value => {
    this.setState({ value });
  };

  sumArray = (total, num) => {
    return total + num;
  };

  incomeData = (values, finalTotal, itemData) => {
    const date = moment(values.date).format("YYYY-MM-DD");
    const data = {
      slip_no: values.slip_no,
      date,
      type: values.type,
      name: values.name,
      address: values.address,
      phone: parseInt(values.phone, 10),
      money: {
        type: this.state.type,
        amount: finalTotal,
        cheque_no: values.cheque_no
      },
      pan_no: values.pan_no,
      item: itemData,
      ref_name: values.ref_name,
      note: values.note
    };
    console.log("TCL: data", data);
    if (this.props.modalType === "edit") {
      const id = this.props.data._id;
      console.log("incomeData -> id", id);
      this.props.submit(id, data);
      // this.props.editIncome(id, data).then(res => this.props.toggleModel());
    } else {
      this.props.addIncome(data).then(res => {
        const pagination = {
          page: 1,
          limit: 20
        };
        this.props.getIncome(pagination).then(res => this.props.toggleModel());
      });
    }
  };

  expenseData = (values, finalTotal, itemData) => {
    const date = moment(values.date).format("YYYY-MM-DD");
    const data = {
      slip_no: values.slip_no,
      date,
      type: values.type,
      name: values.name,
      address: values.address,
      phone: parseInt(values.phone, 10),
      money: {
        type: this.state.type,
        amount: finalTotal,
        cheque_no: values.cheque_no
      },
      pan_no: values.pan_no,
      item: itemData,
      ref_name: values.ref_name,
      note: values.note
    };
    console.log("TCL: data", data);
    if (this.props.modalType === "edit") {
      const id = this.props.data._id;
      console.log("incomeData -> id", id);
      this.props.submit(id, data);
      // this.props.editExpense(id, data).then(res => this.props.toggleModel());
    } else {
      this.props.addExpense(data).then(res => {
        const pagination = {
          page: 1,
          limit: 20
        };
        this.props.getExpense(pagination).then(res => this.props.toggleModel());
      });
    }
  };

  handleSubmit = e => {
    console.log("TCL: e", e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("TCL: values", values, this.state.tableData);
      let itemData = [];
      let amount = "";
      let totalAmount = "";
      if (this.props.modalType) {
        if (!this.state.tableStatus) {
          amount = this.props.data.item.map(val =>
            itemData.push({
              type: val.type,
              amount: parseInt(val.amount, 10)
            })
          );
          // console.log("TCL: itemData", itemData);
          totalAmount = this.props.data.item.map(val =>
            parseInt(val.amount, 10)
          );
        } else {
          amount = this.state.tableData.map(val =>
            itemData.push({
              type: val.type,
              amount: parseInt(val.amount, 10)
            })
          );
          // console.log("TCL: itemData", itemData);
          totalAmount = this.state.tableData.map(val =>
            parseInt(val.amount, 10)
          );
        }
      } else {
        amount = this.state.tableData.map(val =>
          itemData.push({
            type: val.type,
            amount: parseInt(val.amount, 10)
          })
        );
        // console.log("TCL: itemData", itemData);
        totalAmount = this.state.tableData.map(val => parseInt(val.amount, 10));
      }
      console.log("TCL: totalAmount", totalAmount);
      const finalTotal = totalAmount.reduce(this.sumArray);
      console.log("TCL: finalTotal", finalTotal);
      this.setState({
        finalTotal
      });

      // console.log("TCL: amount", amount);
      if (!err) {
        if (this.props.type === "expense") {
          this.expenseData(values, finalTotal, itemData);
        } else {
          this.incomeData(values, finalTotal, itemData);
        }
      }
    });
  };

  onTableSubmit = data => {
    console.log("TCL: onTableSubmit -> data", data);
    this.setState({
      tableData: data,
      tableStatus: true
    });
  };

  onChangeType = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      type: e.target.value
    });
  };

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
    // const { type } = this.props;
    const { type, modalType, data } = this.props;
    // const { slip_no } = data;
    console.log("render -> this.props", this.props);
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
          <h3 className="form-titel" style={{ paddingBottom: 10 }}>{`${
            type === "expense" ? "javk" : "Aavk"
          } ]mero`}</h3>

          <Form className="form-income" onSubmit={this.handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------slip No--------------------------------- */}

                <Form.Item
                  label={`${type === "expense" ? "va]cr" : "pho>c "} n>.`}
                >
                  {getFieldDecorator("slip_no", {
                    rules: [{ required: true }],
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? data.slip_no
                          : ""
                        : modalType === "edit"
                        ? data.slip_no
                        : ""
                  })(
                    <InputNumber
                      className="english-font-input"
                      style={{ width: "100%" }}
                      placeholder="000000"
                      type="number"
                      min={0}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------Date--------------------------------- */}
                <Form.Item className="date-input" label="tarIq">
                  {getFieldDecorator("date", {
                    rules: [{ required: true, message: "Enter The Date!" }],
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? moment(data.date)
                          : ""
                        : modalType === "edit"
                        ? moment(data.date)
                        : ""
                  })(<DatePicker className="english-font-input" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------Income Type--------------------------------- */}
                <Form.Item
                  className=""
                  label={`${type === "expense" ? "javk" : "Aavk"} no p/kar`}
                  hasFeedback
                >
                  {getFieldDecorator("type", {
                    rules: [{ required: true }],
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? data.type
                          : ""
                        : modalType === "edit"
                        ? data.type
                        : ""
                  })(
                    type === "expense" ? (
                      <Select
                        className="in-icon-arrow"
                        placeholder="javk no p/kar ps>d kro"
                      >
                        <Option value="qa~a nI javk">qa~a nI javk</Option>
                        <Option value="mjurI qcR">mjurI qcR</Option>
                        <Option value="6un qcR">6un qcR</Option>
                        <Option value="ba>6kam qcR">ba>6kam qcR</Option>
                        <Option value="nIr~a qcR">nIr~a qcR</Option>
                        <Option value="Do. & dva qcR">Do. & dva qcR</Option>
                        <Option value="vahn qcR">vahn qcR</Option>
                        <Option value="vaDI qcR">vaDI qcR</Option>
                        <Option value="p/s>g qcR">p/s>g qcR</Option>
                        <Option value="ANy qcR">ANy qcR</Option>
                      </Select>
                    ) : (
                      <Select
                        className="in-icon-arrow"
                        placeholder="Aavk no p/kar ps>d kro"
                      >
                        <Option value="ivrDI 6un m>D5 nI Aavk">
                          ivrDI 6un m>D5 nI Aavk
                        </Option>
                        <Option value="surt 6un m>D5 nI Aavk">
                          surt 6un m>D5 nI Aavk
                        </Option>
                        <Option value="qatr nI Aavk">qatr nI Aavk</Option>
                        <Option value="pxu nI Aavk">pxu nI Aavk</Option>
                        <Option value=" ANy Aavk">ANy Aavk</Option>
                        <Option value="data7I nI Aavk">data7I nI Aavk</Option>
                      </Select>
                    )
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xs={2} sm={4} md={6} lg={8} xl={16}>
                {/* ------------------------------Doner Name-------------------------------- */}
                <Form.Item
                  className="input-name-gujarati"
                  label={`${type === "expense" ? "nam" : "data 7I"}`}
                >
                  {getFieldDecorator("name", {
                    rules: [{ required: true }],
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? data.name
                          : ""
                        : modalType === "edit"
                        ? data.name
                        : ""
                  })(<Input placeholder="nam" />)}
                </Form.Item>
              </Col>
              <Col xs={20} sm={16} md={12} lg={8} xl={7} offset={1}>
                {/* ------------------------------phone No--------------------------------- */}
                {modalType === "edit" ? (
                  <Form.Item className="" label="moba[l n>.">
                    {getFieldDecorator("phone", {
                      rules: [{ required: true }],
                      initialValue:
                        type === "income"
                          ? modalType === "edit"
                            ? data.phone
                            : ""
                          : modalType === "edit"
                          ? data.phone
                          : ""
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
                      rules: [{ required: true, len: 10 }],
                      initialValue:
                        type === "income"
                          ? modalType === "edit"
                            ? data.phone
                            : ""
                          : modalType === "edit"
                          ? data.phone
                          : ""
                    })(
                      <NumericInput
                        value={this.state.value}
                        onChange={this.onChange}
                      />
                    )}
                  </Form.Item>
                )}
              </Col>
            </Row>

            <Row>
              <Col>
                {/* ------------------------------Address--------------------------------- */}
                <Form.Item className="input-name-gujarati" label="srnamu">
                  {getFieldDecorator("address", {
                    rules: [{ required: true }],
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? data.address
                          : ""
                        : modalType === "edit"
                        ? data.address
                        : ""
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

            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------Income in --------------------------------- */}
                <Form.Item
                  label={`${type === "expense" ? "cukv~aI" : "dan SvIkar"}`}
                >
                  {getFieldDecorator("moneyobject", {
                    rules: [{ required: true }],
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? data.money
                            ? data.money.type
                            : ""
                          : "cash"
                        : modalType === "edit"
                        ? data.money
                          ? data.money.type
                          : ""
                        : "cash"
                  })(
                    <Radio.Group onChange={this.onChangeType}>
                      <Radio value="cash">rokD</Radio>
                      <Radio value="cheque">cek</Radio>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------Cheque No--------------------------------- */}
                {this.state.type === "cheque" ||
                this.props.cash === "cheque" ? (
                  <Form.Item className="cheque-no" label="cek n>.">
                    {getFieldDecorator("chequeno", {
                      rules: [{ required: true }],
                      initialValue:
                        type === "income"
                          ? modalType === "edit"
                            ? data.money
                              ? data.money.cheque_no
                              : ""
                            : "cash"
                          : modalType === "edit"
                          ? data.money
                            ? data.money.cheque_no
                            : ""
                          : "cash"
                    })(
                      <Input
                        type="number"
                        className="english-font-input"
                        style={{ width: "100%" }}
                        placeholder="000000"
                      />
                    )}
                  </Form.Item>
                ) : (
                  ""
                )}
              </Col>
              <Col span={8}>
                {/* ------------------------------Pan No--------------------------------- */}
                {type === "expense" ? (
                  ""
                ) : (
                  <Form.Item label="pan kaDR n>.">
                    {getFieldDecorator("pan_no")(
                      <Input
                        className="english-font-input"
                        style={{ width: "100%" }}
                        placeholder="AS121SDEF"
                      />
                    )}
                  </Form.Item>
                )}
              </Col>
            </Row>

            {/* ------------------------------Table--------------------------------- */}
            <Row>
              <Tables
                submit={this.onTableSubmit}
                total={modalType === "edit" ? data.money : ""}
                data={modalType === "edit" ? data.item : ""}
                type={modalType === "edit"}
              />
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------Ref_name--------------------------------- */}
                <Form.Item className="input-name-gujarati" label="HStk nam">
                  {getFieldDecorator("ref_name", {
                    rules: [{ required: true }],
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? data.ref_name
                          : ""
                        : modalType === "edit"
                        ? data.ref_name
                        : ""
                  })(
                    <Input style={{ width: "100%" }} placeholder="HStk nam" />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------Notes No--------------------------------- */}
                <Form.Item className="input-name-gujarati" label="no>6">
                  {getFieldDecorator("note", {
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? data.note || ""
                          : ""
                        : modalType === "edit"
                        ? data.note || ""
                        : ""
                  })(<Input style={{ width: "100%" }} placeholder="no>6" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------SMS No--------------------------------- */}
                {type === "expense" ? (
                  ""
                ) : (
                  <Form.Item label="s>dex moklo">
                    {getFieldDecorator("sms", {
                      rules: [{ required: true }],
                      initialValue: "no"
                    })(
                      <Radio.Group>
                        <Radio value="no">nhI</Radio>
                        <Radio value="yes">ha</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                )}
              </Col>
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
                <Button size="default" type="primary" htmlType="submit">
                  sev
                </Button>
              </Form.Item>
              {/* ----------------------------Save & Print button--------------------------- */}
              <Form.Item>
                <Button
                  size="default"
                  htmlType="submit"
                  style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                >
                  sev &#38; ip/N3
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}
const IncomeMobel = Form.create({ name: "Income" })(IncomeMobels);

const mapStateToProps = state => ({
  ...state.Test
});

export default connect(mapStateToProps, {
  addIncome,
  getIncome,
  getExpense,
  addExpense,
  editIncome,
  editExpense
})(IncomeMobel);
