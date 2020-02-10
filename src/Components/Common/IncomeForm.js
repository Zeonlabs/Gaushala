import {
  Form,
  Icon,
  Input,
  Button,
  Col,
  Row,
  DatePicker,
  Radio,
  Select,
  message
} from "antd";
import "../../css/Home/Income.css";
// import {
//   loadManagers,
//   loadCarats,
//   addPacket,
//   listsrno,
//   listCaratPck,
//   setPacketIssueOffice,
//   returnSawingPacket,
//   sawingIssueSrno,
//   chapkaIssueSrno,
//   setChapkaIssueOffice,
//   returnChapkaPacket
// } from "../../Action/Packet";
// import { unusedRough } from "../../Action/Rough";
import { connect } from "react-redux";
import moment from "moment";
// import "./Office.css";
import React, { Component } from "react";

const { Option } = Select;

class IncomeForm extends Component {
  constructor() {
    super();
    this.state = {
      mname: [],
      carat: [],
      id: "",
      pckCarat: [],
      singleSrno: [],
      unusedRough: "",
      srno: 0,
      roughId: "",
      value: "income",
      type: "Income",
      sawingSrno: ["Cheque income", "Animal Income"]
    };
  }
  componentDidMount = async () => {};

  handleCancel = () => {
    this.props.closeBox();
  };

  onChange = async (date, dateString) => {
    // console.log(date, dateString);
    // // await this.props.unusedRough(dateString.key).then(res => {
    // //   // console.log("TCL: onChange -> res", res);
    // //   this.setState(
    // //     {
    // //       unusedRough: res.office_unused_carat || res.unused_carat,
    // //       id: dateString.key
    // //     },
    // //     () => {
    // //       const { form } = this.props;
    // //       form.setFieldsValue({
    // //         available: this.state.unusedRough
    // //       });
    // //     }
    // //   );
    // // });
    // await this.props.listCaratPck(date).then(res => {
    //   console.log("TCL: onChange -> res", res);
    //   this.setState(
    //     {
    //       pckCarat: res
    //     },
    //     () => {
    //       const srnoData = [];
    //       this.state.pckCarat.find(item => {
    //         const singleSrno = item.srno;
    //         const jointData = { srno: singleSrno };
    //         srnoData.push(jointData);
    //       });
    //       this.setState({
    //         singleSrno: srnoData
    //       });
    //       this.props.form.setFieldsValue({
    //         available: this.state.pckCarat[0].available_stock
    //       });
    //     }
    //   );
    // });
    // //   this.setState(
    // //     {
    // //       unusedRough: res.office_unused_carat || res.unused_carat,
    // //       id: dateString.key
    // //     },
    // //     () => {
    // //       const { form } = this.props;
    // //       form.setFieldsValue({
    // //         available: this.state.unusedRough
    // //       });
    // //     }
    // //   );
    // // });
    // // await this.props.listsrno(date).then(res => {
    // //   console.log("srno -> ", res);
    // //   this.setState(
    // //     {
    // //       srno: res[0].srno + 1
    // //     },
    // //     () => console.log("this is a log in a list srno ->", this.state.srno)
    // //   );
    // // });
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

  handleSubmit = e => {
    console.log("TCL: e", e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("TCL: values", values);
      if (!err) {
        // const date = moment(values.date).format("YYYY-MM-DD");
        // const id = this.state.roughId;
        // console.log("TCL: id", id);
        // if (this.props.type === "return") {
        //   const data = {
        //     id,
        //     date,
        //     values
        //   };
        //   this.handelReturn(data);
        // } else {
        //   this.handelIssue(values, id, date);
        // }
      }
    });
  };

  onChangeSrno = (date, dateString) => {
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { type } = this.state;
    // const { type } = this.props;
    return (
      <div className="income-form-wrapper">
        <Row gutter={18}>
          <Form onSubmit={this.handleSubmit}>
            {/* <h3 className="form-title">
            {this.props.type === "return" ? "Rough Return" : "Rough Issue"}
          </h3> */}
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator("type", {
                  rules: [{ required: true }],
                  initialValue: "income"
                })(
                  <Radio.Group
                    // defaultValue="income"
                    onChange={this.onChangeType}
                    value={this.state.value}
                    buttonStyle="solid"
                  >
                    <Radio.Button value="income">Income</Radio.Button>
                    <Radio.Button value="expense">Expense</Radio.Button>
                  </Radio.Group>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Voucher No.">
                {getFieldDecorator("vno")(
                  <Input type="number" placeholder="Voucher No." />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Date">
                {getFieldDecorator("date", {
                  rules: [{ required: true, message: "Enter The Date!" }]
                })(<DatePicker onChange={this.onChange} />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={`${type} Type`}>
                {getFieldDecorator(`${type} Type`, {
                  rules: [{ required: true }]
                })(
                  <Select
                    showSearch
                    placeholder={`Select ${type} type`}
                    optionFilterProp="children"
                    onSearch={this.onSearch}
                    onChange={this.onChangeSrno}
                    filterOption={true}
                  >
                    {this.state.sawingSrno.map((value, id) => {
                      return (
                        <Option value={value} key={value}>
                          {value}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item label="Name">
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "Please input Name!" }]
                })(<Input placeholder="Ex. NIleshbhai" />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Mobile No.">
                {getFieldDecorator("mnumber", {
                  rules: [{ required: true }]
                })(<Input type="number" placeholder="Ex. 9825769931" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Address">
                {getFieldDecorator("address", {
                  rules: [{ required: true }]
                })(<Input placeholder="Ex. Amreli" />)}
              </Form.Item>
            </Col>
            <Col className="cancel-button-class" span={4} offset={10}>
              <Form.Item>
                <Button onClick={this.handleCancel}>Cancel</Button>
              </Form.Item>
            </Col>
            <Col className="submit-button-class" span={4} offset={1}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
            <Col className="print-button-class" span={4} offset={1}>
              <Form.Item>
                <Button onClick={this.handleCancel}>Print</Button>
              </Form.Item>
            </Col>
          </Form>
        </Row>
      </div>
    );
  }
}

const IncomeForms = Form.create({ name: "Income" })(IncomeForm);

const mapStateToProps = state => ({ ...state.Packet });

export default connect(mapStateToProps, {
  // listCaratPck,
  // loadManagers,
  // loadCarats,
  // unusedRough,
  // addPacket,
  // returnSawingPacket,
  // listsrno,
  // setPacketIssueOffice,
  // chapkaIssueSrno,
  // sawingIssueSrno,
  // setChapkaIssueOffice,
  // returnChapkaPacket
})(IncomeForms);
