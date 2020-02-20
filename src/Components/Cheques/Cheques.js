import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import moment from "moment";
import "./Cheque.scss";
import {
  Input,
  Select,
  InputNumber,
  DatePicker,
  Form,
  Icon,
  Button,
  Modal,
  Radio,
  Row,
  Col,
  Divider
} from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}

export class Cheques extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <div>
          <Button
            className="button-text-size"
            type="primary"
            icon="printer"
            style={{ marginRight: 20 }}
            size="large"
          >
            Nyu cek ip/N3
          </Button>
        </div>
        <div className="report-generation">
          <h1>rIpo3 fIL3r</h1>

          <Form className="form-income">
            <div className="row income-model-wrapper">
              <Form.Item label="tarIq ps>d kro">
                <RangePicker
                  className="english-font-input"
                  ranges={{
                    Today: [moment(), moment()],
                    "This Month": [
                      moment().startOf("month"),
                      moment().endOf("month")
                    ]
                  }}
                  onChange={onChange}
                />
              </Form.Item>

              <Form.Item className="form-item-margin" label="cek n>.">
                <InputNumber
                  className="english-font-input"
                  style={{ width: "100%" }}
                  placeholder="000000"
                  type="number"
                  min="0"
                />
              </Form.Item>

              <Form.Item
                className="ant-col ant-col-8 form-item-margin"
                label="be>Nk nam"
                hasFeedback
              >
                <Select
                  className="in-icon-arrow"
                  placeholder="be>Nk nam ps>d kro"
                >
                  <Option value="ivrDI 6un m>D5 nI Aavk">
                    Aes.bI.Aa[ be>Nk
                  </Option>
                  <Option value="surt 6un m>D5 nI Aavk">AeksIs be>Nk</Option>
                  <Option value="qatr nI Aavk">be>Nk AOf broDa</Option>
                  <Option value="pxu nI Aavk">vra0a be>Nk</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="row">
              <Form.Item label="rkm 4I">
                <InputNumber
                  className="english-font-input"
                  style={{ width: "100%" }}
                  placeholder="₹000000"
                  type="number"
                  min="0"
                />
              </Form.Item>
              <Form.Item className="max-income" label="su6I">
                <InputNumber
                  className="english-font-input"
                  style={{ width: "100%" }}
                  placeholder="₹000000"
                  type="number"
                  min="0"
                />
              </Form.Item>
              {/* ------------------------------Doner Name-------------------------------- */}
              <Form.Item
                className="ant-col ant-col-8 form-item-margin"
                label="nam &#34; cek SvIkar nar nu nam &#34; :"
              >
                <Input placeholder="data 7I nam" />
              </Form.Item>
            </div>
            <div className="m-btn-gru">
              {/* ------------------------------Generat Button--------------------------------- */}
              <Form.Item>
                <Button
                  size="default"
                  type="primary"
                  htmlType="submit"
                  icon="snippets"
                >
                  jnre3 rIpo3
                </Button>
              </Form.Item>
              {/* ------------------------------Print button--------------------------- */}
              <Form.Item>
                <Button
                  size="default"
                  htmlType="submit"
                  icon="printer"
                  style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                >
                  {" "}
                  ip/N3
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <Divider orientation="left" className="divider-color divider-label">
        b3n klIk for Nyu cek ip/N3 b3n
        </Divider>
        {/* ------------------------------------Cheque Printing Form------------------------------------- */}
        <div>
          {/* ------------------------------------------------------------------------------------------
          --------------------------------Cheque Printing Page------------------------------------------
          ------------------------------------------------------------------------------------------ */}
          <Row gutter={16}>
            <Col>
              <h2>ip/N3 cek</h2>
            </Col>
          </Row>

          <Row type="flex" justify="space-between">
            <Col span={4}>
              {/* ------------------------------Date--------------------------------- */}
              <Form.Item className="date-input" label="tarIq">
                <DatePicker className="english-font-input" />
              </Form.Item>
            </Col>

            <Col span={4}>
              {/* ------------------------------Cheque No--------------------------------- */}
              <Form.Item className="cheque-no" label="cek n>.">
                <Input
                  type="number"
                  className="english-font-input"
                  style={{ width: "100%" }}
                  placeholder="000000"
                />
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={8}>
              {/* -----------------------------Name-------------------------------- */}
              <Form.Item
                className="ant-col"
                label="nam &#34; cek SvIkarnar nu nam &#34; :"
              >
                <Input placeholder="data 7I nam" />
              </Form.Item>
            </Col>
            <Col span={4}>
              {/* ------------------------------phone No--------------------------------- */}
              <Form.Item label="moba[l n>.">
                <Input
                  type="number"
                  className="english-font-input"
                  placeholder="0000000000"
                />
              </Form.Item>
            </Col>
          </Row>
          {/* ----------------------------------------------------------------------------------
          --------------------------------------------------------------------------------------
          -------------------------------------------------------------------------------------- */}
          <Row gutter={[16, 16]}>
            <Col span={6}>
              {/* ----------------------------------Amount------------------------------------- */}
              <Form.Item label="rkm">
                <Input
                  type="number"
                  className="english-font-input"
                  placeholder="₹000000"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              {/* ------------------------------Amount in Words--------------------------------- */}
              <Form.Item label="rkm">
                <Input
                  disabled
                  type="number"
                  className="english-font-input"
                  placeholder="Five thousand Rupees Only/-"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              {/* ------------------------------Bank Name--------------------------------- */}
              <Form.Item className="" label="be>Nk nam" hasFeedback>
                <Select
                  className="in-icon-arrow"
                  placeholder="be>Nk nam ps>d kro"
                >
                  <Option value="ivrDI 6un m>D5 nI Aavk">
                    Aes.bI.Aa[ be>Nk
                  </Option>
                  <Option value="surt 6un m>D5 nI Aavk">AeksIs be>Nk</Option>
                  <Option value="qatr nI Aavk">be>Nk AOf broDa</Option>
                  <Option value="pxu nI Aavk">vra0a be>Nk</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6} className="button-group-print">
              {/* ------------------------------Print button--------------------------- */}
              <Form.Item className="print-btn-margin">
                <Button
                  size="default"
                  htmlType="submit"
                  icon="printer"
                  style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                >
                  {" "}
                  ip/N3
                </Button>
              </Form.Item>
              {/* ------------------------------Cancel Button--------------------------------- */}
              <Form.Item>
                <Button size="default">rd kro</Button>
              </Form.Item>
            </Col>
          </Row>
        </div>

        <Divider orientation="left" className="divider-color divider-label">
          3ebl forme3 <Icon theme="filled" type="lock" />
        </Divider>
        {/*-------------------------------------Cheque Table Details-------------------------------------  */}
        <Row gutter={[8, 8]}>
          <Col span={3}>
            <h3>tarIq</h3>
          </Col>
          <Col span={3}>
            <h3>cek n></h3>
          </Col>
          <Col span={3}>
            <h3>nam</h3>
          </Col>
          <Col span={3}>
            <h3>moba[l n></h3>
          </Col>
          <Col span={3}>
            <h3>rkm</h3>
          </Col>
          <Col span={3}>
            <h3>be>Nk nam</h3>
          </Col>
          <Col span={3}>
            <h3>DIlI3</h3>
          </Col>
          <Col span={3}>
            <h3></h3>
          </Col>
        </Row>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cheques);
