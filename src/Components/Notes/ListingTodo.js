import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";
import "./Notes.scss";
import CardNotes from "./CardNotes.js";

const { Meta } = Card;

class ListingTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log("note listing log -> ", this.props.data);
    return (
      <div className="card-note">
        {this.props.data.map(value => (
          <CardNotes
            data={value}
            handelSubmit={this.props.showDrawer}
            handelDelete={this.props.handelDelete}
          />
        ))}
      </div>
    );
  }
}

export default ListingTodo;
