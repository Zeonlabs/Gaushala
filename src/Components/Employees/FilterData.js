import React from "react";
import { Button, Select, Icon } from "antd";
const { Option } = Select;
export const FilterData = props => {
  return (
    <div className="employee-filter">
      {/* <div className="filter-icon">
          <h4>Filter</h4>
        </div> */}
      <div className="employee-filter-wrapper">
        <Select
          className="name-filter-employee"
          placeholder="kmRcarI no p/kar ps>d kro"
          onChange={props.onFilterChange}
        >
          <Option value="No">drek</Option>
          <Option value="vaDI na mjur">vaDI na mjur</Option>
          <Option value="gOxa5a na mjur">gOxa5a na mjur</Option>
          <Option value="Dok3r">Dok3r</Option>
          <Option value="mheta+">mheta+</Option>
          <Option value="ANy">ANy</Option>
        </Select>

        <Button
          size="default"
          htmlType="submit"
          icon="printer"
          style={{
            backgroundColor: "#505D6F",
            color: "#ffffff",
            height: "40px"
          }}
        >
          ip/N3
        </Button>
      </div>
    </div>
  );
};
