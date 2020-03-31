import React from "react";
import { Table } from "antd";
import converter from "number-to-words";

const columns = [
  // {
  //   title: "Name",
  //   dataIndex: "name",
  //   key: "name"
  // },
  {
    title: "vaIgata",
    dataIndex: "type",
    key: "age"
  },
  {
    title: "rkma",
    dataIndex: "amount",
    key: "address"
  }
];

const ExpenseTable = props => {
  console.log("props", props);

  return (
    <>
      <Table
        className="table-boder income-expense-table"
        // components={components}
        // rowClassName={() => "editable-row"}
        bordered
        dataSource={props.data}
        columns={columns}
        pagination={false}
      />
      <div className="totalamount">
        <h4 className="amount-in-words gujarati-font">
          kula rkma Sabdmaa :{" "}
          <span className="english-font-input">
            {" "}
            {converter.toWords(props.total)}
          </span>
        </h4>

        <h4 className="gujarati-font text-center">{props.total}</h4>
      </div>
    </>
  );
};

export default ExpenseTable;
