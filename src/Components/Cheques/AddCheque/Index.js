import React, { Component } from "react";
import { Form, Input, Button, Row, Col, Select, Modal, DatePicker } from "antd";
import converter from "number-to-words";
import moment from "moment";
const { Option } = Select;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  handelNumber = e => {
    console.log("TCL: Index -> handelNumber -> e", e.target.value);
    this.setState({
      number: parseInt(e.target.value, 10)
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.openPopup !== this.props.openPopup) {
      if (this.props.type === "edit") {
        this.setState({
          number: this.props.data.amount
        });
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // this.props.handelEmployeePopup();
        const data = {
          date: moment(values.date).format("YYYY-MM-DD"),
          bank: values.bank,
          no: values.no,
          name: values.name,
          phone: values.phone,
          amount: values.amount,
          word: values.amountword
        };
        if (this.props.type === "edit") {
          this.props.handelEdit(this.props.data._id, data);
        } else {
          this.props.submit(data);
        }
        this.props.form.resetFields();
        // this.props.handelEmployeePopup();
        this.setState({
          number: 0
        });
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
    this.props.handelEmployeePopup();
    this.setState({
      number: 0
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { type, data } = this.props;
    return (
      <div className="income-model-wrapper">
        <Modal
          centered
          maskClosable={false}
          visible={this.props.openPopup}
          footer={null}
          // onOk={this.handelData}
          onCancel={this.handleReset}
        >
          <Row>
            <h1 className="form-titel">p/IN3 cek</h1>
          </Row>

          <Form className="form-income" onSubmit={this.handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ------------------------------Date of Cheque--------------------------------- */}

                <Form.Item className="date-input" label="tarIq">
                  {getFieldDecorator("date", {
                    rules: [{ required: true, message: "Enter The Date!" }],
                    initialValue: type === "edit" ? moment(data.date) : ""
                  })(<DatePicker className="english-font-input" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* --------------------------Bank Name---------------------------------- */}
                <Form.Item className="" label="be>Nk nam">
                  {getFieldDecorator("bank", {
                    rules: [{ required: true }],
                    initialValue: type === "edit" ? data.bank : ""
                  })(
                    <Select
                      className="in-icon-arrow"
                      placeholder="be>Nk nam ps>d kro"
                    >
                      <Option value="ivrDI 6un m>D5 nI Aavk">
                        Aes.bI.Aa[ be>Nk
                      </Option>
                      <Option value="surt 6un m>D5 nI Aavk">
                        AeksIs be>Nk
                      </Option>
                      <Option value="qatr nI Aavk">be>Nk AOf broDa</Option>
                      <Option value="pxu nI Aavk">vra0a be>Nk</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* --------------------------Cheque No.---------------------------------- */}
                <Form.Item className="cheque-no" label="cek n>.">
                  {getFieldDecorator("no", {
                    rules: [{ required: true }],
                    initialValue: type === "edit" ? data.no : ""
                  })(
                    <Input
                      type="number"
                      className="english-font-input"
                      style={{ width: "100%" }}
                      placeholder="000000"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={16}>
                {/* ----------------------------No cheque Name----------------------------------- */}
                <Form.Item
                  className="ant-col"
                  label="nam &#34; cek SvIkarnar nu nam &#34; :"
                >
                  {getFieldDecorator("name", {
                    rules: [{ required: true }],
                    // initialValue: type === "edit" && data.name
                    initialValue: type === "edit" ? data.name : ""
                  })(<Input placeholder="cek SvIkarnar nu nam" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                {/* ------------------------------phone No--------------------------------- */}
                <Form.Item className="ant-col" label="moba[l n>.">
                  {getFieldDecorator("phone", {
                    rules: [{ required: true }],
                    // initialValue: type === "edit" && data.phone
                    initialValue: type === "edit" ? data.phone : ""
                  })(
                    <Input
                      type="number"
                      className="english-font-input"
                      placeholder="0000000000"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                {/* ----------------------------Amount in Digit----------------------------------- */}
                <Form.Item className="ant-col" label="rkm">
                  {getFieldDecorator("amount", {
                    rules: [{ required: true }],
                    // initialValue: type === "edit" && data.amount
                    initialValue: type === "edit" ? data.amount : ""
                  })(
                    <Input
                      type="number"
                      onChange={this.handelNumber}
                      className="english-font-input"
                      placeholder="₹000000"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={16}>
                {/* ------------------------------Amount in Words--------------------------------- */}
                <Form.Item className="ant-col" label="rkm">
                  {getFieldDecorator("amountword", {
                    // // initialValue:
                    // rules: [{ required: true }]
                  })(
                    <Input
                      disabled
                      placeholder={converter.toWords(this.state.number || 0)}
                      className="english-font-input"
                      // placeholder="Five thousand Rupees Only/-"
                    />
                  )}
                </Form.Item>
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
                <Button
                  size="default"
                  htmlType="submit"
                  icon="printer"
                  style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                >
                  {" "}
                  ip/N3
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

const AddEmployee = Form.create({ name: "normal_login" })(Index);
export default AddEmployee;
