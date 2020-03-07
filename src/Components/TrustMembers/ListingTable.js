import React, { Component } from "react";
import { Table, Divider, Tag,Icon } from "antd";

const columns = [
  {
    title: "k/m",
    dataIndex: "indexno",
    key: "1",
    render: text => <p>{text}</p>,
    className: "table-font-english"
  },
  {
    title: "hod\o",
    dataIndex: "position",
    key: "2",
    render: text => <p>{text}</p>,
    className: "table-font-gujarati"
  },
  {
    title: "nam",
    dataIndex: "name",
    key: "3",
    className: "table-font-gujarati"
  },
  {
    title: "moba[l n>.",
    dataIndex: "mobile",
    key: "4",
    className: "table-font-english"
  },
  // {
  //   title: "srnamu",
  //   dataIndex: "address",
  //   key: "address"
  // },
  // {
  //   title: "DoKyumeN3s",
  //   dataIndex: "documents",
  //   key: "address"
  // },
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
    )
  }
];

const data = [
  {
    key: "1",
    name: "gOiv>dwa[ qIm+wa[ savlIya",
    indexno: 1,
    position: "પ્રમુખ શ્રી",
    mobile: 85848596,
  },
  {
    key: "2",
    name: "gOiv>dwa[ qIm+wa[ savlIya",
    indexno: 2,
    position: "પ્રમુખ શ્રી",
    mobile: 85848596,
    
  },
  {
    key: "3",
    name: "gOiv>dwa[ qIm+wa[ savlIya",
    indexno: 3,
    position: "ખજાનચી શ્રી",
    mobile: 85848596,
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

