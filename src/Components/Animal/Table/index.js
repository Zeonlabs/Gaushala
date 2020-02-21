import React, { Component } from "react";
import { Form, Icon, InputNumber, Button, Checkbox } from "antd";

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
                <th>{type ? "Vigat" : "Pashu no Prakar"}</th>
                <th>{type ? "Money" : "Counts"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{type ? "Ghas" : "Gay"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "ghas" : "gay", {
                      initialValue: 0
                    })(<InputNumber />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td>{type ? "Charo" : "Balad"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "charo" : "balad", {
                      initialValue: 0
                    })(<InputNumber />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td>{type ? "Dan" : "Vacharda"}</td>
                <td>
                  <Form.Item>
                    {getFieldDecorator(type ? "Dan" : "vacharda", {
                      initialValue: 0
                    })(<InputNumber />)}
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td>{type ? "majuri" : "Vachardi"}</td>
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
                  <td>{type ? "Doctor" : "Vachardi"}</td>
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
                <td>Any</td>
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
                <td>Total</td>
                <td>{this.state.total}</td>
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
