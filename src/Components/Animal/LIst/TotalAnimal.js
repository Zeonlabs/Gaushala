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
import ReactToPrint from "react-to-print";
import ReportPrint from "../../PrintTemplate/Report";
import { TotalReportColumn } from "../../PrintTemplate/Report/Columns/TotalReportColumn";

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
        title: "k/ma",
        dataIndex: "_id",
        key: "1",
        width: 120,
        className: "",
        render: (text, record) =>
          this.state.data.length >= 1 ? (
            <div>{this.state.data.findIndex(x => x._id === text) + 1}</div>
          ) : null
      },
      {
        title: "taarIKa",
        dataIndex: "date",
        key: "8",
        width: 180,
        className: "income-table-td-height table-font-english",
        render: (text, record) => (
          <div className="  english-font-input">
            {moment(text).format("DD-MM-YYYY")}
          </div>
        )
      },
      {
        title: "paSau naI Aavak",
        dataIndex: "added",
        key: "income",
        className: "table-font-english td-total-animal-table"
        // render: text => <p>{text}</p>
      },
      {
        title: "paSau naI Javak",
        dataIndex: "given",
        key: "debit",
        render: text => <p>{text}</p>,
        className: "table-font-english td-total-animal-table"
      },
      {
        title: "maRtyau paamaola paSauAao",
        dataIndex: "dead",
        key: "dead",
        className: "table-font-english td-total-animal-table"
      },
      {
        title: "hala paSau saMKyaa",
        children: [
          {
            title: "naanaa",
            dataIndex: "small",
            key: "nana",
            render: text => <p>{text}</p>,
            className: "table-font-english td-total-animal-table"
          },
          {
            title: "maaoTa",
            dataIndex: "big",
            key: "mota",
            className: "table-font-english td-total-animal-table"
          },
          {
            title: "kula",
            dataIndex: "other",
            key: "total",
            className: "table-font-english td-total-animal-table"
          }
        ]
      }
    ];
  }

  componentDidMount = () => {
    if (this.props.totalAnimalList.length > 0) {
      this.setState({
        data: this.props.totalAnimalList
      });
    } else {
      this.props.getTotalAnimal(this.state.pagination).then(res => {
        console.log("this is a log in a  creadit animal api ->", res);
        this.setState({
          data: res.docs
        });
      });
    }
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
    this.setState(
      {
        pagination: {
          page,
          limit: 20
        }
      },
      () =>
        this.props.getTotalAnimal(this.state.pagination).then(res => {
          console.log("this is a log in a  creadit animal api ->", res);
          this.setState({
            data: res.docs
          });
        })
    );
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
            <h1>kula paSauAao nau rPsTr</h1>
          </Col>
        </Row>

        <div className="filter-icon">
          <Icon type="filter" theme="filled" />
          <h3>fIlTr</h3>
        </div>
        <Form>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="taarIKa pasaMd krao:">
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
                    JnaroT rIpaaoT
                  </Button>
                </Form.Item>
                {/* ------------------------------Print button--------------------------- */}
                <ReactToPrint
                  trigger={() => (
                    <Form.Item>
                      <Button
                        size="default"
                        htmlType="submit"
                        icon="printer"
                        style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                      >
                        {" "}
                        ipa`nT
                      </Button>
                    </Form.Item>
                  )}
                  content={() => this.componentRef}
                />
                <div style={{ display: "none" }}>
                  <ReportPrint
                    //---------------------------------------Change title of report from here----------------------------------------------------
                    name="Javak rIpaaoT"
                    ref={el => (this.componentRef = el)}
                    data={this.state.data || []}
                    type="Expense"
                    column={TotalReportColumn}
                  />
                </div>
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
