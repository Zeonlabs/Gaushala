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
} from "antd";
import "./Income.scss";
import "../Common/Forms/IncomeModels.styles.scss";
import moment from "moment";
const { RangePicker } = DatePicker;
const { Option } = Select;
const dateFormat = "YYYY-MM-DD";

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
              <h2 className="form-titel">Aavak rIpaaoT fIlTr</h2>
            </Row>

            <Form
              onSubmit={this.handleSubmit}
              className="login-form form-income"
            >
              <Row>
                <Form.Item label="taarIKa pasaMd krao:">
                  {getFieldDecorator("daterange")(
                    <RangePicker
                      className="english-font-input "
                      ranges={{
                        Today: [moment(), moment()],
                        "This Month": [
                          moment().startOf("month"),
                          moment().endOf("month")
                        ]
                      }}
                      format={dateFormat}
                      onChange={this.dateChange}
                    />
                  )}
                </Form.Item>
              </Row>

              <Row>
                {/* --------------------------Income Type------------------------ */}
                <Form.Item className="" label="Aavak naao pa`kar " hasFeedback>
                  {getFieldDecorator("type")(
                    <Select
                      className="in-icon-arrow"
                      placeholder="Aavak naao pa`kar paMsad krao:"
                    >
                      <Option value="1">ivarDI Gauna maMDLa naI Aavak</Option>
                      <Option value="2">saurta Gauna maMDLa naI Aavak</Option>
                      <Option value="3">Kaatar naI Aavak</Option>
                      <Option value="4">paSau naI Aavak</Option>
                      <Option value="5">dataaEaI naI Aavak</Option>
                      <Option value="6">Anya Aavak</Option>
                    </Select>
                  )}
                </Form.Item>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item label="dana svaIkar">
                    {getFieldDecorator("moneyType")(
                      <Radio.Group>
                        <Radio value="cash">raokD</Radio>
                        <Radio value="cheque">caok</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item className="cheque-no" label="caok naM.:">
                    {getFieldDecorator("chequeNo")(
                      <Input
                        className=""
                        style={{ width: "100%" }}
                        placeholder="000000"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col span={11}>
                  <Form.Item label="rkma qaI:">
                    {getFieldDecorator("amountFrom")(
                      <Input className="" placeholder="000000" />
                    )}
                  </Form.Item>
                </Col>

                <Col span={11}>
                  <Form.Item className="max-income" label="sauGaI:">
                    {getFieldDecorator("amountTo")(
                      <Input className="" placeholder="000000" />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item className="max-income" label="vaa]car naM.">
                    {getFieldDecorator("slipNo")(
                      <Input
                        className=" "
                        style={{ width: "100%" }}
                        placeholder="000000"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Button type="primary" htmlType="submit" size="large">
                  rIpaaoT
                </Button>
              </Row>
            </Form>
          </div>
        </Drawer>
      </div>
    );
  }
}

const FilterDrawer = Form.create({ name: "Income" })(FilterDrawers);

export default FilterDrawer;
