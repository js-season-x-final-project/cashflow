import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2'
import Calendar from '../../Components/Calendar/Calendar'

class Dashboard extends React.Component {

  state = {
    chartData: {}
  }

  componentWillMount() {
    if (typeof (this.props.expenses) === 'number') {
      
      this.generateChartData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }
    this.generateChartData();
  }

  generateChartData() {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 3);
    currentDate = currentDate.toLocaleDateString();
    this.setState({
      chartData: {
        labels: this.props.expenseRecords.map(expense => {
            return expense.subCategory
          }),
        datasets: [
          {
            labels: ['Amount'],
            data: this.props.expenseRecords.map(expense => { return Number(expense.amount)})
          }
        ]
      }
    })
  }

  render() {
    return (
      <Fragment>
        <h1>dashboard</h1>
        <Calendar />
        {/* <Bar data={this.state.chartData} /> */}
        {/* <Radar data={this.state.chartData} /> */}
        <Line data={this.state.chartData} />
        {/* <Pie data={this.state.chartData}/> */}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.statisticData.expenses,
    incomes: state.statisticData.incomes,
    expenseRecords: state.statisticData.expenseRecords,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(withRouter(Dashboard));