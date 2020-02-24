import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

class ListingTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Card
          style={{ width: 300 }}
          cover={<h1>Title</h1>}
          actions={[
            <Icon type="edit" key="edit" />,
            <Icon type="delete" key="setting" />
          ]}
        >
          <Meta description="This is the description" />
        </Card>
      </div>
    );
  }
}

export default ListingTodo;
