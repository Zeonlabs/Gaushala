import React, { useState } from "react";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import {
  Table,
  Button,
  Icon,
  Drawer,
  Select,
  Form,
  Input,
  Radio,
  DatePicker,
  Tooltip
} from "antd";
import "./Income.scss";
import "../Common/Forms/IncomeModels.styles.scss";

const { RangePicker } = DatePicker;
const { Option } = Select;

const columns = [
  {
    title: "tarIkh",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "SlIp n.",
    dataIndex: "slip_no",
    key: "slip_no"
  },
  {
    title: "nam",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "rkm",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "mobal No",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "p`kar",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "HStk nam",
    dataIndex: "ref_name",
    key: "ref_name"
  },
  {
    title: "HStk nam",
    dataIndex: "ref_nameq",
    key: "ref_name"
  },
  {
    title: "HStk nam",
    dataIndex: "ref_nameq",
    key: "ref_name"
  }
];

const data = [
  {
    key: 1,
    date: "12-23-1299",
    slip_no: 12,
    name: "ajsh skjd",
    amount: 33874,
    phone: 763277829,
    type: "cash",
    ref_name: "ywte6 duyfg7",
    ref_nameq: "ywte6 duyfg7"
  },
  {
    key: 1,
    date: "12-23-1299",
    slip_no: 12,
    name: "ajsh skjd",
    amount: 33874,
    phone: 763277829,
    type: "cash",
    ref_name: "ywte6 duyfg7",
    ref_nameq: "ywte6 duyfg7"
  },
  {
    key: 1,
    date: "12-23-1299",
    slip_no: 12,
    name: "ajsh skjd",
    amount: 33874,
    phone: 763277829,
    type: "cash",
    ref_name: "ywte6 duyfg7",
    ref_nameq: "ywte6 duyfg7"
  },
  {
    key: 1,
    date: "12-23-1299",
    slip_no: 12,
    name: "ajsh skjd",
    amount: 33874,
    phone: 763277829,
    type: "cash",
    ref_name: "ywte6 duyfg7",
    ref_nameq: "ywte6 duyfg7"
  }
];

const Income = () => {
  const [state, setState] = useState({ visible: false });

  const showDrawer = () => {
    setState({
      visible: true
    });
  };

  const onClose = () => {
    setState({
      visible: false
    });
  };

  return (
    <PageWrapper>
      <div className="row">
        <Tooltip title="fIL3r" placement="bottom">
          <Button
            shape="squre"
            size="large"
            type="primary"
            onClick={showDrawer}
            style={{ marginBottom: 30 }}
          >
            <Icon type="filter" theme="filled" style={{ fontSize: 17 }} />
            fIL3r
          </Button>
        </Tooltip>
      </div>
      <Drawer
        // title="fILtr"
        // closable={false}
        onClose={onClose}
        visible={state.visible}
        getContainer={false}
        width={450}
        headerStyle={{}}
      >
        <h1>Aavk rIpor3 fIL3r</h1>
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
            <Form.Item label="dan SvIkar">
              <Radio.Group>
                <Radio value="cash">rokD</Radio>
                <Radio value="cheque">cek</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item className="cheque-no" label="cek n>.">
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

      <Table columns={columns} dataSource={data} bordered />
    </PageWrapper>
  );
};

export default Income;
