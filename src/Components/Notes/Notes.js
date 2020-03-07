import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import { DownloadOutlined } from '@ant-design/icons';
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
        <div>
        <Tooltip placement="top" title="nO>6 ]mero">
          <Button className="button-text-size button-margin-bottum" type="primary" icon="plus" onClick={this.handelAddTodos} size="large">
          nO>6 ]mero
          </Button>
        </Tooltip>
        </div>
        <div>

        </div>
        
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
