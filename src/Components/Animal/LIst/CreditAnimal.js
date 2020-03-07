import React, { Component } from "react";
import { Form, DatePicker, Icon, Button, Row, Col, Table, Divider } from "antd";
import moment from "moment";
import { ThunderboltOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const columns = [
  {
    title: "k/m",
    dataIndex: "indexno",
    key: "1",

    className: "table-font-english",
    render: text => <p>{text}</p>
  },
  {
    title: "tarIq",
    dataIndex: "date",
    key: "2",
    width: 120,
    className: "table-font-english"
  },
  {
    title: "pxuAO",
    children: [
      {
        title: "gay",
        dataIndex: "gay",
        key: "gay",
        className: "table-font-english",
        render: text => <p>{text}</p>
      },
      {
        title: "b5d",
        dataIndex: "balad",
        key: "balad",
        className: "table-font-english"
      },
      {
        title: "va0rDa",
        dataIndex: "vacharda",
        key: "vacharda",
        className: "table-font-english"
      },
      {
        title: "va0rDI",
        dataIndex: "vachardi",
        key: "vachardi",
        className: "table-font-english"
      },
      {
        title: "ANy",
        dataIndex: "anny",
        key: "anny",
        className: "table-font-english"
      },
      {
        title: "3o3l",
        dataIndex: "total",
        key: "total",
        className: "table-font-english"
      }
    ]
  },
  {
    title: "pxu muknar nu nam",
    dataIndex: "name",
    key: "name",
    className: "table-font-gujarati",
    render: text => <p>{text}</p>
  },
  {
    title: "srnamu",
    dataIndex: "address",
    key: "address",
    className: "table-font-gujarati"
  },
  {
    title: "moba[l n>.",
    dataIndex: "mobile",
    key: "mono",
    className: "table-font-english"
  },
  {
    title: "AeDI3 - DIlI3",
    key: "action",
    render: (text, record) => (
      <div className="icon-group-table">
        <Icon type="edit" theme="filled" style={{ color: "#3AD944" }} />

        <Divider type="vertical" />
        <Divider type="vertical" />

        <Icon
          type="delete"
          theme="filled"
          style={{ color: "rgba(255, 0, 0)" }}
        />
      </div>
    )
  }
];

const data = [
  {
    key: "1",
    indexno: 1,
    date: "20/02/2020",
    gay: 2,
    balad: 2,
    vacharda: 2,
    vachardi: 2,
    ANy: 0,
    total: 8,
    name: "wO5awa[ nrxIwa[ savlIya",
    mobile: 85848596,
    address: "ivrDI"
  },
  {
    key: "2",
    indexno: 1,
    date: "20/02/2020",
    gay: 2,
    balad: 2,
    vacharda: 2,
    vachardi: 2,
    ANy: 0,
    total: 8,
    name: "wO5awa[ nrxIwa[ savlIya",
    mobile: 85848596,
    address: "ivrDI"
  },
  {
    key: "3",
    indexno: 1,
    date: "20/02/2020",
    gay: 2,
    balad: 2,
    vacharda: 2,
    vachardi: 2,
    ANy: 0,
    total: 8,
    name: "wO5awa[ nrxIwa[ savlIya",
    mobile: 85848596,
    address: "ivrDI"
  }
];

class CreditAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  onChange = (dates, dateStrings) => {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  };

  handelback = () => {
    console.log("back", this.props);
    this.props.back();
  };

  render() {
    console.log("TCL: CreditAnimal -> constructor -> props", this.props);

    return (
      <div>
        <Row className="main-header-row" gutter={[16, 16]}>
          <Col className="main-div-button-slim" span={1}>
            <Button
              icon="left"
              onClick={this.handelback}
              type="primary"
              size="default"
            ></Button>
          </Col>
          <Col span={23} style={{ textAlign: "center" }}>
            <h1>Aavel pxuAO nu r+S3r</h1>
          </Col>
        </Row>

        <div className="filter-icon">
          <Icon type="filter" theme="filled" />
          <h3>rIpo3 fIL3r</h3>
        </div>
        <Form>
          <Row gutter={[16, 16]}>
            <Col span={12}>
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
                  onChange={this.onChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
        </Form>

        <div className="table">
          <Table columns={columns} dataSource={data} bordered />
        </div>
      </div>
    );
  }
}

export default CreditAnimal;
