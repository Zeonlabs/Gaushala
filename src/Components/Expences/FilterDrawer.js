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
  DatePicker
  // Tooltip
} from "antd";
import "./Income.scss";
import "../Common/Forms/IncomeModels.styles.scss";
const { RangePicker } = DatePicker;
const { Option } = Select;

class FilterDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Drawer
          // title="fILtr"
          // closable={false}
          onClose={this.props.onClose}
          visible={this.props.visible}
          getContainer={false}
          width={560}
        >
          <h1>javk rIpO3 fIL3r</h1>
          <Form>
            <div className="row">
              <Form.Item label="tarIq ps>d kro:">
                {/* ------------------------------Date From-To -------------------- */}
                <RangePicker className="english-font-input" />
              </Form.Item>
            </div>

            <div className="row">
              {/* --------------------------Income Type------------------------ */}
              <Form.Item
                className="ant-col ant-col-11"
                label="Aavk no p/kar"
                hasFeedback
              >
                <Select
                  className="in-icon-arrow"
                  placeholder="Aavk no p/kar ps>d kro"
                >
                  <Option value="ivrDI 6un m>D5 nI Aavk">
                    ivrDI 6un m>D5 nI Aavk
                  </Option>
                  <Option value="surt 6un m>D5 nI Aavk">
                    surt 6un m>D5 nI Aavk
                  </Option>
                  <Option value="qatr nI Aavk">qatr nI Aavk</Option>
                  <Option value="pxu nI Aavk">pxu nI Aavk</Option>
                  <Option value=" ANy Aavk">ANy Aavk</Option>
                  <Option value="data7I nI Aavk">data7I nI Aavk</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="row">
              <Form.Item label="dan SvIkar" style={{ width: "100%" }}>
                <Radio.Group>
                  <Radio value="cash">rokD</Radio>
                  <Radio value="cheque">cek</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item className="cheque-no" label="vouchr n>.">
                <Input
                  className="english-font-input"
                  style={{ width: "100%" }}
                  placeholder="000000"
                />
              </Form.Item>
            </div>

            <div className="row">
              <Form.Item label="rkm 4I">
                <Input
                  className="english-font-input"
                  style={{ width: "100%" }}
                  placeholder="000000"
                />
              </Form.Item>
              <Form.Item className="max-income" label="su6I">
                <Input
                  className="english-font-input"
                  style={{ width: "100%" }}
                  placeholder="000000"
                />
              </Form.Item>
            </div>

            <div className="row">
              <Button type="primary" size="large">
                rIpor3
              </Button>
            </div>
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default FilterDrawer;
