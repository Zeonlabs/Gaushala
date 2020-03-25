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
            <h2 className="form-titel">sWy7I nI yadI ma ]mero</h2>
            <Form className="form-income" onSubmit={this.handleSubmit}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  {/* ------------------------------Post type--------------------------------- */}
                  <Form.Item className="" label="hod\o" hasFeedback>
                    {getFieldDecorator("position", {
                      rules: [{ required: true }],
                      initialValue: type === "edit" ? data.position : ""
                      // initialValue: type && data.position
                    })(
                      <Select
                        className="in-icon-arrow"
                        placeholder="hod\o ps>d kro"
                      >
                        <Option value="પ્રમુખ શ્રી">પ્રમુખ શ્રી</Option>
                        <Option value="ઉપપ્રમુખ શ્રી">ઉપપ્રમુખ શ્રી</Option>
                        <Option value="મંત્રી શ્રી">મંત્રી શ્રી </Option>
                        <Option value="ખજાનચી">ખજાનચી શ્રી</Option>
                        <Option value="સહમંત્રીશ્રી">સહમંત્રીશ્રી</Option>
                        <Option value="ટ્રસ્ટી શ્રી">ટ્રસ્ટી શ્રી</Option>
                        <Option value="સંગઠનમંત્રી શ્રી">
                          સંગઠનમંત્રી શ્રી
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={16}>
                  {/* -----------------------------Name of Employees-------------------------------- */}
                  <Form.Item className="ant-col" label="nam">
                    {getFieldDecorator("name", {
                      rules: [{ required: true, message: "Enter The Name" }],
                      // initialValue: type && data.name
                      initialValue: type === "edit" ? data.name : ""
                    })(<Input placeholder="nam" />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
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
                <Col span={16}>
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
