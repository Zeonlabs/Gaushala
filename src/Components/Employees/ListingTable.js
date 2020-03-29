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
        title: "k/m",
        dataIndex: "_id",
        key: "names",
        className: "table-font-english",
        render: (text, record) =>
          this.props.data.length >= 1 ? (
            <span>{this.props.data.findIndex(x => x._id === text) + 1}</span>
          ) : null
      },
      {
        title: "kmRcarI no p/kar",
        dataIndex: "type",
        width: 200,
        key: "name",
        render: text => <p>{text}</p>,
        className: "table-font-gujarati"
      },
      {
        title: "nam",
        dataIndex: "name",
        key: "age",
        width: 250,
        className: "table-font-gujarati"
      },
      {
        title: "moba[l n>.",
        dataIndex: "phone",
        key: "phone",
        className: "table-font-english"
      },
      {
        title: "srnamu",
        dataIndex: "address",
        key: "address",
        width: 200,
        className: "table-font-gujarati"
      },
      {
        title: "AeDI3 - DIlI3",
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
              <Divider type="vertical" />
              <Divider type="vertical" />
              <Icon
                type="eye"
                theme="filled"
                style={{ color: "rgb(39, 39, 39)" }}
                onClick={() => this.handelProfile(record)}
              />
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
        <Table columns={this.columns} dataSource={this.props.data} />
      </div>
    );
  }
}

export default ListingTable;
