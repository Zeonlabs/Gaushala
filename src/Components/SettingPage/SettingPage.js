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
  InputNumber,
  message
} from "antd";
import OtpScreen from "./OtpScreen";
import { addUser } from "../../Actions/SetUpUser";

const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;

export class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: "Content of the modal",
      visible: false,
      visibleModal: false,
      confirmLoading: false,
      loading: false,
      iconLoading: false,
      username: "",
      mobilenumber: "",
      pin: ""
    };
  }

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
    const { username, mobilenumber, pin } = this.state;
    if (username !== "" && mobilenumber !== "" && pin !== "") {
      const data = {
        name: username,
        phone: mobilenumber,
        pin
      };
      this.props.addUser(data).then(res => {
        this.setState({
          iconLoading: false,
          username: "",
          mobilenumber: "",
          pin: ""
        });
      });
    } else {
      message.error("please fill all the field");
      this.setState({
        iconLoading: false
      });
    }
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

  handelChange = () => {
    this.setState({
      visibleModal: !this.state.visibleModal
    });
  };

  onChangeUserName = e => {
    console.log(
      "SettingPage -> onChangeUserName -> e.target.value",
      e.target.value
    );
    this.setState({
      username: e.target.value
    });
  };

  onChangeMobileNumber = e => {
    console.log("SettingPage -> onChangeUserName -> e.target.value", e);
    this.setState({
      mobilenumber: e
    });
  };

  onChangePin = e => {
    console.log("SettingPage -> onChangeUserName -> e.target.value", e);
    this.setState({
      pin: e
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;

    return (
      <PageWrapper title="saoiTMga">
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
              <h1 className="form-titel">saoT nyau paIna naMbar</h1>
            </Row>

            <div className="form-income">
              <div
                className={
                  this.state.visibleModal
                    ? "display-pin-change"
                    : "display-none-pin-change"
                }
              >
                {/* =============================otp pin set========================== */}

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
              </div>
              <Row gutter={[16, 16]}>
                <Col span={8}></Col>
                <Col span={8}></Col>
                <Col span={8} style={{ padding: 0 }}>
                  {/* ------------------------------Submit button--------------------------- */}
                  <Form.Item>
                    <Button
                      size="default"
                      htmlType="submit"
                      icon="safety-certificate"
                      type="primary"
                      style={{ float: "right" }}
                    >
                      sabamaIT
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <OtpScreen
              className="otp-verification-page"
              handelShows={this.handelChange}
            />
          </Modal>
        </div>

        <h1>saaofTvaor saoiTMga</h1>
        <span className="warning">
          <Icon type="warning" /> naaoMGa: saaofTvaor maa qayaola kao[paNa
          sauGaara frI maoLavaI SakaSao nahI.
        </span>

        <Divider orientation="left" className="divider-color divider-label">
          yausar saoiTMga <Icon type="user" />
        </Divider>
        <Row className="row-margin">
          {/* -----------------------------Name of Member-------------------------------- */}
          <Col className="gutter-row margin-left" span={6}>
            <Form.Item className="ant-col " label="yausar naama">
              <Input
                placeholder="naama"
                value={this.state.username}
                onChange={this.onChangeUserName}
              />
            </Form.Item>
          </Col>

          {/* ------------------------------phone No--------------------------------- */}
          <Col span={4} offset={1}>
            <Form.Item label="maaobaa[la naMbar">
              <InputNumber
                maxLength={10}
                className=""
                value={this.state.mobilenumber}
                onChange={this.onChangeMobileNumber}
                placeholder="0000000000"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item label="paIna naMbar">
              <InputNumber
                maxLength={4}
                value={this.state.pin}
                onChange={this.onChangePin}
                className=""
                placeholder="0000000000"
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
              saova
            </Button>
          </Col>
        </Row>

        <Divider orientation="left" className="divider-color divider-label">
          paIna laaok saoiTMga <Icon theme="filled" type="lock" />
        </Divider>

        <Row className="row-margin">
          <Col offset={1} className="pin-set margin-left">
            <label>paIna naMbar:</label>
            <Tag className="tag-clock" onClick={this.showModal} color="#f50">
              saoT nyau paIna naMbar
            </Tag>
          </Col>
        </Row>
        <Footer
          className="english-font-input"
          style={{ textAlign: "center", marginTop: "auto" }}
        >
          Official product of zeonlabs © 2018
        </Footer>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { addUser })(SettingPage);
