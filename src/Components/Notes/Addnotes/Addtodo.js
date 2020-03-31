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
        if (this.props.type === "edit") {
          const id = this.props.data._id;
          this.props.editData(id, values);
          this.props.form.resetFields();
        } else {
          this.props.submit(values);
          this.props.form.resetFields();
        }
      }
    });
  };

  handelReset = () => {
    this.props.form.resetFields();
    this.props.close();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { type, data } = this.props;
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
              <h2 className="form-titel menu-list-title">naaoMGa ]maorao</h2>
            </Row>

            <div>
              <Form
                onSubmit={this.handleSubmit}
                className="login-form form-income"
              >
                <Form.Item label="naaoMGa hoDIMga">
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        required: true,
                        message: "Please Enter Title of notes!"
                      }
                    ],
                    // initialValue: type && data.title
                    initialValue: type === "edit" ? data.title : ""
                  })(
                    <Input
                      maxLength={10}
                      // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="hoDIMga"
                    />
                  )}
                </Form.Item>
                <Form.Item label="naaoMGa">
                  {getFieldDecorator("description", {
                    rules: [
                      { required: true, message: "Please Add description!" }
                    ],
                    // initialValue: type && data.description
                    initialValue: type === "edit" ? data.description : ""
                  })(
                    <TextArea
                      // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="naaoMGa AhI ]maorao."
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
                      ]maorao
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
