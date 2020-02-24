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
  Col,
  Tooltip
} from "antd";
import Addtodo from "./Addnotes/Addtodo";
import ListingTodo from "./ListingTodo";

const { Option } = Select;

export class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todovisible: false
    };
  }

  handelAddTodos = () => {
    this.setState({
      todovisible: !this.state.todovisible
    });
  };

  render() {
    return (
      <PageWrapper title="nO>6">
        <Tooltip placement="top" title="Add Notes">
          <Button
            type="primary"
            onClick={this.handelAddTodos}
            shape="circle"
            icon="plus"
            size="large"
          />
        </Tooltip>
        <Addtodo visible={this.state.todovisible} close={this.handelAddTodos} />
        <div>
          <ListingTodo />
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
