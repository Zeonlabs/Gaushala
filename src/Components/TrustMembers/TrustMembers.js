import React, { Component } from "react";
import { connect } from "react-redux";
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
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import "./TrustMenbers.scss";

const { RangePicker } = DatePicker;
const { Option } = Select;

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}
export class TrustMembers extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        {/* ------------------------------------ Header Trust Members------------------------------- */}
        <Row>
          <Col span={8}>
            <h1>sWy7I nI yadI</h1>
          </Col>
          <Col className="button-add-members" span={8} offset={8}>
            <Button
              className="button-right button-text-size"
              type="primary"
              icon="user-add"
              style={{ marginRight: 20 }}
              size="large"
            >
              sWy ]mero
            </Button>
          </Col>
        </Row>
       {/* -------------------------------------Print List------------------------------------------ */}
        <div className="Report">
          <h1>rIpo3 fIL3r</h1>

          <Row >
            {/* ------------------------------Post type--------------------------------- */}
            <Col span={6}>
              <Form.Item className="" label="hod\o" hasFeedback>
                <Select className="in-icon-arrow" placeholder="hod\o ps>d kro">
                  <Option value="પ્રમુખ શ્રી">પ્રમુખ શ્રી</Option>
                  <Option value="ઉપપ્રમુખ શ્રી">ઉપપ્રમુખ શ્રી</Option>
                  <Option value="મંત્રી શ્રી">મંત્રી શ્રી </Option>
                  <Option value="ખજાનચી">ખજાનચી શ્રી</Option>
                  <Option value="સહમંત્રીશ્રી">સહમંત્રીશ્રી</Option>
                  <Option value="ટ્રસ્ટી શ્રી">ટ્રસ્ટી શ્રી</Option>
                  <Option value="સંગઠનમંત્રી શ્રી">સંગઠનમંત્રી શ્રી</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* ------------------------------Print button--------------------------- */}
            <Col span={4} offset={1} className="button-group-print">
              <Form.Item className="print-btn-margin">
                <Button
                  size="default"
                  htmlType="submit"
                  icon="printer"
                  style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                >
                 ip/N3
                </Button>
              </Form.Item>
              {/* ------------------------------Cancel Button--------------------------------- */}
              <Form.Item>
                <Button  size="default">rd kro</Button>
              </Form.Item>
            </Col>

          </Row>

        </div>

        <Divider orientation="left" className="divider-color divider-label">
        nvo sWy ]mero b3n klIk
        </Divider>


        {/* ------------------------------------------------------------------------------------------
          ---------------------------------------Add member---------------------------------------------
          ------------------------------------------------------------------------------------------ */}
        <div>
          <Row type="flex" justify="space-between">
            {/* ------------------------------Post type--------------------------------- */}
            <Col span={6}>
              <Form.Item className="" label="hod\o" hasFeedback>
                <Select className="in-icon-arrow" placeholder="hod\o ps>d kro">
                  <Option value="પ્રમુખ શ્રી">પ્રમુખ શ્રી</Option>
                  <Option value="ઉપપ્રમુખ શ્રી">ઉપપ્રમુખ શ્રી</Option>
                  <Option value="મંત્રી શ્રી">મંત્રી શ્રી </Option>
                  <Option value="ખજાનચી">ખજાનચી શ્રી</Option>
                  <Option value="સહમંત્રીશ્રી">સહમંત્રીશ્રી</Option>
                  <Option value="ટ્રસ્ટી શ્રી">ટ્રસ્ટી શ્રી</Option>
                  <Option value="સંગઠનમંત્રી શ્રી">સંગઠનમંત્રી શ્રી</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* -----------------------------Name of Member-------------------------------- */}
            <Col className="gutter-row" span={6}>
              <Form.Item className="ant-col" label="nam">
                <Input placeholder="nam" />
              </Form.Item>
            </Col>

            {/* ------------------------------phone No--------------------------------- */}
            <Col span={4}>
              <Form.Item label="moba[l n>.">
                <Input
                  type="number"
                  className="english-font-input"
                  placeholder="+91 0000000000"
                />
              </Form.Item>
            </Col>

            {/* ------------------------------add button--------------------------- */}
            <Col span={4} className="button-group-print">
              <Form.Item className="print-btn-margin">
                <Button
                  size="default"
                  htmlType="submit"
                  icon="vertical-align-bottom"
                  style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                >
                  ]mero
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
          3ebl forme3 
        </Divider>
        {/*-------------------------------------MemberDetails Table--------------------------------  */}
        <Row gutter={[8, 8]}>
          <Col span={4}>
            <h3>hod\o</h3>
          </Col>
          <Col span={4}>
            <h3>nam</h3>
          </Col>
          <Col span={4}>
            <h3>moba[l n>.</h3>
          </Col>
          <Col span={4}>
            <h3>AeDI3</h3>
          </Col>
          <Col span={4}>
            <h3>DIlI3</h3>
          </Col>
        </Row>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TrustMembers);
