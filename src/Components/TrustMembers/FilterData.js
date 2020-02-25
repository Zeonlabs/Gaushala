import React from "react";
import { Button, Select, Icon } from "antd";
const { Option } = Select;
export const FilterData = () => {
  return (
    <div>
      <Select className="filter-dropdown" placeholder="hod\o ps>d kro">
        <Option value="પ્રમુખ શ્રી">પ્રમુખ શ્રી</Option>
        <Option value="ઉપપ્રમુખ શ્રી">ઉપપ્રમુખ શ્રી</Option>
        <Option value="મંત્રી શ્રી">મંત્રી શ્રી </Option>
        <Option value="ખજાનચી">ખજાનચી શ્રી</Option>
        <Option value="સહમંત્રીશ્રી">સહમંત્રીશ્રી</Option>
        <Option value="ટ્રસ્ટી શ્રી">ટ્રસ્ટી શ્રી</Option>
        <Option value="સંગઠનમંત્રી શ્રી">સંગઠનમંત્રી શ્રી</Option>
      </Select>
    </div>
  );
};
