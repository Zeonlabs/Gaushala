import React, { Component } from "react";
import { connect } from "react-redux";
import { getLinearChart } from "../../Actions/ChartActions";

import {MyResponsiveLine} from './nivoLineGraph'
import _ from 'lodash'
import { arrangeDate } from "./arrangeDate";

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeData: [{ x: 0, y: 0 }],
      expenceData: [{ x: 0, y: 0 }]
    };
  }

  componentDidMount = () => {
    const getDate = (year, month) => `${month < 10 ? '0' + month : month}-${year}`

    this.props.getLinearChart().then(res => {
      const arrangedIncomeDate = arrangeDate(res.income)
      const arrangedExpenseDate = arrangeDate(res.expense)

      const incomeData = arrangedIncomeDate.map(val => ({
        x: getDate(val.year, val.month),
        y: val.amount
      }))

      const expenseData = arrangedExpenseDate.map(val => ({
        x: getDate(val.year, val.month),
        y: val.amount
      }))

      this.setState({ incomeData: incomeData, expenceData: expenseData})})
  }

  render() {

    return (
      <div className='line-grph-div' >
        <h3 className='dashbrd-label' >aavk !ne javk</h3>

        <div className='grph' >
          <MyResponsiveLine
            data={[
              {
                id: 'Expense',
                color: '#E30B0C',
                data: this.state.expenceData
              },
              {
                id: 'Income',
                // color: 'hsl(157, 70%, 50%)',
                color: '#36B971',
                data: this.state.incomeData
              }
            ]}
            />
          </div>
      </div>
    )
  }
}

export default connect(null, { getLinearChart })(LineChart);
