import React from "react";
import { Button, Select, Icon, Form } from "antd";
const { Option } = Select;
export const FilterData = props => {
  return (
    <div>
      <Form.Item label="">
        <Select
          className="filter-dropdown"
          onChange={props.onFilterChange}
          placeholder="haodao pasaMd krao"
        >
          <Option value="pa`mauKa EaI">pa`mauKa EaI</Option>
          <Option value="]papa`mauKa EaI">]papa`mauKa EaI</Option>
          <Option value="maM~aI EaI">maM~aI EaI </Option>
          <Option value="KaJanacaI">KaJanacaI</Option>
          <Option value="sahmaM~aI EaI">sahmaM~aI EaI</Option>
          <Option value="T/sTI EaI">T/sTI EaI</Option>
          <Option value="saMgaZnamaM~aI EaI">saMgaZnamaM~aI EaI</Option>
          <Option value="All">drok</Option>
        </Select>
      </Form.Item>
    </div>
  );
};
