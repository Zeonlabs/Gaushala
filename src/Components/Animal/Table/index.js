import React, { Component } from "react";
import { Form, Icon, InputNumber, Button, Checkbox } from "antd";
import './IndexTable.scss';

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
                <th className="table-header">{type ? "ivgt" : "pxu no p/kar"}</th>
                <th className="table-header">{type ? "rkm" : "s>Qya"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-animal-popup-td">{type ? "^aas" : "gay"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "ghas" : "gay", {
                      initialValue: 0
                    })(<InputNumber />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td className="table-animal-popup-td">{type ? "caro" : "b5d"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "charo" : "balad", {
                      initialValue: 0
                    })(<InputNumber />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td className="table-animal-popup-td">{type ? "da`" : "va0rDa"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "Dan" : "vacharda", {
                      initialValue: 0
                    })(<InputNumber />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td className="table-animal-popup-td">{type ? "mjurI" : "va0rDI"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "majuri" : "vachardi", {
                      initialValue: 0
                    })(<InputNumber />)}
                  </Form.Item>
                </td>
              </tr>
              {type ? (
                <tr>
                  <td className="table-animal-popup-td">{type ? "Dok3r-dva" : "ANy"}</td>
                  <td>
                    <Form.Item>
                      {getFieldDecorator(type ? "doctor" : "vachardi", {
                        initialValue: 0
                      })(<InputNumber />)}
                    </Form.Item>
                  </td>
                </tr>
              ) : (
                ""
              )}
              <tr>
                <td className="table-animal-popup-td">ANy</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator("anny", { initialValue: 0 })(
                      <InputNumber />
                    )}
                  </Form.Item>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="total-box table-animal-popup-td">3o3l</td>
                <td className="total-box english-font-input ">{this.state.total}</td>
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
