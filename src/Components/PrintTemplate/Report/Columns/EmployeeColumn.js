// import { convertNumberToType } from "../../../../js/Helper";
import moment from "moment";
import React from "react";

let count = 0;

export const EmployeeColumn = [
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
  }
];
