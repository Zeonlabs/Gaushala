import React, { Component } from "react";
import { connect } from "react-redux";
import MenuBar from "../Common/MenuBar";

export class Expences extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <MenuBar>
        <div>
          <h2>THis is a Expences page</h2>
        </div>
      </MenuBar>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Expences);
