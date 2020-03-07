import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import "./SettingPage.scss";
import {
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
  Icon,
  Divider,
  Tag,
  Button,
  Layout,
} from "antd";
import OtpScreen from "./OtpScreen";

const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;

export class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false
  };

  state = {
    loading: false,
    iconLoading: false
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");

    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;

    return (
      <PageWrapper title="sei3>g">
        <div>
          <Modal
            title="pIn se3"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            footer={null}
          >
            <Row>
              <h1 className="form-titel">p/IN3 cek</h1>
            </Row>

            <div className="form-income">
              <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>
                nvo pIn n>br se3 kro
              </h2>
              <Row gutter={[16, 16]}>
                <Col span={8}></Col>
                <Col span={8}>
                  <Form.Item label="nvo pIn n>br ]mero:">
                    <Input />
                  </Form.Item>
                  <Form.Item label="frI pIn n>br ]mero:">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}></Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col span={8}></Col>
                <Col span={8}></Col>
                <Col span={8} style={{padding:0,}}>
                  {/* ------------------------------Submit button--------------------------- */}
                  <Form.Item>
                    <Button
                      size="default"
                      htmlType="submit"
                      icon="safety-certificate"
                      type="primary"
                      style={{ float:"right" }}
                    >
                      sbmI3
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <OtpScreen className="otp-verification-page" />
          </Modal>
        </div>

        <h1>sof3ver sei3>Ng</h1>
        <span className="warning">
          <Icon type="warning" /> nO6: sof3ver ma sei3>g nI A>dr 4yel su6ara Aek
          vqt 4ya bad frI pa0a me5vI xkaxe nhI.
        </span>

        <Divider orientation="left" className="divider-color divider-label">
          yusr sei3>g <Icon type="user" />
        </Divider>
        <Row className="row-margin">
          {/* -----------------------------Name of Member-------------------------------- */}
          <Col className="gutter-row margin-left" span={6}>
            <Form.Item className="ant-col input-name-gujarati" label="3\S3 nam">
              <Input  placeholder="nam" />
            </Form.Item>
          </Col>

          {/* ------------------------------phone No--------------------------------- */}
          <Col span={4} offset={1}>
            <Form.Item label="moba[l n>.">
              <Input
                type="number"
                className="english-font-input"
                placeholder="+91 0000000000"
              />
            </Form.Item>
          </Col>
          {/* ------------------------------Save Button------------------------------ */}
          <Col className="button-group-print" span={3}>
            <Button
              type="primary"
              icon="save"
              loading={this.state.iconLoading}
              onClick={this.enterIconLoading}
            >
              sev
            </Button>
          </Col>
        </Row>

        <Divider orientation="left" className="divider-color divider-label">
          pIn lok sei3>g <Icon theme="filled" type="lock" />
        </Divider>

        <Row className="row-margin">
          <Col offset={1} className="pin-set margin-left">
            <label>pIn:</label>
            <Tag className="tag-clock" onClick={this.showModal} color="#f50">
              Nyu pIn n>br se3 kro.
            </Tag>
          </Col>
        </Row>
        <Footer
          className="english-font-input"
          style={{ textAlign: "center", marginTop: "auto" }}
        >
          Officel product of zeonlabs © 2018
        </Footer>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);