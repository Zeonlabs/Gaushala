import React, { Component } from "react";
import { Table, Divider, Tag, Icon } from "antd";

const columns = [
  {
    title: "k/m",
    dataIndex: "indexno",
    key: "indexno",
    className: "table-font-english",
    width: 50,
    render: text => <p>{text}</p>
  },
  {
    title: "tarIq",
    dataIndex: "date",
    key: "date",
    className: "table-font-english",
    width: 100
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
    dataIndex: "mobile",
    key: "mobile",
    width: 120,
    className: "table-font-english"
  },
  {
    title: "cek n>",
    dataIndex: "cheque",
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
    dataIndex: "bankname",
    key: "bankname",
    width: 200,
    className: "table-font-gujarati"
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
    title: "AeDI3 - DIlI3",
    key: "action",
    width: 100,
    render: (text, record) => (
      <div className="icon-group-table">
        <Icon
          type="edit"
          theme="filled"
          style={{ color: "#3AD944" }}
        />

        <Divider type="vertical" />
        <Divider type="vertical" />

        <Icon
          type="delete"
          theme="filled"
          style={{ color: "rgba(255, 0, 0)" }}
        />
      </div>
    )
  }
];

const data = [
  {
    key: "1",
    indexno: 1,
    name: "gOiv>dwa[ qIm+wa[ savlIya",
    cheque: 323000,
    date: "20/1/2020",
    amount: 2000,
    mobile: 85848596,
    bankname: "vra0a be>Nk"
  },
  {
    key: "2",
    indexno: 2,
    name: "wO5awa[ nrxIwa[ savlIya",
    cheque: 421202,
    date: "20/1/2020",
    amount: 2000,
    mobile: 85848596,
    bankname: "Aes.bI.Aa[ be>Nk"
  },
  {
    key: "3",
    indexno: 3,
    name: "rakexwa[ rmexwa[ vekrIya",
    cheque: 327802,
    date: "20/1/2020",
    amount: 2000,
    mobile: 85848596,
    bankname: "be>Nk AOf broDa"
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
