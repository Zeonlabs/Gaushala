import React, { Component } from "react";
import { Drawer, Button, Form, Input, Row } from "antd";
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
          maskClosable={false}
          width={500}
          placement="right"
          onClose={this.handelReset}
          visible={this.props.visible}
        >
          <div className="income-model-wrapper menu-list-title">
            <Row>
              <h2 className="form-titel menu-list-title">cek fIL3r</h2>
            </Row>

            <div>
              <Form
                onSubmit={this.handleSubmit}
                className="login-form form-income"
              >
                <Form.Item label="no>2 3a[3l">
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        required: true,
                        message: "Please Enter Title of notes!"
                      }
                    ]
                  })(
                    <Input
                      // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="no>2 nu 3a[3l"
                    />
                  )}
                </Form.Item>
                <Form.Item label="no>2">
                  {getFieldDecorator("description", {
                    rules: [
                      { required: true, message: "Please Add description!" }
                    ]
                  })(
                    <TextArea
                      // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="no>2 AHI lqo."
                      rows={8}
                    />
                  )}
                </Form.Item>
                <div className="m-btn-gru">
                  {/* ----------------------------Cancel Button------------------------------- */}
                  <Form.Item>
                    <Button
                      className="login-form-button"
                      onClick={this.handelReset}
                    >
                      rd 
                    </Button>
                  </Form.Item>
                  {/* ------------------------------Add button--------------------------- */}
                  <Form.Item>
                    <Button
                      size="default"
                      type="primary"
                      htmlType="submit"
                      icon="file-add"
                    >
                      no>2 ]mero
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}
const Addtodo = Form.create({ name: "Addtodo" })(NormalLoginForm);

export default Addtodo;
