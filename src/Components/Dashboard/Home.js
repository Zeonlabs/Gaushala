import React, { Component } from "react";
// import MenuBar from "../Common/MenuBar";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import LineChart from "./LineChart";
import { getLinearChart, getAnimalChart } from "../../Actions/ChartActions";
import { connect } from "react-redux";
import AnimalChart from "./AnimalChart";
import LoaderAnimation from "../../Static/Widgets/LoaderAnimation";

import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linearDataIncome: { x: 0, y: 0 },
      linearDataExpence: {}
    };
  }


  render() {
    return (
      <PageWrapper>
        <div className='dashboard' >
          <LineChart
          // income={this.state.linearDataIncome}
          // expence={this.state.linearDataExpence}
          />


          <div className='btml-grph' >
            <div className='piechrt-div' >
              <h3 className='dashbrd-label' >Psuo</h3>
              <AnimalChart />
            </div>
            <div className='balance-div' ></div>

          </div>
        </div>
      </PageWrapper>
    );
  }
}

export default connect(null, { getAnimalChart, getLinearChart })(Home);
