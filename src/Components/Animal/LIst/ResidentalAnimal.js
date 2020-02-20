import React, { Component } from "react";

class ResidentalAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("TCL: ResidentalAnimal -> constructor -> props", this.props);
    return (
      <div>
        <h1>Residental Animal</h1>
        <h1>Residental Animal</h1>
        <h1>Residental Animal</h1>
        <h1>Residental Animal</h1>
        <h1>Residental Animal</h1>
      </div>
    );
  }
}

export default ResidentalAnimal;
