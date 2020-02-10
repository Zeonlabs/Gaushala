import React, { Component } from "react";
import MenuBar from "../Common/MenuBar";
import PageWrapper from "../Common/PageWrapper/PageWrapper";

class Animal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <h1>Animal's Page</h1>
      </PageWrapper>
    );
  }
}

export default Animal;
