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
        <h1>Dead Animal</h1>
        <h1>Dead Animal</h1>
        <h1>Dead Animal</h1>
        <h1>Dead Animal</h1>
        <h1>Dead Animal</h1>
      </div>
    );
  }
}

export default DeadAnimal;
