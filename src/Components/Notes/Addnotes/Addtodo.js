import React, { Component } from "react";
import { Drawer, Button, Form, Input } from "antd";
const { TextArea } = Input;

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handelReset = () => {
    this.props.form.resetFields();
    this.props.close();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Drawer
          title="Basic Drawer"
          maskClosable={false}
          width={500}
          placement="right"
          onClose={this.handelReset}
          visible={this.props.visible}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                rules: [
                  { required: true, message: "Please Enter Title of notes!" }
                ]
              })(
                <Input
                  // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Title"
                />
              )}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description", {
                rules: [{ required: true, message: "Please Add description!" }]
              })(
                <TextArea
                  // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Descriptions"
                  rows={8}
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button className="login-form-button" onClick={this.handelReset}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    );
  }
}
const Addtodo = Form.create({ name: "Addtodo" })(NormalLoginForm);

export default Addtodo;
