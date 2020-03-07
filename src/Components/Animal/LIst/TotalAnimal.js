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
    className: "table-font-english td-total-animal-table",
    render: text => <p>{text}</p>
  },
  {
    title: "tarIq",
    dataIndex: "date",
    key: "2",
    width: 120,
    className: "table-font-english td-total-animal-table"
  },
  {
    title: "pxu nI Aavk",
    dataIndex: "income",
    key: "income",
    className: "table-font-english td-total-animal-table"
    // render: text => <p>{text}</p>
  },
  {
    title: "pxu nI =vk",
    dataIndex: "debit",
    key: "debit",
    render: text => <p>{text}</p>,
    className: "table-font-english td-total-animal-table"
  },
  {
    title: "pxu nu muTyu",
    dataIndex: "dead",
    key: "dead",
    className: "table-font-english td-total-animal-table"
  },
  {
    title: "bakI na pxu",
    children: [
      {
        title: "nana",
        dataIndex: "nana",
        key: "nana",
        render: text => <p>{text}</p>,
        className: "table-font-english td-total-animal-table"
      },
      {
        title: "mo3a",
        dataIndex: "mota",
        key: "mota",
        className: "table-font-english td-total-animal-table"
      },
      {
        title: "3O3l",
        dataIndex: "total",
        key: "total",
        className: "table-font-english td-total-animal-table"
      }
    ]
  }

  // {
  //   title: "AeDI3 - DIlI3",
  //   key: "action",
  //   render: (text, record) => (
  //     <span style={{ display: "flex" }}>
  //       <p>Edit</p>
  //       <Divider type="vertical" />
  //       <p>Delete</p>
  //     </span>
  //   )
  // }
];

const data = [
  {
    key: "1",
    indexno: 1,
    date: "20/02/2020",
    income: 5,
    debit: 1,
    dead: 2,
    nana: 100,
    mota: 150,
    total: 250
  },
  {
    key: "2",
    indexno: 1,
    date: "20/02/2020",
    income: 5,
    debit: 1,
    dead: 2,
    nana: 100,
    mota: 150,
    total: 250
  },
  {
    key: "3",
    indexno: 1,
    date: "20/02/2020",
    income: 5,
    debit: 1,
    dead: 2,
    nana: 100,
    mota: 150,
    total: 250
  }
];

class TotalAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  onChange = (dates, dateStrings) => {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  };

  render() {
    console.log("TCL: TotalAnimal -> constructor -> props", this.props);

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
            <h1>Kul pxuAO nu r+S3r</h1>
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

export default TotalAnimal;
