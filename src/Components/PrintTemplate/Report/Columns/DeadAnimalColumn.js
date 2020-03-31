import { totalOfArray } from "../../../../js/Helper";
import moment from "moment";
import React from "react";

let count = 0;

export const DeadAnimalColumn = [
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
    key: "2",
    width: 180,
    className: "income-table-td-height table-font-english",
    render: (text, record) => (
      <div className="  english-font-input">
        {moment(text).format("DD-MM-YYYY")}
      </div>
    )
  },
  {
    title: "paSau",
    children: [
      {
        title: "gaaya",
        dataIndex: "animal[0].count",
        key: "gay",
        className: "table-font-english",
        render: text => <p>{text}</p>
      },
      {
        title: "baLad",
        dataIndex: "animal[1].count",
        key: "balad",
        className: "table-font-english"
      },
      {
        title: "vaaCrDa",
        dataIndex: "animal[2].count",
        key: "vacharda",
        className: "table-font-english"
      },
      {
        title: "vaaCrDI",
        dataIndex: "animal[3].count",
        key: "vachardi",
        className: "table-font-english"
      },
      {
        title: "Anya",
        dataIndex: "animal[4].count",
        key: "anny",
        className: "table-font-english"
      },
      {
        title: "kula paSauAao",
        dataIndex: "animal",
        key: "total",
        className: "",
        render: (text, record) => {
          const total = text.map(val => parseInt(val.count, 10));
          const finalTotal = totalOfArray(total);
          return <div>{finalTotal}</div>;
        }
      }
    ]
  },
  {
    title: "naaOMGa",
    dataIndex: "note",
    key: "namenote",
    width: 300,
    className: "",
    render: text => <p>{text}</p>
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
