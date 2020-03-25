import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { connect } from "react-redux";
import { getLinearChart } from "../../Actions/ChartActions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeData: [{ x: 0, y: 0 }],
      expenceData: [{ x: 0, y: 0 }]
    };
  }

  componentDidMount = () => {
    this.props.getLinearChart().then(res => {
      console.log("LineChart -> componentDidMount -> res", res);
      let linearDataset = [];
      let linearDatasetExpence = [];
      const ArrayMap = res.income.map(val => {
        const data = {
          x: val.month,
          y: val.amount
        };
        linearDataset.push(data);
      });
      const ArrayMapex = res.expense.map(val => {
        const data = {
          x: val.month,
          y: val.amount
        };
        linearDatasetExpence.push(data);
      });
      this.setState(
        {
          incomeData: linearDataset,
          expenceData: linearDatasetExpence
        },
        () =>
          console.log(
            "LineChart -> componentDidMount -> incomeData",
            this.state.incomeData,
            this.state.expenceData
          )
      );
    });
  };
  render() {
    // this.props.income
    console.log(
      "LineChart -> render -> this.props.income",
      this.props.income,
      this.props.expence
    );
    const options = {
      animationEnabled: true,
      // exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      // title: {
      //   text: "Bounce Rate by Week of Year"
      // },
      axisY: {
        title: "Amount",
        includeZero: false
        // suffix: "%"
      },
      axisX: {
        title: "Month",
        // prefix: "W",
        interval: 1
      },
      data: [
        {
          type: "line",
          toolTipContent: "Amount {y}: {x}",
          name: "income",
          showInLegend: true,
          dataPoints: this.state.incomeData.map(d => ({ x: d.x, y: d.y }))
        },
        {
          type: "line",
          toolTipContent: "Amount {y}: {x}",
          name: "expence",
          showInLegend: true,
          dataPoints: this.state.expenceData.map(d => ({ x: d.x, y: d.y }))
        }
      ]
    };

    return (
      <div>
        {/* <h1>React Line Chart</h1> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default connect(null, { getLinearChart })(LineChart);
