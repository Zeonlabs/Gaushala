import React, { Component } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Radio,
  Button,
  InputNumber
} from "antd";
import "../../Common/Forms/IncomeModels.styles.scss";
import moment from "moment";
import Tables from "../../Common/Forms/table";
import { addIncome, getIncome, addExpense } from "../../../Actions/Exapmple";
import NumericInput from "../../Common/Forms/InputNumber";
import { connect } from "react-redux";
import Index from "../Table";

const { Option } = Select;

class ResicentalAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "cash",
      tableData: "",
      value: ""
    };
  }

  componentDidMount = () => {
    // const pagination = {
    //   page: 1,
    //   limit: 20
    // };
    // // const id = this.props.match.params.pid;
    // this.props.getIncome(pagination).then(res => {
    //   console.log("res in a income model =->", res);
    // });
  };

  onChange = value => {
    this.setState({ value });
  };

  handelIssue = (values, id, date) => {
    // if (this.state.value === "sawing") {
    //   const data = {
    //     caratId: id,
    //     manager_name: values.mname,
    //     pcs: values.pcs,
    //     distrtibute_date: date,
    //     srno: this.state.srno,
    //     carat: values.pcarat,
    //     return: 0,
    //     type: values.lose,
    //     packetType: values.type
    //   };
    //   this.props.setPacketIssueOffice(data).then(res => this.props.closeBox());
    //   console.log("Received values of form: ", values, data);
    // } else {
    //   const data = {
    //     caratId: id,
    //     chapka_manager_name: values.mname,
    //     chapka_pcs: values.pcs,
    //     chapka_distrtibute_date: date,
    //     srno: this.state.srno,
    //     chapka_carat: values.pcarat,
    //     chapkaReturn: 0,
    //     type: values.lose,
    //     packetType: values.type
    //   };
    //   this.props.setChapkaIssueOffice(data).then(res => this.props.closeBox());
    //   console.log("Received values of form: ", values, data);
    // }
  };

  handelReturn = values => {
    // if (this.state.value === "sawing") {
    //   const sawingReturn = {
    //     caratId: values.id,
    //     srno: this.state.srno,
    //     return_carat: values.values.pcarat,
    //     return_pcs: values.values.pcs,
    //     return_date: values.date
    //   };
    //   this.props
    //     .returnSawingPacket(sawingReturn)
    //     .then(res => this.props.closeBox());
    // } else {
    //   const chapkaReturn = {
    //     caratId: values.id,
    //     srno: this.state.srno,
    //     chapka_return_carat: values.values.pcarat,
    //     chapka_return_pcs: values.values.pcs,
    //     chapka_return_date: values.date
    //   };
    //   this.props
    //     .returnChapkaPacket(chapkaReturn)
    //     .then(res => this.props.closeBox());
    //   // message.success("Packet return Successfully")}
    // }
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
    this.props.addIncome(data).then(res => this.props.toggleModel());
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
    this.props.addExpense(data).then(res => this.props.toggleModel());
  };

  handleSubmit = e => {
    console.log("TCL: e", e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("TCL: values", values);
      let itemData = [];
      const amount = this.state.tableData.map(val =>
        itemData.push({
          type: val.type,
          amount: parseInt(val.amount, 10)
        })
      );
      // console.log("TCL: itemData", itemData);
      const totalAmount = this.state.tableData.map(val =>
        parseInt(val.amount, 10)
      );
      console.log("TCL: totalAmount", totalAmount);
      const finalTotal = totalAmount.reduce(this.sumArray);
      console.log("TCL: finalTotal", finalTotal);
      // console.log("TCL: amount", amount);
      if (!err) {
        if (this.props.type) {
          this.expenseData(values, finalTotal, itemData);
        } else {
          this.incomeData(values, finalTotal, itemData);
        }
        // const date = moment(values.date).format("YYYY-MM-DD");
        // const data = {
        //   slip_no: values.slip_no,
        //   date,
        //   type: values.type,
        //   name: values.name,
        //   address: values.address,
        //   phone: parseInt(values.phone, 10),
        //   money: {
        //     type: this.state.type,
        //     amount: finalTotal,
        //     cheque_no: values.cheque_no
        //   },
        //   item: this.state.tableData,
        //   ref_name: values.ref_name,
        //   note: values.note
        // };
        // console.log("TCL: data", data);
        // this.props.addIncome(data).then(res => this.props.toggleModel());
      }
    });
  };

  onTableSubmit = data => {
    console.log("TCL: onTableSubmit -> data", data);
    // const amount = data.map(val => parseInt(val.amount, 10));
    // console.log("TCL: amount", amount);
    this.setState({
      tableData: data
    });
    // console.log("TCL: onChangeSrno -> date, dateString", date, dateString);
    // const singlePacketDetails = this.state.pckCarat.find(
    //   item => item.srno === date
    // );
    // this.props.form.setFieldsValue({
    //   available: this.state.pckCarat[0].available_stock,
    //   pcarat: singlePacketDetails.carat,
    //   pcs: singlePacketDetails.pcs
    // });
    // this.setState({
    //   roughId: singlePacketDetails.rough_id,
    //   srno: date
    // });
    // console.log(
    //   "TCL: onChangeSrno -> singlePacketDetails",
    //   singlePacketDetails
    // );
  };

  onChangeType = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      type: e.target.value
    });
    // if (e.target.value === "sawing") {
    //   this.props.sawingIssueSrno().then(res => {
    //     this.setState({
    //       sawingSrno: res
    //     });
    //   });
    // } else {
    //   this.props.chapkaIssueSrno().then(res => {
    //     console.log("this is a log in a chapka issue srno ->", res);
    //     this.setState({
    //       sawingSrno: res
    //     });
    //   });
    // }
  };

  onChangeSawingType = e => {
    // console.log("radio checked", e.target.value);
    // this.setState({
    //   value: e.target.value
    // });
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
    const { type } = this.props;
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
          <h1 style={{ paddingBottom: 10 }}>inwav qcR r+S3r</h1>
          <Form className="form-income" onSubmit={this.handleSubmit}>
            <div className="row">
              {/* ------------------------------Date--------------------------------- */}
              <Form.Item className="date-input" label="tarIq">
                {getFieldDecorator("date", {
                  rules: [{ required: true, message: "Enter The Date!" }]
                })(<DatePicker className="english-font-input" />)}
              </Form.Item>

              {/* ------------------------------Total Animal Diplay only--------------------------------- */}

              <Form.Item label="3o3l pxuAO nI sQ>ya">
                {getFieldDecorator("slip_no", {
                  rules: [{ required: true }]
                })(
                  <InputNumber
                    disabled
                    className="english-font-input"
                    style={{ width: "100%" }}
                    placeholder="10200"
                    type="number"
                    min="0"
                  />
                )}
              </Form.Item>
            </div>

            {/* ------------------------------Table--------------------------------- */}
            <div>
              <Index type="nibhav" />
            </div>

            <div className="m-btn-gru">
              {/* ----------------------------Cancel Button------------------------------- */}
              <Form.Item>
                <Button size="default" onClick={this.handleReset}>
                  rd kro
                </Button>
              </Form.Item>
              {/* ------------------------------Save Button--------------------------------- */}
              <Form.Item>
                <Button size="default" type="primary" htmlType="submit">
                  sev kro
                </Button>
              </Form.Item>
              {/* ----------------------------Save & Print button--------------------------- */}
              <Form.Item>
                <Button
                  size="default"
                  htmlType="submit"
                  style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                >
                  sev &#38; ip/N3 kro
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}
const ResicentalAnimals = Form.create({ name: "Income" })(ResicentalAnimal);

const mapStateToProps = state => ({
  ...state.Test
});

export default connect(mapStateToProps, { addIncome, getIncome, addExpense })(
  ResicentalAnimals
);
