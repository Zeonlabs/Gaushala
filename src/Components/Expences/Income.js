import React, { Component } from "react";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import { Table, Button, Icon, Tooltip, Popconfirm, Divider } from "antd";
import "./Income.scss";
import "../Common/Forms/IncomeModels.styles.scss";
import FilterDrawer from "./FilterDrawer";
import { connect } from "react-redux";
import { getIncome, getFilterIncome } from "../../Actions/Exapmple";

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
      data: ""
    };
    this.columns = [
      {
        title: "Slip No.",
        width: "100px",
        dataIndex: "slip_no",
        key: "name",
        fixed: "left"
      },
      {
        title: "Type",
        width: 200,
        dataIndex: "type",
        key: "age"
      },
      {
        title: "Money Type",
        dataIndex: "money.type",
        key: "1",
        width: 150
      },
      {
        title: "Amount",
        dataIndex: "money.amount",
        key: "2",
        width: 150
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "3",
        width: 250
      },
      {
        title: "Phone No.",
        dataIndex: "phone",
        key: "4",
        width: 150
      },
      {
        title: "Refrence_Name",
        dataIndex: "ref_name",
        key: "5",
        width: 150
      },
      {
        title: "operation",
        fixed: "right",
        width: 200,
        dataIndex: "operation",
        render: (text, record) => (
          <>
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
          </>
        )
      }
    ];
  }

  componentDidMount = () => {
    const pagination = {
      page: 1,
      limit: 20
    };
    // const id = this.props.match.params.pid;
    this.props.getIncome(pagination).then(res => {
      console.log("res in a income model =->", res);
      this.setState({
        data: res.docs
      });
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleDelete = key => {
    const dataSource = [...this.state.data];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
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
        </div>
        <FilterDrawer onClose={this.onClose} visible={this.state.visible} />
        <Table
          columns={columns}
          dataSource={this.state.data}
          bordered
          size="middle"
          scroll={{ x: "calc(700px + 40%)", y: 240 }}
        />
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state.Test
});

export default connect(mapStateToProps, { getIncome, getFilterIncome })(Income);
