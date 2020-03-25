import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import "./Notes.scss";
import { Button, Tooltip, message } from "antd";
import Addtodo from "./Addnotes/Addtodo";
import ListingTodo from "./ListingTodo";
import {
  getNotes,
  editNotes,
  addNotes,
  deleteNotes
} from "../../Actions/Notes";

export class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todovisible: false,
      data: [],
      pagination: {
        page: 1,
        limit: 20
      },
      editData: "",
      income: false
    };
  }

  handelAddTodos = () => {
    this.setState({
      todovisible: !this.state.todovisible,
      income: false
    });
  };

  componentDidMount = () => {
    const pagination = {
      page: 1,
      limit: 20
    };
    this.props.getNotes(pagination).then(res => {
      console.log("Employees -> componentDidMount -> res", res);
      this.setState({
        data: res.docs
      });
    });
  };

  handelEdit = record => {
    console.log("Notes -> record", record);
    this.setState({
      todovisible: !this.state.todovisible,
      editData: record,
      income: true
    });
  };

  handelDataAdd = data => {
    console.log("Employees -> handelDataAdd -> data", data);
    this.props.addNotes(data).then(res => {
      this.props.getNotes(this.state.pagination).then(res => {
        this.setState({
          data: res.docs
        });
        this.handelAddTodos();
      });
    });
  };

  handelAddEdit = (id, data) => {
    console.log("TrustMembers -> handelAddEdit -> data", data);
    this.props.editNotes(id, data).then(res => {
      this.props.getNotes(this.state.pagination).then(res => {
        this.setState({
          data: res.docs
        });
        this.handelAddTodos();
      });
    });
  };

  handelDelete = record => {
    console.log("Income -> handleDelete -> key, record", record);
    this.props.deleteNotes(record).then(res => {
      this.props
        .getNotes(this.state.pagination)
        .then(res => {
          console.log("res in a income model =->", res);
          this.setState({
            data: res.docs
          });
        })
        .catch(e => message.error(e));
    });
  };

  paginate = page => {
    this.setState({
      pagination: {
        page,
        limit: 20
      }
    });
  };

  render() {
    const { income, editData } = this.state;
    return (
      <PageWrapper title="nO>6">
        <div>
          <Tooltip placement="top" title="nO>6 ]mero">
            <Button
              className="button-text-size button-margin-bottum"
              type="primary"
              icon="plus"
              onClick={this.handelAddTodos}
              size="large"
            >
              nO>6 ]mero
            </Button>
          </Tooltip>
        </div>
        <div></div>

        <Addtodo
          visible={this.state.todovisible}
          submit={this.handelDataAdd}
          close={this.handelAddTodos}
          editData={this.handelAddEdit}
          data={income ? editData : ""}
          type={income ? "edit" : "add"}
        />
        <div>
          <ListingTodo
            data={this.state.data}
            handelDelete={this.handelDelete}
            showDrawer={this.handelEdit}
          />
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  getNotes,
  addNotes,
  editNotes,
  deleteNotes
})(Notes);
