import React, { Component } from "react";
import { Table, Divider, Tag, Icon } from "antd";

const columns = [
  {
    title: "k/m",
    dataIndex: "indexno",
    key: "name",
    className: "table-font-english",
    render: text => <p>{text}</p>
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
    dataIndex: "mobile",
    key: "address",
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
    title: "DoKyumeN3s",
    dataIndex: "documents",
    key: "address",
    width: 200,
    className: "table-font-english"
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

        <Divider type="vertical" />
        <Divider type="vertical" />

        <Icon
          type="eye"
          theme="filled"
          style={{ color: "rgb(39, 39, 39)" }}
        />
      </div>
    )
  }
];

const data = [
  {
    key: "1",
    name: "ka5uwa[",
    indexno: 1,
    type: "gOxa5a na mjur",
    mobile: 85848596,
    address: "ivrDI"
  },
  {
    key: "2",
    name: "ka5uwa[",
    indexno: 2,
    type: "gOxa5a na mjur",
    mobile: 85848596,
    address: "ivrDI"
  },
  {
    key: "3",
    name: "ka5uwa[",
    indexno: 3,
    type: "gOxa5a na mjur",
    mobile: 85848596,
    address: "ivrDI"
  }
];

class ListingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div >
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default ListingTable;

{
  /* <Row gutter={[8, 8]}>
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
        </Row> */
}
