import React, { Component } from "react";
import { Table, Divider, Icon, Popconfirm } from "antd";
import ProfileView from "./ProfileView";

class ListingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRecord: "",
      profileView: false
    };
    this.columns = [
      {
        title: "k/ma",
        dataIndex: "_id",
        key: "names",
        className: "",
        width: 150,
        render: (text, record) =>
          this.props.data.length >= 1 ? (
            <div>{this.props.data.findIndex(x => x._id === text) + 1}</div>
          ) : null
      },
      {
        title: "k-macaarI naao pa`kar",
        dataIndex: "type",
        width: 200,
        key: "name",
        render: text => <p>{text}</p>,
        className: ""
      },
      {
        title: "naama",
        dataIndex: "name",
        key: "age",
        width: 300,
        className: ""
      },
      {
        title: "maaobaa[la naMbar",
        dataIndex: "phone",
        key: "phone",
        className: "",
        width: 180
      },
      {
        title: "sarnaamau",
        dataIndex: "address",
        key: "address",
        width: 200,
        className: ""
      },
      {
        title: "AoDIT e DIlaIT",
        key: "action",
        width: 150,
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
              {/* <Divider type="vertical" />
              <Divider type="vertical" />
              <Icon
                type="eye"
                theme="filled"
                style={{ color: "rgb(39, 39, 39)" }}
                onClick={() => this.handelProfile(record)}
              /> */}
            </div>
          </>
        )
      }
    ];
  }

  handelProfile = record => {
    this.setState({
      userRecord: record,
      profileView: true
    });
  };

  handelEdit = (text, record) => {
    this.props.editUSer(record);
  };

  handleDelete = (text, record) => {
    this.props.delete(record);
  };

  handelDrawerClose = () => {
    this.setState({
      profileView: !this.state.profileView
    });
  };

  render() {
    return (
      <div>
        <ProfileView
          visible={this.state.profileView}
          onClose={this.handelDrawerClose}
          data={this.state.userRecord}
        />
        <Table
          columns={this.columns}
          pagination={{
            onChange: this.props.pagination,
            current: this.props.current,
            total: 20,
            pageSize: this.props.pageSize
          }}
          dataSource={this.props.data}
        />
      </div>
    );
  }
}

export default ListingTable;
