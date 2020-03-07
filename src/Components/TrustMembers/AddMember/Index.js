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
  Modal
} from "antd";
const { Option } = Select;

// const props = {
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   listType: 'picture',
//   // defaultFileList: [...fileList],
// };

const props2 = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture",
  // defaultFileList: [...fileList],
  className: "upload-list-inline"
};

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
    this.props.form.resetFields();
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
                      rules: [{ required: true }]
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
                      rules: [{ required: true, message: "Enter The Name" }]
                    })(<Input placeholder="nam" />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  {/* ------------------------------phone No--------------------------------- */}

                  <Form.Item label="moba[l n>.">
                    {getFieldDecorator("mno", {
                      rules: [
                        { required: true, message: "Enter The Mobile Number!" }
                      ]
                    })(
                      <Input
                        type="number"
                        className="english-font-input"
                        placeholder="+91 0000000000"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={16} >
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
export default AddEmployee;
