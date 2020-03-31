import React, { Component } from "react";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import {
  Table,
  Button,
  Icon,
  Tooltip,
  Popconfirm,
  Divider,
  message
} from "antd";
import "./Income.scss";
import "../Common/Forms/IncomeModels.styles.scss";
import FilterDrawer from "./FilterDrawer";
import { connect } from "react-redux";
import {
  getExpense,
  getFilterExpense,
  editExpense,
  deleteExpense
} from "../../Actions/Exapmple";
import moment from "moment";
import IncomeMobel from "../Common/Forms/IncomeMobel";
import { convertNumberToType } from "../../js/Helper";
import ReactToPrint from "react-to-print";
import ReportPrint from "../PrintTemplate/Report";
import { Expense } from "../PrintTemplate/Report/Columns/Expese";

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`
//   });
// }
class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      expense: false,
      data: "",
      editData: { money: { type: "cash" } },
      pagination: {
        page: 1,
        limit: 20
      }
    };
    this.columns = [
      {
        // Date
        title: "taarIKa",
        dataIndex: "date",
        key: "3",
        width: 130,
        render: (text, record) => {
          return (
            <div className="icon-group-table">
              {moment(text).format("YYYY-MM-DD")}
            </div>
          );
        },
        // fixed: "left",
        className: "table-font-english table-font-english english-font-input"
      },
      {
        // Vauchr No
        title: "vaa]car naM.",
        width: "130px",
        dataIndex: "slip_no",
        key: "name",
        className: "income-table-td-height table-font-english"
      },

      {
        // Name
        title: "naama",
        dataIndex: "name",
        key: "5",
        width: 380
      },
      {
        title: "sarnaamau",
        dataIndex: "address",
        key: "address",
        width: 300
      },
      {
        // Amount
        title: "rkma",
        dataIndex: "money.amount",
        key: "2",
        width: 180,
        className: "table-font-english"
      },
      {
        // Mobile.
        title: "maaobaa[la naMbar",
        dataIndex: "phone",
        key: "4",
        width: 180,
        className: "table-font-english"
      },
      {
        // Expenses Type
        title: "Javak naao pa`kar",
        dataIndex: "type",
        key: "1",
        width: 250,
        render: (text, record) => convertNumberToType(text, "expense")
      },
      // {
      //   // Expense in
      //   title: "cukv~aI",
      //   dataIndex: "ref_name",
      //   key: "5",
      //   width: 80
      // },
      {
        // Hastak Name
        title: "hstak naama",
        dataIndex: "ref_name",
        key: "8",
        width: 230
      },
      {
        title: "AoDIT e DIlaIT",
        fixed: "right",
        width: 200,
        dataIndex: "operation",
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

  handelEdit = (text, record) => {
    console.log("this is a log in a handelEdit ->", text, record);
    this.setState({
      editData: record,
      expense: true
    });
  };

  handleDelete = (key, record) => {
    console.log("Income -> handleDelete -> key, record", key, record);
    this.props.deleteExpense(record._id).then(res => {
      this.props
        .getExpense(this.state.pagination)
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

  componentDidMount = () => {
    const pagination = {
      page: 1,
      limit: 20
    };
    if (this.props.expenseList.length > 0) {
      this.setState({
        data: this.props.expenseList
      });
    } else {
      // const id = this.props.match.params.pid;
      this.props.getExpense(pagination).then(res => {
        // console.log("res in a income model =->", res);
        this.setState({
          data: res.docs
        });
      });
    }
  };

  componentDidUpdate = prevPorps => {
    console.log(
      "res in a income model this.prevProps.expenseList =->",
      this.props.expenseList
    );
    if (prevPorps.expenseList !== this.props.expenseList) {
      this.setState({
        data: this.props.expenseList
      });
    }
  };

  onClose = () => {
    this.props
      .getExpense(this.state.pagination)
      .then(res => {
        console.log("res in a income model =->", res);
        this.setState({
          data: res.docs
        });
      })
      .catch(e => message.error(e));
    this.setState({
      visible: false
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
      () => {
        this.props.getExpense(this.state.pagination).then(res => {
          console.log("res in a income model =->", res);
          this.setState({
            data: res.docs
          });
        });
      }
    );
    // const id = this.props.match.params.pid;
  };

  handelFilterGet = data => {
    console.log("Income -> handelFilterGet -> data", data);
    this.props
      .getFilterExpense(data)
      .then(res => {
        console.log("res in a income model =->", res);
        this.setState({
          data: res
        });
      })
      .catch(e => message.error(e));
  };

  handelClosePopUp = () => {
    this.setState({
      expense: !this.state.expense
    });
  };

  handelSubmit = (id, data) => {
    console.log("Income -> handelSubmit -> data", data);
    this.props.editExpense(id, data).then(res => {
      // this.props.toggleModel();

      this.props.getExpense(this.state.pagination).then(res => {
        console.log("res in a income model =->", res);
        this.handelClosePopUp();
        this.setState({
          data: res.docs
        });
      });
    });
  };

  handelResetFilter = () => {
    const data = {};
    this.handelFilterGet(data);
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  // onClose = () => {
  //   this.setState({
  //     visible: false
  //   });
  // };

  // handleDelete = key => {
  //   const dataSource = [...this.state.data];
  //   this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  // };

  render() {
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <PageWrapper title="Javak rIpaaoT">
        <div className="row income-form-wrapper">
          <Tooltip title="fIL3r" placement="bottom">
            <Button
              shape="squre"
              size="large"
              type="primary"
              onClick={this.showDrawer}
              style={{ marginBottom: 30, marginRight: 10, fontSize: "22px" }}
            >
              <Icon type="filter" theme="filled" style={{ fontSize: 22 }} />
              fIlTr
            </Button>
          </Tooltip>
          <ReactToPrint
            trigger={() => (
              <Button
                shape="squre"
                size="large"
                type="primary"
                // onClick={this.handelResetFilter}
                style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
                // className="filter-button"
              >
                <Icon
                  type="printer"
                  theme="filled"
                  // onClick={this.handelResetFilter}
                />
                ipa`nT
              </Button>
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
              column={Expense}
            />
          </div>
          <Button
            shape="squre"
            size="large"
            type="primary"
            onClick={this.handelResetFilter}
            style={{ marginBottom: 30, float: "right" }}
            // className="filter-button"
          >
            <Icon
              type="close"
              // onClick={this.handelResetFilter}
              style={{ fontSize: 17 }}
            />
            rIsaoT
          </Button>
        </div>
        <FilterDrawer
          onClose={this.onClose}
          visible={this.state.visible}
          submit={this.handelFilterGet}
        />
        <IncomeMobel
          visible={this.state.expense}
          toggleModel={this.handelClosePopUp}
          type="expense"
          modalType="edit"
          submit={this.handelSubmit}
          data={this.state.editData}
          cash={this.state.editData.money.type}
        />
        <div>
          <Table
            className="table-income table-income-expense"
            columns={columns}
            dataSource={this.state.data || []}
            pagination={{
              onChange: this.paginate,
              current: this.state.pagination.page,
              total: 20,
              pageSize: this.state.pagination.limit
            }}
            bordered
            size="middle"
            scroll={{ x: "calc(700px + 40%)" }}
          />
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state.Test
});

export default connect(mapStateToProps, {
  getExpense,
  getFilterExpense,
  deleteExpense,
  editExpense
})(Income);
