import React, { Component } from "react";
// import MenuBar from "../Common/MenuBar";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import LineChart from "./LineChart";
import { getLinearChart, getAnimalChart } from "../../Actions/ChartActions";
import { connect } from "react-redux";
import AnimalChart from "./AnimalChart";
import LoaderAnimation from "../../Static/Widgets/LoaderAnimation";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linearDataIncome: { x: 0, y: 0 },
      linearDataExpence: {}
    };
  }

  // componentDidUpdate=(prevProps) => {
  //   if()
  // }

  render() {
    return (
      <PageWrapper>
        <div>
          <LineChart
          // income={this.state.linearDataIncome}
          // expence={this.state.linearDataExpence}
          />
          <AnimalChart />
        </div>
      </PageWrapper>
    );
  }
}

export default connect(null, { getAnimalChart, getLinearChart })(Home);
