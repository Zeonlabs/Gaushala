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
    title: "kmRcarI no p/kar",
    dataIndex: "type",
    key: "name",
    render: text => <p>{text}</p>
  },
  {
    title: "nam",
    dataIndex: "name",
    key: "age"
  },
  {
    title: "moba[l n>.",
    dataIndex: "mobile",
    key: "address"
  },
  {
    title: "srnamu",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "DoKyumeN3s",
    dataIndex: "documents",
    key: "address"
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
    id: 32,
    type: "New York No. 1 Lake Park",
    mobile: 85848596,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    id: 42,
    type: "London No. 1 Lake Park",
    mobile: 85848596,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    id: 32,
    type: "Sidney No. 1 Lake Park",
    mobile: 85848596,
    address: "Sidney No. 1 Lake Park",
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

{/* <Row gutter={[8, 8]}>
          <Col span={3}>
            <h3>k/m</h3>
          </Col>
          <Col span={3}>
            <h3>kmRcarI no p/kar</h3>
          </Col>
          <Col span={3}>
            <h3>nam</h3>
          </Col>
          <Col span={3}>
            <h3>moba[l n>.</h3>
          </Col>
          <Col span={3}>
            <h3>srnamu</h3>
          </Col>
          <Col span={3}>
            <h3>DoKyumeN3s</h3>
          </Col>
          <Col span={3}>
            <h3>AeDI3</h3>
          </Col>
          <Col span={3}>
            <h3>DIlI3</h3>
          </Col>
        </Row> */}