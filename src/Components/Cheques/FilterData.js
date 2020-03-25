import React, { Component } from "react";
import "../Cheques/SideDrawer.scss";
import {
  Form,
  Drawer,
  Input,
  Button,
  Row,
  Col,
  Select,
  DatePicker
} from "antd";
import moment from "moment";
const { Option } = Select;
const { RangePicker } = DatePicker;
class FilterData extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.onClose();
        Object.keys(values).forEach(
          key => values[key] === undefined && delete values[key]
        );
        console.log("Received values After trime: ", values);
        const data = {
          dateFrom: values.daterange ? this.state.start_date : undefined,
          dateTo: values.daterange ? this.state.end_date : undefined,
          ...values
        };
        delete data.daterange;
        Object.keys(data).forEach(
          key => data[key] === undefined && delete data[key]
        );
        this.props.submit(data);
        this.props.form.resetFields();
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
    this.props.onClose();
  };

  dateChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    const startDate = dateString[0];
    const updatedStartDate = startDate.replace(/\//g, "-");
    const endDate = dateString[1];
    const updatedEndDate = endDate.replace(/\//g, "-");
    this.setState({
      start_date: updatedStartDate,
      end_date: updatedEndDate
    });
  };

  // onChange = (dates, dateStrings) => {
  //   console.log("From: ", dates[0], ", to: ", dates[1]);
  //   console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  // };

  onClose = () => {
    this.props.form.resetFields();
    this.props.onClose();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Drawer
        // title="fILtr"
        // closable={false}
        maskClosable={false}
        onClose={this.onClose}
        visible={this.props.visible}
        getContainer={false}
        width={500}
      >
        <div className="income-model-wrapper">
          <Row>
            <h2 className="form-titel">cek fIL3r</h2>
          </Row>

          <div>
            <Form className="form-income" onSubmit={this.handleSubmit}>
              <Row
                type="flex"
                justify="space-between"
                className="member-form-wrapper"
              >
                {/* ------------------------------Date--------------------------------- */}
                <Col span={24}>
                  <Form.Item label="tarIq ps>d kro">
                    {getFieldDecorator("daterange")(
                      <RangePicker
                        className="english-font-input"
                        style={{ width: "100%" }}
                        ranges={{
                          Today: [moment(), moment()],
                          "This Month": [
                            moment().startOf("month"),
                            moment().endOf("month")
                          ]
                        }}
                        onChange={this.dateChange}
                      />
                    )}
                  </Form.Item>
                </Col>

                {/* -----------------------------Name of Employees-------------------------------- */}
                <Col className="gutter-row" span={24}>
                  <Form.Item className="cheque-no" label="cek n>.">
                    {getFieldDecorator("chequeNo")(
                      <Input
                        type="number"
                        className="english-font-input"
                        style={{ width: "100%" }}
                        placeholder="000000"
                      />
                    )}
                  </Form.Item>
                </Col>

                {/* ------------------------------phone No--------------------------------- */}
                <Col span={24}>
                  <Form.Item
                    className="ant-col"
                    label="nam &#34; cek SvIkarnar nu nam &#34; :"
                  >
                    {getFieldDecorator("name")(
                      <Input placeholder="data 7I nam" />
                    )}
                  </Form.Item>
                </Col>

                <Col className="gutter-row" span={24}>
                  <Form.Item className="ant-col" label="moba[l n>.">
                    {getFieldDecorator("phone")(
                      <Input
                        type="number"
                        className="english-font-input"
                        placeholder="0000000000"
                      />
                    )}
                  </Form.Item>
                </Col>
                {/* <Col className="gutter-row" span={12}>
                <Form.Item className="ant-col" label="rkm">
                  {getFieldDecorator("amount")(
                    <Input
                      type="number"
                      className="english-font-input"
                      placeholder="₹000000"
                    />
                  )}
                </Form.Item>
              </Col> */}
                <Col className="gutter-row" span={11}>
                  <Form.Item className="ant-col" label="rkm">
                    {getFieldDecorator("amountFrom")(
                      <Input
                        type="number"
                        className="english-font-input"
                        placeholder="₹000000"
                        min="0"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={11} offset={2}>
                  <Form.Item className="ant-col" label="su6I">
                    {getFieldDecorator("amountTo")(
                      <Input
                        type="number"
                        className="english-font-input"
                        placeholder="₹000000"
                        min="0"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={24}>
                  <Form.Item className="" label="be>Nk nam">
                    {getFieldDecorator("bank")(
                      <Select
                        className="in-icon-arrow"
                        placeholder="be>Nk nam ps>d kro"
                      >
                        <Option value="ivrDI 6un m>D5 nI Aavk">
                          Aes.bI.Aa[ be>Nk
                        </Option>
                        <Option value="surt 6un m>D5 nI Aavk">
                          AeksIs be>Nk
                        </Option>
                        <Option value="qatr nI Aavk">be>Nk AOf broDa</Option>
                        <Option value="pxu nI Aavk">vra0a be>Nk</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <div className="m-btn-gru">
                {/* ----------------------------Cancel Button------------------------------- */}
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
        </div>
      </Drawer>
    );
  }
}

const FilterDatas = Form.create({ name: "normal_login" })(FilterData);

export default FilterDatas;
