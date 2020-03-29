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
  getIncome,
  getFilterIncome,
  editIncome,
  deleteIncome
} from "../../Actions/Exapmple";
import { EditOutlined } from "@ant-design/icons";
import moment from "moment";
import IncomeMobel from "../Common/Forms/IncomeMobel";

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`
//   });
// }
let pagination = {
  page: 1,
  limit: 20
};

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      income: false,
      data: "",
      editData: { money: { type: "cash" } },
      pagination: {
        page: 1,
        limit: 20
      }
    };
    this.columns = [
      {
        title: "tarIq",
        width: "100px",
        dataIndex: "date",
        key: "1",
        // fixed: "left",
        render: (text, record) => {
          return (
            <div className="icon-group-table">
              {moment(text).format("YYYY-MM-DD")}
            </div>
          );
        },
        className: "income-table-td-height table-font-english"
      },
      {
        title: "pho>c n>.",
        width: 100,
        dataIndex: "slip_no",
        key: "2",
        className: "income-table-td-height table-font-english"
      },
      {
        title: "nam",
        dataIndex: "name",
        key: "3",
        width: 250,
        className: "income-table-td-height"
      },
      {
        title: "srnamu",
        dataIndex: "address",
        key: "address",
        width: 250
      },
      {
        title: "rkm",
        dataIndex: "money.amount",
        key: "4",
        width: 100,
        className: "table-font-english"
      },
      {
        title: "moba[l n>.",
        dataIndex: "phone",
        key: "5",
        width: 150,
        className: "table-font-english"
      },
      {
        title: "Aavk no p/kar",
        dataIndex: "type",
        key: "6",
        width: 150
      },
      {
        title: "dan SvIkar",
        dataIndex: "money.type",
        key: "7",
        width: 100
      },
      {
        title: "HStk nam",
        dataIndex: "ref_name",
        key: "8",
        width: 100
      },
      // {
      //   title: "s>dex moklo",
      //   dataIndex: "Sms-status",
      //   key: "9",
      //   width: 100
      // },
      {
        title: "AeDI3 - DIlI3",
        fixed: "right",
        width: 110,
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
    console.log("Income -> handelEdit -> record", record);
    // console.log("this is a log in a handelEdit ->", text, record);
    this.setState({
      editData: record,
      income: true
    });
  };

  componentDidMount = () => {
    const pagination = {
      page: 1,
      limit: 20
    };
    // const id = this.props.match.params.pid;
    this.props.getIncome(pagination).then(res => {
      // console.log("res in a income model =->", res);
      this.setState({
        data: res.docs
      });
    });
  };

  componentDidUpdate = prevPorps => {
    if (prevPorps.incomeList !== this.props.incomeList) {
      this.setState({
        data: this.props.incomeList
      });
    }
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.props
      .getIncome(this.state.pagination)
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
    pagination = {
      page,
      limit: 20
    };

    this.setState({
      pagination: {
        page,
        limit: 20
      }
    });
    // const id = this.props.match.params.pid;
    this.props.getIncome(pagination).then(res => {
      console.log("res in a income model =->", res);
      this.setState({
        data: res.docs
      });
    });
  };

  handleDelete = (key, record) => {
    console.log("Income -> handleDelete -> key, record", key, record);
    this.props.deleteIncome(record._id).then(res => {
      this.props
        .getIncome(this.state.pagination)
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

  handelFilterGet = data => {
    console.log("Income -> handelFilterGet -> data", data);
    this.props
      .getFilterIncome(data)
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
      income: !this.state.income
    });
  };

  handelSubmit = (id, data) => {
    this.props.editIncome(id, data).then(res => {
      // this.props.toggleModel();
      this.handelClosePopUp();
      this.props.getIncome(this.state.pagination).then(res => {
        console.log("res in a income model =->", res);
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
      <PageWrapper title="Aavk rIpO3">
        <div className="row income-form-wrapper">
          <Tooltip title="fIL3r" placement="bottom">
            <Button
              shape="squre"
              size="large"
              type="primary"
              onClick={this.showDrawer}
              style={{ marginBottom: 30 }}
            >
              <Icon type="filter" theme="filled" style={{ fontSize: 17 }} />
              fIL3r
            </Button>
          </Tooltip>
          <Button
            shape="squre"
            size="large"
            type="primary"
            // onClick={this.handelResetFilter}
            style={{ marginBottom: 30, float: "center" }}
            // className="filter-button"
          >
            <Icon
              type="printer"
              theme="filled"
              // onClick={this.handelResetFilter}
              style={{ fontSize: 17 }}
            />
            Print
          </Button>
          <Button
            shape="squre"
            size="large"
            type="primary"
            onClick={this.handelResetFilter}
            style={{ marginBottom: 30, float: "right" }}
            // className="filter-button"
          >
            <Icon
              type="close-circle"
              theme="filled"
              // onClick={this.handelResetFilter}
              style={{ fontSize: 17 }}
            />
            Reset
          </Button>
        </div>
        <FilterDrawer
          onClose={this.onClose}
          visible={this.state.visible}
          submit={this.handelFilterGet}
        />
        <IncomeMobel
          visible={this.state.income}
          toggleModel={this.handelClosePopUp}
          type="income"
          modalType="edit"
          submit={this.handelSubmit}
          data={this.state.editData}
          cash={this.state.editData.money.type}
        />
        <div className="">
          <Table
            className="table-income"
            columns={columns}
            dataSource={this.state.data || []}
            pagination={{
              onChange: this.paginate,
              current: this.state.pagination.page,
              total: 20,
              pageSize: pagination.limit
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
  getIncome,
  editIncome,
  deleteIncome,
  getFilterIncome
})(Income);
