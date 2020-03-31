import React, { Component } from "react";
// import MenuBar from "../Common/MenuBar";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import LineChart from "./LineChart";
import { getLinearChart, getAnimalChart } from "../../Actions/ChartActions";
import { connect } from "react-redux";
import AnimalChart from "./AnimalChart";
import AnimatedNumber from "animated-number-react";
// import LoaderAnimation from "../../Static/Widgets/LoaderAnimation";

import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linearDataIncome: { x: 0, y: 0 },
      linearDataExpence: {},
      capital: 0
    };
  }

  // componentDidMount() {
  //   this.props.getAnimalChart().then(res => {
  //     this.setState({
  //       capital: res.stats.capital
  //     });
  //   });
  // }

  componentDidUpdate = prevProps => {
    if (prevProps.totalAnimalCount !== this.props.totalAnimalCount) {
      this.setState({
        capital: this.props.totalAnimalCount.capital
      });
    }
  };
  formatValue = value => value.toFixed(0);
  render() {
    return (
      <PageWrapper>
        <div className="dashboard">
          <LineChart
          // income={this.state.linearDataIncome}
          // expence={this.state.linearDataExpence}
          />

          <div className="btml-grph">
            <div className="piechrt-div">
              <h3 className="dashbrd-label">Psuo</h3>
              <AnimalChart />
            </div>
            <div className="balance-div">
              <AnimatedNumber
                value={this.state.capital}
                duration={1800}
                formatValue={this.formatValue}
              />
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state.Test
  // ...state.Animals
});

export default connect(mapStateToProps, { getAnimalChart, getLinearChart })(
  Home
);
