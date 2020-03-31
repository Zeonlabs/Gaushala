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
import ReactToPrint from "react-to-print";
import { convertNumberToType, convertTypeToNumber } from "../../../js/Helper";
import IncomePrintSlip from "../../PrintTemplate";
import ExpensePrintSlip from "../../PrintTemplate/ExpensePrint";
import { Expense } from "../../PrintTemplate/Report/Columns/Expese";

const { Option } = Select;

class IncomeMobels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "cash",
      tableData: "",
      value: 0,
      finalTotal: 0,
      tableStatus: false,
      resetStatus: true,
      printStatus: false,
      data: {},
      itemData: []
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
    console.log(
      "IncomeMobels -> incomeData -> convertTypeToNumber(values.type)",
      convertTypeToNumber(values.type, "income")
    );
    const date = moment(values.date).format("YYYY-MM-DD");
    const data = {
      slip_no: values.slip_no,
      date,
      type: convertTypeToNumber(values.type, "income"),
      name: values.name,
      address: values.address,
      phone: parseInt(values.phone, 10),
      money: {
        type: this.state.type,
        amount: finalTotal,
        cheque_no: values.chequeno
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
    this.props.form.resetFields();
    this.setState({
      type: "cash",
      resetStatus: !this.state.resetStatus
    });
  };

  expenseData = (values, finalTotal, itemData) => {
    const date = moment(values.date).format("YYYY-MM-DD");
    const data = {
      slip_no: values.slip_no,
      date,
      type: convertTypeToNumber(values.type, "expense"),
      name: values.name,
      address: values.address,
      phone: parseInt(values.phone, 10),
      money: {
        type: this.state.type,
        amount: finalTotal,
        cheque_no: values.chequeno
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
    this.props.form.resetFields();
    this.setState({
      type: "cash",
      resetStatus: !this.state.resetStatus
    });
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
        finalTotal,
        data: values,
        itemData
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
      // resetStatus: false
    });
  };

  printIncomeSlip = () => {
    console.warn("IncomeMobels -> values, finalTotal, itemData");
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
    this.setState({
      tableData: "",
      resetStatus: !this.state.resetStatus,
      type: "cash",
      printStatus: false
    });
  };

  // handelPrintButton = () => {
  //   this.setState({
  //     printStatus: true
  //   });
  //   // console.log(
  //   //   "shjgfsadhsagfdasnjcn hasdgasudh auhduihas uduiahu dhuahdu  a udh sah dui"
  //   // );
  // };

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
            type === "expense" ? "Javak" : "Aavak"
          }  ]maorao`}</h3>

          <Form className="form-income" onSubmit={this.handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------slip No--------------------------------- */}

                <Form.Item
                  label={`${
                    type === "expense" ? "vaa]car " : "pahaoMca "
                  } naM.:`}
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
                      className="gujarati-font"
                      style={{}}
                      placeholder="000000"
                      type="number"
                      min={0}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------Date--------------------------------- */}
                <Form.Item className="date-input" label="taarIKa:">
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
                  })(
                    <DatePicker
                      className="english-font-input "
                      style={{ fontSize: "20px" }}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------Income Type--------------------------------- */}
                <Form.Item
                  className=""
                  label={`${type === "expense" ? "Javak" : "Aavak"} naao pakar`}
                  hasFeedback
                >
                  {getFieldDecorator("type", {
                    rules: [{ required: true }],
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? convertNumberToType(data.type, "income")
                          : ""
                        : modalType === "edit"
                        ? convertNumberToType(data.type, "expense")
                        : ""
                  })(
                    type === "expense" ? (
                      <Select
                        className="in-icon-arrow"
                        placeholder="Javak naao pa`kar paMsad krao"
                        // defaultValue="2"
                      >
                        <Option value="KaaNa naI Javak">KaaNa naI Javak</Option>
                        <Option value="majurI Kaca-">majurI Kaca-</Option>
                        <Option value="Gauna Kaca-">Gauna Kaca-</Option>
                        <Option value="baaMGakama Kaca-">
                          baaMGakama Kaca-
                        </Option>
                        <Option value="naIrNa Kaca-">naIrNa Kaca-</Option>
                        <Option value="Dao. e dvaa Kaca-">
                          Dao. e dvaa Kaca-
                        </Option>
                        <Option value="vaahna Kaca-">vaahna Kaca-</Option>
                        <Option value="vaaDI Kaca-">vaaDI Kaca-</Option>
                        <Option value="pa`saMga Kaca-">pa`saMga Kaca-</Option>
                        <Option value="Anya Kaca-">Anya Kaca-</Option>
                      </Select>
                    ) : (
                      <Select
                        className="in-icon-arrow"
                        placeholder="Aavak naao pa`kar paMsad krao"
                      >
                        <Option value="ivarDI Gauna maMDLa naI Aavak">
                          ivarDI Gauna maMDLa naI Aavak
                        </Option>
                        <Option value="saurta Gauna maMDLa naI Aavak">
                          saurta Gauna maMDLa naI Aavak
                        </Option>
                        <Option value="Kaatar naI Aavak">
                          Kaatar naI Aavak
                        </Option>
                        <Option value="paSau naI Aavak">paSau naI Aavak</Option>
                        <Option value="dataaEaI naI Aavak">
                          dataaEaI naI Aavak
                        </Option>
                        <Option value="Anya Aavak">Anya Aavak</Option>
                      </Select>
                    )
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={16}>
                {/* ------------------------------Doner Name-------------------------------- */}
                <Form.Item
                  className="input-name-gujarati"
                  label={`${type === "expense" ? "naama:" : "dataaEaI:"}`}
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
                  })(<Input placeholder="naama" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------phone No--------------------------------- */}
                {modalType === "edit" ? (
                  <Form.Item className="" label="maaobaa[la naM.:">
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
                        className="gujarati-font"
                        value={this.state.value}
                        onChange={this.onChange}
                      />
                    )}
                  </Form.Item>
                ) : (
                  <Form.Item className="" label="maaobaa[la naM.:">
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
                <Form.Item className="input-name-gujarati" label="sarnaamau">
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
                      placeholder="sarnaamau"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------Income in --------------------------------- */}
                <Form.Item
                  label={`${
                    type === "expense" ? "caukvaNaI:" : "dana svaIkar"
                  }`}
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
                      <Radio value="cash">raokD</Radio>
                      <Radio value="cheque">caok</Radio>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------Cheque No--------------------------------- */}
                {this.state.type === "cheque" ||
                this.props.cash === "cheque" ? (
                  <Form.Item className="cheque-no" label="caok naM.:">
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
                        className=""
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
                  <Form.Item label="paana kaD- naM.:">
                    {getFieldDecorator("pan_no")(
                      <Input
                        className="english-font-input "
                        style={{ width: "100%", fontSize: "20px" }}
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
                resetStatus={this.state.resetStatus}
                total={modalType === "edit" ? data.money : ""}
                data={modalType === "edit" ? data.item : ""}
                type={modalType === "edit"}
              />
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------Ref_name--------------------------------- */}
                <Form.Item
                  className="input-name-gujarati"
                  label="hstak naama :"
                >
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
                    <Input
                      style={{ width: "100%" }}
                      placeholder="hstak naama"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------Notes No--------------------------------- */}
                <Form.Item className="input-name-gujarati" label="naaoMGa:">
                  {getFieldDecorator("note", {
                    initialValue:
                      type === "income"
                        ? modalType === "edit"
                          ? data.note || ""
                          : ""
                        : modalType === "edit"
                        ? data.note || ""
                        : ""
                  })(
                    <Input style={{ width: "100%" }} placeholder="naaoMGa:" />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------SMS No--------------------------------- */}
                {type === "expense" ? (
                  ""
                ) : (
                  <Form.Item label="saMdoSa maaoklaao:">
                    {getFieldDecorator("sms", {
                      rules: [{ required: true }],
                      initialValue: "no"
                    })(
                      <Radio.Group>
                        <Radio value="no">nahI</Radio>
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
                  saova
                </Button>
              </Form.Item>
              {/* ----------------------------Save & Print button--------------------------- */}
              <Form.Item>
                <ReactToPrint
                  trigger={() => (
                    <Button
                      size="default"
                      htmlType="submit"
                      style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                      // onClick={this.handelPrintButton}
                    >
                      saova e ipa`nT
                    </Button>
                  )}
                  content={() => this.componentRef}
                  onAfterPrint={this.printIncomeSlip}
                />
              </Form.Item>
              <div style={{ display: "none" }}>
                {type === "income" ? (
                  <IncomePrintSlip
                    ref={el => (this.componentRef = el)}
                    voucher={this.state.data.slip_no}
                    name={this.state.data.name}
                    date={moment(this.state.data.date).format("DD-MM-YYYY")}
                    address={this.state.data.address}
                    table={this.state.itemData}
                    amount={this.state.finalTotal}
                    cheque_no={this.state.data.chequeno}
                  />
                ) : (
                  <ExpensePrintSlip
                    ref={el => (this.componentRef = el)}
                    voucher={this.state.data.slip_no}
                    name={this.state.data.name}
                    date={moment(this.state.data.date).format("DD-MM-YYYY")}
                    address={this.state.data.address}
                    table={this.state.itemData}
                    amount={this.state.finalTotal}
                    cheque_no={this.state.data.chequeno}
                    mobile={this.state.data.phone}
                    refname={this.state.data.ref_name}
                  />
                )}
              </div>
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
