import React, { Component } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Upload,
  Row,
  Col,
  Select,
  Modal,
  DatePicker
} from "antd";
const { Option } = Select;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // this.props.handelEmployeePopup();
      }
    });
  };

  handleReset = () => {
    this.props.handelEmployeePopup();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Modal
          centered
          maskClosable={false}
          visible={this.props.openPopup}
          footer={null}
          // onOk={this.handelData}
          onCancel={this.props.handelEmployeePopup}
        >
          <Form className="form-income" onSubmit={this.handleSubmit}>
            <Row
              type="flex"
              justify="space-between"
              className="member-form-wrapper"
            >
              {/* ------------------------------Post type--------------------------------- */}
              <Col span={12}>
                <Form.Item className="date-input" label="tarIq" hasFeedback>
                  {getFieldDecorator("position", {
                    rules: [{ required: true }]
                  })(<DatePicker className="english-font-input" />)}
                </Form.Item>
              </Col>

              {/* -----------------------------Name of Employees-------------------------------- */}
              <Col className="gutter-row" span={12}>
                <Form.Item className="cheque-no" label="cek n>.">
                  {getFieldDecorator("name", {
                    rules: [{ required: true, message: "Enter The Name" }]
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

              {/* ------------------------------phone No--------------------------------- */}
              <Col span={12}>
                <Form.Item
                  className="ant-col"
                  label="nam &#34; cek SvIkarnar nu nam &#34; :"
                >
                  {getFieldDecorator("mno", {
                    rules: [
                      { required: true, message: "Enter The Mobile Number!" }
                    ]
                  })(<Input placeholder="data 7I nam" />)}
                </Form.Item>
              </Col>

              <Col className="gutter-row" span={6}>
                <Form.Item className="ant-col" label="moba[l n>.">
                  {getFieldDecorator("address", {
                    rules: [{ required: true, message: "Enter The Address!" }]
                  })(
                    <Input
                      type="number"
                      className="english-font-input"
                      placeholder="0000000000"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item className="ant-col" label="rkm">
                  {getFieldDecorator("address", {
                    rules: [{ required: true, message: "Enter The Address!" }]
                  })(
                    <Input
                      type="number"
                      className="english-font-input"
                      placeholder="₹000000"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item className="ant-col" label="rkm">
                  {getFieldDecorator("address", {
                    rules: [{ required: true, message: "Enter The Address!" }]
                  })(
                    <Input
                      disabled
                      type="number"
                      className="english-font-input"
                      placeholder="Five thousand Rupees Only/-"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item className="" label="be>Nk nam">
                  {getFieldDecorator("address", {
                    rules: [{ required: true, message: "Enter The Address!" }]
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
              {/*         </Row>
            <Row>
              <Form.Item label="AploD DoKyumeN3s:" extra="Upload Documents">
                {getFieldDecorator("upload", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  rules: [{ required: true}]
                })(
                  <Upload {...props2}>
                    <Button>
                      <Icon type="file-add" /> AploD
                    </Button>
                  </Upload>
                )}
                </Form.Item> */}
            </Row>
            <div className="m-btn-gru">
              {/* ----------------------------Cancel Button------------------------------- */}
              <Form.Item>
                <Button size="default" onClick={this.handleReset}>
                  rd kro
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
