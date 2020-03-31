// import { convertNumberToType } from "../../../../js/Helper";
import moment from "moment";
import React from "react";

let count = 0;

export const CostAnimalColumn = [
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
    title: "kula paSauAao",
    dataIndex: "total_animal",
    key: "total",
    className: "table-font-english"
  },
  {
    title: "Gaasa",
    dataIndex: "item.ghas",
    key: "ghas",
    className: "table-font-english"
  },
  {
    title: "caarao",
    dataIndex: "item.charo",
    key: "charo",
    className: "table-font-english"
  },
  {
    title: "daNa",
    dataIndex: "item.dan",
    key: "dana",
    className: "table-font-english"
  },
  {
    title: "majurI",
    dataIndex: "item.majuri",
    key: "majuri",
    className: "table-font-english"
  },
  {
    title: "Dao. e dvaa",
    dataIndex: "item.doctor",
    key: "doctor",
    className: "table-font-english"
  },
  {
    title: "Anya Ka-ca",
    dataIndex: "item.other",
    key: "extracost",
    className: "table-font-english"
  },
  {
    title: "kula Ka-ca",
    dataIndex: "total",
    key: "totalcost",
    className: "table-font-english"
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
