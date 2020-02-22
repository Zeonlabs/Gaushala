import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "k/m",
    dataIndex: "id",
    key: "name",
    render: text => <p>{text}</p>
  },
  {
    title: "tarIq",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "nam",
    dataIndex: "name",
    key: "name",
    render: text => <p>{text}</p>
  },
  {
    title: "moba[l n>.",
    dataIndex: "mobile",
    key: "mobile"
  },
  {
    title: "cek n>",
    dataIndex: "cheque",
    key: "cheque"
  },
  {
    title: "rkm",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "be>Nk nam",
    dataIndex: "bankname",
    key: "bankname"
  },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   )
  // },
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
    cheque: 32,
    date: "20/1/2020",
    amount: 2000,
    mobile: 85848596,
    bankname: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    cheque: 42,
    date: "20/1/2020",
    amount: 2000,
    mobile: 85848596,
    bankname: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    cheque: 32,
    date: "20/1/2020",
    amount: 2000,
    mobile: 85848596,
    bankname: "Sidney No. 1 Lake Park"
  }
];

class ListingTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default ListingTable;
