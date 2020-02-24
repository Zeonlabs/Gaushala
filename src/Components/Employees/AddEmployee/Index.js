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
            <Row type="flex" justify="space-between">
              {/* ------------------------------Post type--------------------------------- */}
              <Col span={6}>
                <Form.Item className="" label="kmRcarI no p/kar" hasFeedback>
                  {getFieldDecorator("employee_type", {
                    rules: [{ required: true }]
                  })(
                    <Select
                      className="in-icon-arrow"
                      placeholder="kmRcarI no p/kar ps>d kro"
                    >
                      <Option value="vaDI na mjur">vaDI na mjur</Option>
                      <Option value="gOxa5a na mjur">gOxa5a na mjur</Option>
                      <Option value="Dok3r">Dok3r</Option>
                      <Option value="mheta+">mheta+</Option>
                      <Option value="ANy">ANy</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>

              {/* -----------------------------Name of Employees-------------------------------- */}
              <Col className="gutter-row" span={6}>
                <Form.Item className="ant-col" label="nam">
                  {getFieldDecorator("name", {
                    rules: [{ required: true, message: "Enter The Name" }]
                  })(<Input placeholder="nam" />)}
                </Form.Item>
              </Col>

              {/* ------------------------------phone No--------------------------------- */}
              <Col span={4}>
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

              {/* -----------------------------Address of Employees-------------------------------- */}
              <Col className="gutter-row" span={6}>
                <Form.Item className="ant-col" label="srnamu">
                  {getFieldDecorator("address", {
                    rules: [{ required: true, message: "Enter The Address!" }]
                  })(<Input placeholder="srnamu" />)}
                </Form.Item>
              </Col>
            </Row>
            {/* -------------------------------Upload Button--------------------------------------- */}
            <Row>
              <Form.Item label="AploD DoKyumeN3s:" extra="Upload Documents">
                <Upload {...props2}>
                  <Button>
                    <Icon type="file-add" /> AploD
                  </Button>
                </Upload>
              </Form.Item>
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
                <Button size="default" type="primary" htmlType="submit">
                  sev kro
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
