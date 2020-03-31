// import { convertNumberToType } from "../../../../js/Helper";
import moment from "moment";
import React from "react";

let count = 0;

export const CreaditAnimalColumn = [
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

    // console.log(
    //   "------------------------------------------------------------------------record----------------------------------------------------------",
    //   record
    // )
    // this.state.data.length >= 1 ? (
    //   <div>{this.prop.data.findIndex(x => x._id === text) + 1}</div>
    // ) : null
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
        title: "kula",
        dataIndex: "total",
        key: "total",
        width: 120,
        className: "table-font-english"
      }
    ]
  },
  {
    title: "paSau mauknaar nau naama",
    dataIndex: "name",
    key: "name",
    width: 300,
    className: "",
    render: text => <p>{text}</p>
  },
  {
    title: "sarnaamau",
    dataIndex: "address",
    key: "address",
    width: 250,
    className: ""
  },
  {
    title: "maaobaa[la naMbar",
    dataIndex: "phone",
    key: "mono",
    width: 200,
    className: ""
  },
  //--------------------Change name --------------------
  {
    title: "Paashu Muknar ni sign",
    dataIndex: "signPerson",
    key: "personSign",
    width: 200,
    className: ""
  },
  {
    title: "Trusty ni sign",
    dataIndex: "trusty",
    key: "trusty",
    width: 200,
    className: ""
  }
];
