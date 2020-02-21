import React, { Component } from "react";

class TotalAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("TCL: CreditAnimal -> constructor -> props", this.props);
    return (
      <div>
        <h1>pxu nu r+S3r</h1>
      </div>
    );
  }
}

export default TotalAnimal;
