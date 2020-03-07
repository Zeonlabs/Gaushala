import React, { Component } from "react";
import {
  Form,
  DatePicker,
  Icon,
  Button,
  Row,
  Col,
  Table,
  Divider,
  Input
} from "antd";
import moment from "moment";

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
    title: "kul pxu",
    dataIndex: "total",
    key: "total",
    className: "table-font-english"
  },
  {
    title: "^aas",
    dataIndex: "ghas",
    key: "ghas",
    className: "table-font-english"
  },
  {
    title: "caro",
    dataIndex: "charo",
    key: "charo",
    className: "table-font-english"
  },
  {
    title: "da`",
    dataIndex: "dana",
    key: "dana",
    className: "table-font-english"
  },
  {
    title: "mjurI",
    dataIndex: "majuri",
    key: "majuri",
    className: "table-font-english"
  },
  {
    title: "Dok3r-dva",
    dataIndex: "doctor",
    key: "doctor",
    className: "table-font-english"
  },
  {
    title: "ANy qcR",
    dataIndex: "extracost",
    key: "extracost",
    className: "table-font-english"
  },
  {
    title: "kul qcR",
    dataIndex: "totalcost",
    key: "totalcost",
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
    total: 200,
    ghas: "₹200",
    charo: "₹200",
    dana: "₹200",
    majuri: "₹200",
    doctor: "₹200",
    extracost: "₹200",
    totalcost: "₹1200"
  },
  {
    key: "2",
    indexno: 2,
    date: "20/02/2020",
    total: 200,
    ghas: "₹200",
    charo: "₹200",
    dana: "₹200",
    majuri: "₹200",
    doctor: "₹200",
    extracost: "₹200",
    totalcost: "₹1200"
  },
  {
    key: "3",
    indexno: 3,
    date: "20/02/2020",
    total: 200,
    ghas: "₹200",
    charo: "₹200",
    dana: "₹200",
    majuri: "₹200",
    doctor: "₹200",
    extracost: "₹200",
    totalcost: "₹1200"
  }
];

class ResidentalAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  onChange = (dates, dateStrings) => {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  };

  render() {
    console.log("TCL: DebitAnimal -> constructor -> props", this.props);

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
            <h1>inwav qcR nu r+S3r</h1>
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

export default ResidentalAnimal;
