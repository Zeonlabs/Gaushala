import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import "./Notes.scss";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Radio,
  Button,
  InputNumber,
  Row,
  Col
} from "antd";

const { Option } = Select;

export class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
       
       
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
