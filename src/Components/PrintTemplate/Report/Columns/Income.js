import { convertNumberToType } from "../../../../js/Helper";
import moment from "moment";
import React from "react";

export const IncomeColumn = [
  {
    title: "taarIKa",
    width: "130px",
    dataIndex: "date",
    key: "1",
    // fixed: "left",
    render: (text, record) => {
      return (
        <div className="icon-group-table english-font-input">
          {moment(text).format("YYYY-MM-DD")}
        </div>
      );
    },
    className: "income-table-td-height table-font-english english-font-input"
  },
  {
    title: "pahaoMca naM.",
    width: 130,
    dataIndex: "slip_no",
    key: "2",
    className: "income-table-td-height table-font-english"
  },
  {
    title: "naama",
    dataIndex: "name",
    key: "3",
    width: 380,
    className: "income-table-td-height"
  },
  {
    title: "sarnaamau",
    dataIndex: "address",
    key: "address",
    width: 300
  },
  {
    title: "rkma",
    dataIndex: "money.amount",
    key: "4",
    width: 180,
    className: "table-font-english"
  },
  {
    title: "maaobaa[la naMbar ",
    dataIndex: "phone",
    key: "5",
    width: 180,
    className: "table-font-english"
  },
  {
    title: "Aavak naao pa`kar",
    dataIndex: "type",
    key: "6",
    width: 250,
    render: (text, record) =>
      // console.log("Income -> constructor -> record", text, record)
      convertNumberToType(text, "income")
    // text.type === "cheque" ? (
    //   <span>{text.cheque_no}</span>
    // ) : (
    //   <span>raokD</span>
    // )
  },
  {
    title: "dana svaIkar",
    dataIndex: "money",
    key: "7",
    width: 130,
    render: (text, record) =>
      // console.log("Income -> constructor -> record", text, record)
      text.type === "cheque" ? <p>{text.cheque_no}</p> : <p>raokD</p>
  },
  {
    title: "hstak naama",
    dataIndex: "ref_name",
    key: "8",
    width: 280
  }
];
