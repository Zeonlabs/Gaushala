// import { convertNumberToType } from "../../../../js/Helper";
import moment from "moment";
import React from "react";

let count = 0;

export const TotalReportColumn = [
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
    title: "taarIKa",
    dataIndex: "date",
    key: "4",
    width: 200,
    className: "income-table-td-height table-font-english",
    render: (text, record) => (
      <div className="  english-font-input">
        {moment(text).format("DD-MM-YYYY")}
      </div>
    )
  },
  {
    title: "paSau naI Aavak",
    dataIndex: "added",
    key: "income",
    className: "table-font-english td-total-animal-table"
    // render: text => <p>{text}</p>
  },
  {
    title: "paSau naI Javak",
    dataIndex: "given",
    key: "debit",
    render: text => <p>{text}</p>,
    className: "table-font-english td-total-animal-table"
  },
  {
    title: "maRtyau paamaola paSauAao",
    dataIndex: "dead",
    key: "dead",
    className: "table-font-english td-total-animal-table"
  },
  {
    title: "hala paSau saMKyaa",
    children: [
      {
        title: "naanaa",
        dataIndex: "small",
        key: "nana",
        render: text => <p>{text}</p>,
        className: "table-font-english td-total-animal-table"
      },
      {
        title: "maaoTa",
        dataIndex: "big",
        key: "mota",
        className: "table-font-english td-total-animal-table"
      },
      {
        title: "kula",
        dataIndex: "other",
        key: "total",
        className: "table-font-english td-total-animal-table"
      }
    ]
  },
  //--------------------Change name --------------------

  {
    title: "Trusty ni sign",
    dataIndex: "trusty",
    key: "trusty",
    width: 200,
    className: ""
  }
];
