import React, { Component } from "react";
import { Form, DatePicker, Icon, Button, Row, Col, Table, Divider } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const columns = [
  {
    title: "k/m",
    dataIndex: "id",
    key: "name",
    render: text => <p>{text}</p>
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
    // render: text => <p>{text}</p>
  },
  {
    title: "pashuo",
    children: [
      {
        title: "Gay",
        dataIndex: "gay",
        key: "gay",
        render: text => <p>{text}</p>
      },
      {
        title: "balad",
        dataIndex: "balad",
        key: "balad"
      },
      {
        title: "Vacharda",
        dataIndex: "vacharda",
        key: "vacharda"
      },
      {
        title: "Vachardi",
        dataIndex: "vachardi",
        key: "vachardi"
      },
      {
        title: "Anny",
        dataIndex: "anny",
        key: "anny"
      },
      {
        title: "Total",
        dataIndex: "total",
        key: "total"
      }
    ]
  },
  {
    title: "Nondh",
    dataIndex: "note",
    key: "namenote",
    render: text => <p>{text}</p>
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span style={{ display: "flex" }}>
        <p>Edit</p>
        <Divider type="vertical" />
        <p>Delete</p>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    id: 32,
    type: "New York No. 1 Lake Park",
    mobile: 85848596,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    id: 42,
    type: "London No. 1 Lake Park",
    mobile: 85848596,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    id: 32,
    type: "Sidney No. 1 Lake Park",
    mobile: 85848596,
    address: "Sidney No. 1 Lake Park"
  }
];

class DeadAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  onChange = (dates, dateStrings) => {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  };

  render() {
    console.log("TCL: CreditAnimal -> constructor -> props", this.props);

    return (
      <div>
        <Button onClick={this.handelback} type="primary">
          Back
        </Button>
        <h1>Aavel pxuAO nu r+S3r</h1>

        <div className="filter-icon">
          <Icon type="filter" theme="filled" />
          <h3>rIpo3 fIL3r</h3>
        </div>
        <Form>
          <Row>
            <Col span={6}>
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
            <Col span={6}>
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

        <Table columns={columns} dataSource={data} bordered />
      </div>
    );
  }
}

export default DeadAnimal;
