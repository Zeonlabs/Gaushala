import React, { Component } from "react";
import { Table, Divider, Tag, Icon, Popconfirm } from "antd";
import moment from "moment";

class ListingTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.columns = [
      {
        title: "k/m",
        dataIndex: "_id",
        key: "1",
        className: "table-font-english",
        render: (text, record) =>
          this.props.data.length >= 1 ? (
            <span>{this.props.data.findIndex(x => x._id === text) + 1}</span>
          ) : null
      },
      {
        title: "tarIq",
        dataIndex: "date",
        key: "date",
        className: "table-font-english",
        width: 100,
        render: (text, record) => (
          <span>{moment(text).format("DD-MM-YYYY")}</span>
        )
      },
      {
        title: "nam",
        dataIndex: "name",
        key: "name",
        className: "table-font-gujarati",
        width: 250,
        render: text => <p>{text}</p>
      },
      {
        title: "moba[l n>.",
        dataIndex: "phone",
        key: "mobile",
        width: 120,
        className: "table-font-english"
      },
      {
        title: "cek n>",
        dataIndex: "no",
        key: "cheque",
        width: 100,
        className: "table-font-english"
      },
      {
        title: "rkm",
        dataIndex: "amount",
        key: "amount",
        width: 100,
        className: "table-font-english"
      },
      {
        title: "be>Nk nam",
        dataIndex: "bank",
        key: "bankname",
        width: 200,
        className: "table-font-gujarati"
      },
      {
        title: "AeDI3 - DIlI3",
        key: "action",
        width: 100,
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
    this.props.editPopupOpen(record);
  };

  handleDelete = (text, record) => {
    this.props.delete(record);
  };

  render() {
    return (
      <div>
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
