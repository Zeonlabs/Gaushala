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
import {
  getTotalAnimal,
  getFilterTotalAnimal
} from "../../../Actions/Animal/TotalAnimal";
import { connect } from "react-redux";

const { RangePicker } = DatePicker;

class TotalAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      sequence: 1,
      pagination: {
        page: 1,
        limit: 20
      },
      editData: "",
      income: false
    };
    this.columns = [
      {
        title: "k/m",
        dataIndex: "_id",
        key: "1",
        className: "table-font-english td-total-animal-table",
        render: (text, record) =>
          this.state.data.length >= 1 ? (
            <span>{this.state.data.findIndex(x => x._id === text) + 1}</span>
          ) : null
      },
      {
        title: "tarIq",
        dataIndex: "date",
        key: "8",
        width: 120,
        className: "table-font-english td-total-animal-table",
        render: (text, record) => (
          <span>{moment(text).format("DD-MM-YYYY")}</span>
        )
      },
      {
        title: "pxu nI Aavk",
        dataIndex: "added",
        key: "income",
        className: "table-font-english td-total-animal-table"
        // render: text => <p>{text}</p>
      },
      {
        title: "pxu nI =vk",
        dataIndex: "given",
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
            dataIndex: "small",
            key: "nana",
            render: text => <p>{text}</p>,
            className: "table-font-english td-total-animal-table"
          },
          {
            title: "mo3a",
            dataIndex: "big",
            key: "mota",
            className: "table-font-english td-total-animal-table"
          },
          {
            title: "3O3l",
            dataIndex: "other",
            key: "total",
            className: "table-font-english td-total-animal-table"
          }
        ]
      }
    ];
  }

  componentDidMount = () => {
    this.props.getTotalAnimal(this.state.pagination).then(res => {
      console.log("this is a log in a  creadit animal api ->", res);
      this.setState({
        data: res.docs
      });
    });
  };

  onChange = (dates, dateStrings) => {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    let value = {};
    if (dates.length > 1) {
      value = {
        dateFrom: moment(dates[0]).format("YYYY-MM-DD"),
        dateTo: moment(dates[1]).format("YYYY-MM-DD")
      };
    } else {
      value = {};
    }
    this.props.getFilterTotalAnimal(value).then(res => {
      console.log("CreditAnimal -> onChange -> res", res);
      this.setState({
        data: res
      });
    });
  };

  handelback = () => {
    console.log("back", this.props);
    this.props.back();
  };

  paginate = page => {
    this.setState({
      pagination: {
        page,
        limit: 20
      }
    });
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
          <Table
            columns={this.columns}
            pagination={{
              onChange: this.paginate,
              current: this.state.pagination.page,
              total: 20,
              pageSize: this.state.pagination.limit
            }}
            dataSource={this.state.data}
            bordered
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.Animals
});

export default connect(mapStateToProps, {
  getFilterTotalAnimal,
  getTotalAnimal
})(TotalAnimal);
