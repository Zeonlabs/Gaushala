import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";

export class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <div>
          <h2>THis is a Employees page</h2>
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
