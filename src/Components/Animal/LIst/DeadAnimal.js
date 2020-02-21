import React, { Component } from "react";

class DeadAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("TCL: DeadAnimal -> constructor -> props", this.props);
    return (
      <div>
        <h1>muTyu pamel pxuAO nu r+S3r</h1>
      </div>
    );
  }
}

export default DeadAnimal;
