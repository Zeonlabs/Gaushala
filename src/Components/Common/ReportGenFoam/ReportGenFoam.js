import React, { Component } from "react";
import { Form, DatePicker, TimePicker, Button } from "antd";
import moment from "moment";
const { MonthPicker, RangePicker } = DatePicker;

class ReportGenFoam extends Component {
  

  handleSubmit = e => {
    console.log("TCL: e", e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("TCL: values", values);
      if (!err) {
        // const date = moment(values.date).format("YYYY-MM-DD");
        // const id = this.state.roughId;
        // console.log("TCL: id", id);
        // if (this.props.type === "return") {
        //   const data = {
        //     id,
        //     date,
        //     values
        //   };
        //   this.handelReturn(data);
        // } else {
        //   this.handelIssue(values, id, date);
        // }
      }
    });
  };

  onChangeSrno = (date, dateString) => {
    // console.log("TCL: onChangeSrno -> date, dateString", date, dateString);
    // const singlePacketDetails = this.state.pckCarat.find(
    //   item => item.srno === date
    // );
    // this.props.form.setFieldsValue({
    //   available: this.state.pckCarat[0].available_stock,
    //   pcarat: singlePacketDetails.carat,
    //   pcs: singlePacketDetails.pcs
    // });
    // this.setState({
    //   roughId: singlePacketDetails.rough_id,
    //   srno: date
    // });
    // console.log(
    //   "TCL: onChangeSrno -> singlePacketDetails",
    //   singlePacketDetails
    // );
  };

  onChangeType = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      type: e.target.value
    });
    // if (e.target.value === "sawing") {
    //   this.props.sawingIssueSrno().then(res => {
    //     this.setState({
    //       sawingSrno: res
    //     });
    //   });
    // } else {
    //   this.props.chapkaIssueSrno().then(res => {
    //     console.log("this is a log in a chapka issue srno ->", res);
    //     this.setState({
    //       sawingSrno: res
    //     });
    //   });
    // }
  };

  onChangeSawingType = e => {
    // console.log("radio checked", e.target.value);
    // this.setState({
    //   value: e.target.value
    // });
  };

  onChanges = value => {
    console.log(`selected ${value}`);
  };

  onBlur = () => {
    console.log("blur");
  };

  onFocus = () => {
    console.log("focus");
  };

  onSearch = val => {
    console.log("search:", val);
  };
  handleReset = () => {
    this.props.form.resetFields();
    this.props.toggleModel();
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue["range-picker"];
      const rangeTimeValue = fieldsValue["range-time-picker"];
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        "date-time-picker": fieldsValue["date-time-picker"].format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD")
        ],
        "range-time-picker": [
          rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
          rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
        ],
        "time-picker": fieldsValue["time-picker"].format("HH:mm:ss")
      };
      console.log("Received values of form: ", values);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    const rangeConfig = {
      rules: [{ type: "array", required: true, message: "Please select time!" }]
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label="RangePicker">
          {getFieldDecorator("range-picker", rangeConfig)(<RangePicker />)}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 }
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

   const ReportGenFoamFinal = Form.create({ name: "time_related_controls" })(
    ReportGenFoam
);
export default ReportGenFoamFinal;
