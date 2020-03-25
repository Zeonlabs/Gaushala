import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { connect } from "react-redux";
import { getAnimalChart } from "../../Actions/ChartActions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class AnimalChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalData: [{ x: 0, y: 0 }],
      expenceData: [{ x: 0, y: 0 }]
    };
  }
  componentDidMount = () => {
    this.props.getAnimalChart().then(res => {
      console.log("LineChart -> componentDidMount -> res", res);
      const ArrayMap = Object.values(res.stats.animal);
      const data = [
        {
          name: "Gay",
          y: ArrayMap[0]
        },
        {
          name: "Balad",
          y: ArrayMap[1]
        },
        {
          name: "Vacharda",
          y: ArrayMap[2]
        },
        {
          name: "Vachardi",
          y: ArrayMap[3]
        },
        {
          name: "Other",
          y: ArrayMap[4]
        }
        //  {
        //    name : 'Gay', y:ArrayMap[5]
        //  }
      ];
      console.log("AnimalChart -> componentDidMount -> data", data);
      this.setState({
        animalData: data
      });
    });
  };
  render() {
    const options = {
      animationEnabled: true,
      title: {
        // text: "Customer Satisfaction"
      },
      subtitles: [
        {
          // text: "71% Positive",
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true
        }
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###",
          dataPoints: this.state.animalData.map(d => ({ name: d.name, y: d.y }))
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default connect(null, { getAnimalChart })(AnimalChart);
