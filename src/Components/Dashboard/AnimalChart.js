import React, { Component } from "react";
import { connect } from "react-redux";
import { getAnimalChart } from "../../Actions/ChartActions";

import {PieChart} from './nivoPieChart'

class AnimalChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalData: [{ id: '', label: 'chart', value: 1, color: '#e6e6e6' }],
      expenceData: [{ x: 0, y: 0 }]
    };
  }
  
  componentDidMount = () => {
    this.props.getAnimalChart().then(res => {
      console.log("LineChart -> componentDidMount -> res", res);
      const ArrayMap = Object.values(res.stats.animal);

      const newData = [
        {
          id: 'gay',
          label: "Gay",
          value: ArrayMap[0],
          color: "#F9C501"
        },
        {
          id: 'bald',
          label: "Bald",
          value: ArrayMap[1],
          color: "#53D767"
        },
        {
          id: 'vachrda',
          label: "Vacharda",
          value: ArrayMap[2],
          color: "#021322"
        },
        {
          id: 'vachardi',
          label: "Vachardi",
          value: ArrayMap[3],
          color: "#40a9ff"
        },
        {
          id: 'other',
          label: "Other",
          value: ArrayMap[4],
          color: "#ff4d4f"
        }
      ]

      this.setState({
        animalData: newData
      });
    });
  };


  render() {

    return (
      <div className='pie-chrt' >
        <PieChart 
          data={this.state.animalData}
        />
      </div>
    )
  }
}

export default connect(null, { getAnimalChart })(AnimalChart);
