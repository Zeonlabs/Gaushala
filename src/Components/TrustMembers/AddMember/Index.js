import React, { Component } from "react";
import { addMembers } from "../../../Actions/TrustMembers";
import { Form, Input, Button, Row, Col, Select, Modal } from "antd";
import { connect } from "react-redux";
import NumericInput from "../../Common/Forms/InputNumber";
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
        // this.props.addMembers(values);
        const id = this.props.data._id;
        if (this.props.type === "edit") {
          this.props.handelEdit(id, values);
        } else {
          this.props.submit(values);
        }
        this.props.form.resetFields();
      }
    });
  };

  handleReset = () => {
    this.props.handelEmployeePopup();
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { type, data } = this.props;
    console.info("Index -> render -> data", type);
    return (
      <div>
        <Modal
          centered
          maskClosable={false}
          visible={this.props.openPopup}
          footer={null}
          // onOk={this.handelData}
          onCancel={this.handleReset}
        >
          <div className="income-model-wrapper">
            <h2 className="form-titel">navaa saByanao ]maorao</h2>
            <Form className="form-income" onSubmit={this.handleSubmit}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  {/* ------------------------------Post type--------------------------------- */}
                  <Form.Item className="" label="haodao" hasFeedback>
                    {getFieldDecorator("position", {
                      rules: [{ required: true }],
                      initialValue: type === "edit" ? data.position : ""
                      // initialValue: type && data.position
                    })(
                      <Select
                        className="in-icon-arrow"
                        placeholder="haodao pasaMd krao"
                      >
                        <Option value="pa`mauKa EaI">pa`mauKa EaI</Option>
                        <Option value="]papa`mauKa EaI">]papa`mauKa EaI</Option>
                        <Option value="maM~aI EaI">maM~aI EaI </Option>
                        <Option value="KaJanacaI">KaJanacaI</Option>
                        <Option value="sahmaM~aI EaI">sahmaM~aI EaI</Option>
                        <Option value="T/sTI EaI">T/sTI EaI</Option>
                        <Option value="saMgaZnamaM~aI EaI">
                          saMgaZnamaM~aI EaI
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={16}>
                  {/* -----------------------------Name of Employees-------------------------------- */}
                  <Form.Item className="ant-col" label="naama">
                    {getFieldDecorator("name", {
                      rules: [{ required: true, message: "Enter The Name" }],
                      // initialValue: type && data.name
                      initialValue: type === "edit" ? data.name : ""
                    })(<Input placeholder="naama" />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  {/* ------------------------------phone No--------------------------------- */}
                  <Form.Item className="ant-col" label="maaobaa[la naM.:">
                    {getFieldDecorator("phone", {
                      rules: [{ required: true }],
                      // initialValue: type === "edit" && data.phone
                      initialValue: type === "edit" ? data.phone : ""
                    })(
                      <Input
                        type="number"
                        className=""
                        placeholder="0000000000"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={16}>
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
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

const AddEmployee = Form.create({ name: "normal_login" })(Index);
export default connect(null, { addMembers })(AddEmployee);
