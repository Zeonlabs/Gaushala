import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";
import "./Notes.scss";


const { Meta } = Card;

class ListingTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card-note">
        <Card
          style={{ width: 300,marginTop: 16 }}
          cover={<h1>Title</h1>}
          actions={[
            <Icon className="edit-note-button"  type="edit" theme="filled" style={{ color: "#3AD944" }} key="edit" />,
            <Icon theme="filled" style={{ color: "rgba(255, 0, 0)" }} type="delete" key="setting" />
          ]}>
          <Meta description="This is the description Ant Design supports a default button size as well as a large and small size. If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size." />
        </Card>
      </div>
    );
  }
}

export default ListingTodo;
