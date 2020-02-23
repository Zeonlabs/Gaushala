import React, { Component } from "react";
import { Form, DatePicker, Icon, Button, Row, Col } from "antd";
import moment from "moment";


const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}
class ResidentalAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("TCL: ResidentalAnimal -> constructor -> props", this.props);
    return (
      <div>
        <h1>inwav qcR r+S3r</h1>

        
        <div className="filter-icon">
          <Icon type="filter" theme="filled" />
          <h3>rIpo3 fIL3r</h3>
        </div>
        <Form>
          <Row>

            <Col span={6}>
              <Form.Item label="tarIq ps>d kro">
                <RangePicker
                  className="english-font-input"
                  ranges={{
                    Today: [moment(), moment()],
                    "This Month": [
                      moment().startOf("month"),
                      moment().endOf("month")
                    ]
                  }}
                  onChange={onChange}
                />
              </Form.Item>

            </Col>
            <Col span={6}>
              <div className="m-btn-gru">
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
        </Form>
      
      </div>
    );
  }
}

export default ResidentalAnimal;
