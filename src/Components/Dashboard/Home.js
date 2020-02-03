import React, { Component } from "react";
import MenuBar from "../Common/MenuBar";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <MenuBar>
        <h1>Dashboard</h1>
      </MenuBar>
    );
  }
}

export default Home;
