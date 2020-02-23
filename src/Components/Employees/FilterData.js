import React from "react";
import { Button, Select, Icon, Row, Col, Form } from "antd";
const { Option } = Select;
export const FilterData = () => {
  return (
    <div className="employee-filter">
      <h3 style={{ marginTop: "5px", marginBottom: 0 }}>kmRcarI no p/kar</h3>
      <Row>
        <Col span={12}>
          <div className="employee-filter-wrapper">
            <Select
              className="name-filter-employee"
              placeholder="kmRcarI no p/kar ps>d kro"
            >
              <Option value="vaDI na mjur">vaDI na mjur</Option>
              <Option value="gOxa5a na mjur">gOxa5a na mjur</Option>
              <Option value="Dok3r">Dok3r</Option>
              <Option value="mheta+">mheta+</Option>
              <Option value="ANy">ANy</Option>
            </Select>

            {/* ------------------------------Generat Button--------------------------------- */}
            <Form.Item>
              <Button
                size="default"
                type="primary"
                htmlType="submit"
                icon="snippets"
              >
                jnre3 rIpo3
                </Button>
            </Form.Item>
            {/* ------------------------------Print button--------------------------- */}
            <Form.Item>
              <Button
                size="default"
                htmlType="submit"
                icon="printer"
                style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
              >
                {" "}
                ip/N3
                </Button>
            </Form.Item>
          </div>
        </Col>
      </Row>
    </div>
  );
};
