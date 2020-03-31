import React, { useRef } from "react";
import { Button, Select, Icon } from "antd";
import ReactToPrint from "react-to-print";
import ReportPrint from "../PrintTemplate/Report";
import { EmployeeColumn } from "../PrintTemplate/Report/Columns/EmployeeColumn";
const { Option } = Select;
export const FilterData = props => {
  const componentRef = useRef();
  return (
    <div className="employee-filter">
      {/* <div className="filter-icon">
          <h4>Filter</h4>
        </div> */}
      <div className="employee-filter-wrapper">
        <Select
          className="name-filter-employee"
          placeholder="k-macaarI naao pa`kar"
          onChange={props.onFilterChange}
        >
          <Option value="vaaDI naa majur">vaaDI naa majur</Option>
          <Option value="gaaOSaaLaa naa majur">gaaOSaaLaa naa majur</Option>
          <Option value="DaokTr">DaokTr</Option>
          <Option value="maohtaaP">maohtaaP</Option>
          <Option value="Anya">Anya</Option>
          <Option value="No">drok</Option>
        </Select>
        <ReactToPrint
          trigger={() => (
            <Button
              size="default"
              htmlType="submit"
              icon="printer"
              style={{
                backgroundColor: "#505D6F",
                color: "#ffffff"
                // height: "40px"
              }}
            >
              ipa`nT
            </Button>
          )}
          content={() => componentRef.current}
        />
        <div style={{ display: "none" }}>
          <ReportPrint
            //---------------------------------------Change title of report from here----------------------------------------------------
            name="Javak rIpaaoT"
            ref={componentRef}
            data={props.data || []}
            type="Expense"
            column={EmployeeColumn}
          />
        </div>
      </div>
    </div>
  );
};
