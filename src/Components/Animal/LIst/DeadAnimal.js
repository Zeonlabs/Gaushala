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
  Popconfirm,
  message
} from "antd";
import moment from "moment";
import { connect } from "react-redux";
import {
  getDeadAnimal,
  getFilterDeadAnimal,
  editDeadAnimal,
  deleteDeadAnimal
} from "../../../Actions/Animal/DeadAnimal";
import { totalOfArray } from "../../../js/Helper";
import DeadAnimals from "../PopupForm/DeadAnimal";
import ReportPrint from "../../PrintTemplate/Report";
import ReactToPrint from "react-to-print";
import { DeadAnimalColumn } from "../../PrintTemplate/Report/Columns/DeadAnimalColumn";

const { RangePicker } = DatePicker;
class DeadAnimal extends Component {
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
      income: false,
      total: 0
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
        key: "2",
        width: 180,
        className: "income-table-td-height table-font-english",
        render: (text, record) => (
          <div className="  english-font-input">
            {moment(text).format("DD-MM-YYYY")}
          </div>
        )
      },
      {
        title: "paSau",
        children: [
          {
            title: "gaaya",
            dataIndex: "animal[0].count",
            key: "gay",
            className: "table-font-english",
            render: text => <p>{text}</p>
          },
          {
            title: "baLad",
            dataIndex: "animal[1].count",
            key: "balad",
            className: "table-font-english"
          },
          {
            title: "vaaCrDa",
            dataIndex: "animal[2].count",
            key: "vacharda",
            className: "table-font-english"
          },
          {
            title: "vaaCrDI",
            dataIndex: "animal[3].count",
            key: "vachardi",
            className: "table-font-english"
          },
          {
            title: "Anya",
            dataIndex: "animal[4].count",
            key: "anny",
            className: "table-font-english"
          },
          {
            title: "kula paSauAao",
            dataIndex: "animal",
            key: "total",
            className: "",
            render: (text, record) => {
              const total = text.map(val => parseInt(val.count, 10));
              const finalTotal = totalOfArray(total);
              return <div>{finalTotal}</div>;
            }
          }
        ]
      },
      {
        title: "naaOMGa",
        dataIndex: "note",
        key: "namenote",
        width: 300,
        className: "",
        render: text => <p>{text}</p>
      },
      {
        title: "AoDIT e DIlaIT",
        key: "action",
        render: (text, record) => (
          <>
            <div className="icon-group-table">
              <Icon
                type="edit"
                theme="filled"
                onClick={() => this.handelEdit(text, record)}
                style={{ color: "#3AD944" }}
              />

              <Divider type="vertical" />
              <Divider type="vertical" />
              <Popconfirm
                placement="top"
                title="Are you sure ?"
                onConfirm={() => this.handleDelete(text, record)}
                okText="Yes"
                cancelText="No"
              >
                <Icon
                  type="delete"
                  theme="filled"
                  // onClick={() => this.handleDelete(text, record)}
                  style={{ color: "rgba(255, 0, 0)" }}
                />
              </Popconfirm>
            </div>
          </>
        )
      }
    ];
  }

  componentDidMount = () => {
    if (this.props.deadAnimalList.length > 0) {
      this.setState({
        data: this.props.deadAnimalList
      });
    } else {
      this.props.getDeadAnimal(this.state.pagination).then(res => {
        console.log("this is a log in a  creadit animal api ->", res);
        this.setState({
          data: res.docs
        });
      });
    }
  };

  handleDelete = (key, record) => {
    console.log("Income -> handleDelete -> key, record", key, record);
    this.props.deleteDeadAnimal(record._id).then(res => {
      this.props
        .getDeadAnimal(this.state.pagination)
        .then(res => {
          console.log("res in a income model =->", res);
          this.setState({
            data: res.docs
          });
        })
        .catch(e => message.error(e));
    });
    // const dataSource = [...this.state.data];
    // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handelEdit = (text, record) => {
    // console.log("this is a log in a handelEdit ->", text, record);
    const total = record.animal.map(val => parseInt(val.count, 10));
    this.setState({
      editData: record,
      income: true,
      total: totalOfArray(total)
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
    this.props.getFilterDeadAnimal(value).then(res => {
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

  handelClosePopUp = () => {
    this.setState({
      income: !this.state.income
    });
  };

  handelSubmit = (id, data) => {
    console.log("CreditAnimal -> handelSubmit -> id, data", id, data);
    this.props.editDeadAnimal(id, data).then(res => {
      this.handelClosePopUp();
      this.props.getDeadAnimal(this.state.pagination).then(res => {
        console.log("res in a income model =->", res);
        this.setState({
          data: res.docs
        });
      });
    });
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
        this.props.getDeadAnimal(this.state.pagination).then(res => {
          console.log("this is a log in a  creadit animal api ->", res);
          this.setState({
            data: res.docs
          });
        })
    );
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
            <h1>maRtyau paamaola paSauAao nau rPsTr</h1>
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
                {/* <Form.Item>
                  <Button
                    size="default"
                    type="primary"
                    htmlType="submit"
                    icon="snippets"
                  >
                    jnre3 rIpo3
                  </Button>
                </Form.Item> */}
                {/* ------------------------------Print button--------------------------- */}
                <ReactToPrint
                  trigger={() => (
                    <Form.Item>
                      <Button
                        size="default"
                        // htmlType="submit"
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
                    column={DeadAnimalColumn}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Form>
        <DeadAnimals
          visible={this.state.income}
          toggleModel={this.handelClosePopUp}
          submit={this.handelSubmit}
          type="edit"
          data={this.state.editData}
          total={this.state.total}
        />
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
  getDeadAnimal,
  getFilterDeadAnimal,
  editDeadAnimal,
  deleteDeadAnimal
})(DeadAnimal);
