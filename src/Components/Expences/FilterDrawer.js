import React, { Component } from "react";
import {
  // Table,
  Button,
  // Icon,
  Drawer,
  Select,
  Form,
  Input,
  Radio,
  DatePicker,
  Row,
  Col
  // Tooltip
} from "antd";
import "./Income.scss";
import "../Common/Forms/IncomeModels.styles.scss";
const { RangePicker } = DatePicker;
const { Option } = Select;

class FilterDrawers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: "",
      end_date: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
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

  onClose = () => {
    this.props.form.resetFields();
    this.props.onClose();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
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
              <h2 className="form-titel">javk rIpO3 fIL3r</h2>
            </Row>

            <Form
              onSubmit={this.handleSubmit}
              className="login-form form-income"
            >
              <Row>
                <Form.Item label="tarIq ps>d kro:">
                  {getFieldDecorator("daterange")(
                    <RangePicker
                      className="english-font-input"
                      onChange={this.dateChange}
                    />
                  )}
                </Form.Item>
              </Row>

              <Row>
                {/* --------------------------Expenses Type------------------------ */}
                <Form.Item className="" label="javk no p/kar" hasFeedback>
                  {getFieldDecorator("type")(
                    <Select
                      className="in-icon-arrow"
                      placeholder="javk no p/kar ps>d kro"
                    >
                      <Option value="qa~a nI javk">qa~a nI javk</Option>
                      <Option value="mjurI qcR">mjurI qcR</Option>
                      <Option value="6un qcR">6un qcR</Option>
                      <Option value="ba>6kam qcR">ba>6kam qcR</Option>
                      <Option value="nIr~a qcR">nIr~a qcR</Option>
                      <Option value="Do. - dva qcR">Do. - dva qcR</Option>
                      <Option value="vahn qcR">vahn qcR</Option>
                      <Option value="vaDI qcR">vaDI qcR</Option>
                      <Option value="p/s>g qcR">p/s>g qcR</Option>
                      <Option value="ANy qcR">ANy qcR</Option>
                    </Select>
                  )}
                </Form.Item>
              </Row>

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item label="dan SvIkar">
                    {getFieldDecorator("moneyType")(
                      <Radio.Group>
                        <Radio value="cash">rokD</Radio>
                        <Radio value="cheque">cek</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item className="cheque-no" label="vouchr n>.">
                    {getFieldDecorator("chequeNo")(
                      <Input
                        className="english-font-input"
                        style={{ width: "100%" }}
                        placeholder="000000"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item label="rkm 4I">
                    {getFieldDecorator("amountFrom")(
                      <Input
                        className="english-font-input"
                        style={{ width: "100%" }}
                        placeholder="000000"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item className="max-income" label="su6I">
                    {getFieldDecorator("amountTo")(
                      <Input
                        className="english-font-input"
                        style={{ width: "100%" }}
                        placeholder="000000"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Button type="primary" htmlType="submit" size="large">
                  rIpor3
                </Button>
              </Row>
            </Form>
          </div>
        </Drawer>
      </div>
    );
  }
}

const FilterDrawer = Form.create({ name: "Expences" })(FilterDrawers);

export default FilterDrawer;
