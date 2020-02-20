import React, { Component } from "react";

class CreditAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("TCL: CreditAnimal -> constructor -> props", this.props);
    return (
      <div>
        <h1>AAvela Animal</h1>
        <h1>AAvela Animal</h1>
        <h1>AAvela Animal</h1>
        <h1>AAvela Animal</h1>
        <h1>AAvela Animal</h1>
      </div>
    );
  }
}

export default CreditAnimal;
