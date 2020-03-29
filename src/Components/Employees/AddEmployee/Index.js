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

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileData: {},
      fileList: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Index -> values", values);
      if (!err) {
        if (this.props.type === "edit") {
          console.log("Index -> this.props.type", this.props.type);
          this.props.handelEditData(this.props.data._id, values);
        } else {
          const formData = new FormData();
          formData.append("doc", this.state.fileData);
          formData.append("name", values.name);
          formData.append("type", values.type);
          formData.append("phone", values.phone);
          formData.append("address", values.address);
          console.log("Index -> formData", formData);
          const filedata = Object.assign({}, values, formData);
          console.log("Received values of form: ", filedata);
          this.props.submit(formData);
        }
        this.props.form.resetFields();
        this.setState({
          fileList: []
        });
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
    this.props.handelEmployeePopup();
    this.setState({
      fileList: []
    });
  };

  documentsUpload = file => {
    this.setState({
      fileData: file
    });
    return true;
    // const formData = new FormData();
    // formData["import_file"] = file;
    // console.log("log in a file upload", formData);
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  render() {
    if (this.props.type === "edit") {
      console.warn("this is  alog in a edit employee list ->", this.props.data);
    } else {
      console.log("this is  alog in a edit employee list ->", this.props.data);
    }
    const props2 = {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      listType: "picture",
      // defaultFileList: [...fileList],
      className: "upload-list-inline",
      defaultFileList: [],
      onChange: this.handleChange
    };
    const { getFieldDecorator } = this.props.form;
    const { type, data } = this.props;
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
            <h2 className="form-titel">Aavel pxuAO nu r+S3r</h2>
            <Form className="form-income" onSubmit={this.handleSubmit}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item className="" label="kmRcarI no p/kar" hasFeedback>
                    {/* ------------------------------Post type--------------------------------- */}

                    {getFieldDecorator("type", {
                      rules: [{ required: true }],
                      // initialValue: type && data.type
                      initialValue: type === "edit" ? data.type : ""
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
                  <Form.Item label="moba[l n>.">
                    {getFieldDecorator("phone", {
                      rules: [
                        { required: true, message: "Enter The Mobile Number!" }
                      ],
                      // initialValue: type && data.phone
                      initialValue: type === "edit" ? data.phone : ""
                    })(
                      <Input
                        type="number"
                        className="english-font-input"
                        placeholder="+91 0000000000"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={16}>
                  {/* -----------------------------Address of Employees-------------------------------- */}
                  <Form.Item className="ant-col" label="srnamu">
                    {getFieldDecorator("address", {
                      rules: [
                        { required: true, message: "Enter The Address!" }
                      ],
                      // initialValue: type && data.address
                      initialValue: type === "edit" ? data.address : ""
                    })(<Input placeholder="srnamu" />)}
                  </Form.Item>
                </Col>
              </Row>

              {/* -------------------------------Upload Button--------------------------------------- */}

              <Row>
                <Form.Item label="AploD DoKyumeN3s:" extra="">
                  {getFieldDecorator("file")(
                    <Upload
                      {...props2}
                      beforeUpload={file => this.documentsUpload(file)}
                      fileList={this.state.fileList}
                    >
                      <Button type="primary">
                        <Icon type="file-add" /> AploD
                      </Button>
                    </Upload>
                  )}
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
          </div>
        </Modal>
      </div>
    );
  }
}

const AddEmployee = Form.create({ name: "normal_login" })(Index);
export default AddEmployee;
