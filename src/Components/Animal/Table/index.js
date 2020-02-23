import React, { Component } from "react";
import { Form, Icon, InputNumber, Button, Checkbox } from "antd";
import './Index.scss';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
      // gay: 0,
      // balad: 0,
      // vacharda: 0,
      // vachardi: 0,
      // anny: 0
    };
  }
  sumValuses = obj => Object.values(obj).reduce((a, b) => a + b);

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const total = parseInt(this.sumValuses(values), 10);
        console.log("TCL: Index -> total", total);
        this.setState({
          total
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { type } = this.props;
    return (
      <div className="animal-table-wrapper">
        <Form onChange={this.handleSubmit} className="login-form">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                {/* ------------------------------table Head-------------------------------- */}
                <th className="table-head"><h3>{type ? "ivgt" : "pxu no p/kar"}</h3></th>
                <th className="table-head"><h3>{type ? "rkm" : "pxu nI s>Qya"}</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-row-hedding">{type ? "^aas" : "gay"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "^aas" : "gay", {
                      initialValue: 0
                    })(<InputNumber className="english-font-input input-border-none" />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td className="table-row-hedding">{type ? "caro" : "b5d"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "caro" : "b5d", {
                      initialValue: 0
                    })(<InputNumber className="english-font-input input-border-none" />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td className="table-row-hedding">{type ? "da`" : "va0rDa"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "da`" : "va0rDa", {
                      initialValue: 0
                    })(<InputNumber className="english-font-input input-border-none" />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td className="table-row-hedding">{type ? "mjurI" : "va0rDI"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "mjurI" : "vachardi", {
                      initialValue: 0
                    })(<InputNumber className="english-font-input input-border-none" />)}
                  </Form.Item>
                </td>
              </tr>
              {type ? (
                <tr>
                  <td className="table-row-hedding">{type ? "Dok3r-dva" : "ANy"}</td>
                  <td>
                    <Form.Item>
                      {getFieldDecorator(type ? "Dok3r-dva" : "ANy", {
                        initialValue: 0
                      })(<InputNumber className="english-font-input input-border-none" />)}
                    </Form.Item>
                  </td>
                </tr>
              ) : (
                ""
              )}
              <tr>
                <td className="table-row-hedding">ANy qcR</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator("ANy qcR", { initialValue: 0 })(
                      <InputNumber className="english-font-input input-border-none" />
                    )}
                  </Form.Item>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="total">
                <td className="table-row-hedding"><h3>3o3l</h3></td>
                <td><h3 className="total-font">{this.state.total}</h3></td>
              </tr>
            </tfoot>
          </table>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Index);

export default WrappedNormalLoginForm;
