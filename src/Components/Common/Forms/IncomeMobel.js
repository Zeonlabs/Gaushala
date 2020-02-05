import React, { Component } from "react";
import {Modal ,Form, Input, DatePicker, Select, Radio, Button} from "antd";
import "./FormModels.styles.scss";

const { Option } = Select;

class IncomeMobel extends Component {
  render() {
    return (
      <div>
        <Modal
          title="Add Income"
          centered
          visible={this.props.visible}
          footer={null}
          onOk={this.props.toggleModel}
          onCancel={this.props.toggleModel}
        >
          <Form className="form-income">
            <div className="row">
              <Form.Item label="Sleep No.">
                <Input style={{ width: "100%" }} placeholder="000000" />
              </Form.Item>

              <Form.Item label="DatePicker">
                <DatePicker />
              </Form.Item>

              <Form.Item
                className="ant-col ant-col-11"
                label="Income Type"
                hasFeedback
              >
                <Select placeholder="Please select income type">
                  <Option value="china">Surat Dhun Mandal income</Option>
                  <Option value="usa">Viradi Dhun Mandal income</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="row">
              <Form.Item className="ant-col ant-col-14" label="Name">
                <Input placeholder="Doner Name" />
              </Form.Item>

              <Form.Item className="ant-col-10" label="Phone Number">
                <Input style={{ width: "100%" }} placeholder="Mobile Number" />
              </Form.Item>
            </div>
            <div className="row">
              <Form.Item className="ant-col-24" label="Address">
                <Input
                  style={{ width: "100%" }}
                  placeholder="Please Enter your Address"
                />
              </Form.Item>
            </div>
            <div className="row">
              <Form.Item label="Income in">
                <Radio.Group defaultValue="cash">
                  <Radio value="cash">Cash</Radio>
                  <Radio value="cheque">Cheque</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item className="cheque-no" label="Cheque No.">
                <Input style={{ width: "100%" }} placeholder="000000" />
              </Form.Item>
              <Form.Item className="ant-col-6" label="PAN No">
                <Input style={{ width: "100%" }} placeholder="AS121SDEF" />
              </Form.Item>
            </div>
            <div className="row">
              <table>
                <tr className="table-header ">
                  <th style={{width:'70%'}}>Vigat</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>
                    <Input style={{ width: "100%" }} placeholder="Vigat" />
                  </td>
                  <td>
                    <Input style={{ width: "100%" }} placeholder="Amount" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input style={{ width: "100%" }} placeholder="Vigat" />
                  </td>
                  <td>
                    <Input style={{ width: "100%" }} placeholder="Amount" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input style={{ width: "100%" }} placeholder="Vigat" />
                  </td>
                  <td>
                    <Input style={{ width: "100%" }} placeholder="Amount" />
                  </td>
                </tr>
                <tr className="table-header">
                  <td>Amount in words</td>
                  <td>Total Amount</td>
                </tr>
              </table>
            </div>

            <div className="row">
              <Form.Item className="ant-col-10" label="Hastak Name">
                <Input
                  style={{ width: "100%" }}
                  placeholder="Govindbhai Savaliya"
                />
              </Form.Item>
              <Form.Item className="ant-col-8" label="Notes">
                <Input style={{ width: "100%" }} placeholder="sasasasasasas" />
              </Form.Item>
              <Form.Item label="Send SMS">
                <Radio.Group defaultValue="no">
                  <Radio value="no">No</Radio>
                  <Radio value="yes">Yes</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </Form>
          
          <div className="m-btn-gru">
          <Button size='default' onClick={this.props.toggleModel}>Cancel</Button>
          <Button size='default' type="primary">Save</Button>
          <Button size='default' style={{backgroundColor:'#505D6F', color:'#ffffff'}}>Save &#38; Print</Button>  
          </div>
        </Modal>
      </div>
    );
  }
}

export default IncomeMobel;
