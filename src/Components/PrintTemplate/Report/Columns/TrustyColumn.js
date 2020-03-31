// import { convertNumberToType } from "../../../../js/Helper";
import moment from "moment";
import React from "react";

let count = 0;

export const TrustyColumns = [
  {
    title: "k/ma",
    dataIndex: "_id",
    key: "1",
    width: 150,
    className: "",
    render: (text, record) => {
      const total = count + 1;
      count = total;
      return <p>{total}</p>;
    }
  },
  {
    title: "haodao",
    dataIndex: "position",
    key: "2",
    width: 200,
    render: text => <p>{text}</p>,
    className: ""
  },
  {
    title: "naama",
    dataIndex: "name",
    key: "3",
    width: 300,
    className: ""
  },
  {
    title: "maaobaa[la naMbar",
    dataIndex: "phone",
    key: "4",
    width: 250,
    className: ""
  }
];
