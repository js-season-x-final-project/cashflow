import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Bar, Pie } from 'react-chartjs-2'
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
    if (prevProps.data === this.props.data) {
      return;
    }
    this.generateChartData();
  }

  generateChartData() {
    this.setState({
      chartData: {
        labels: this.props.data.labels,
        datasets: [
          {
            labels: ['Amount'],
            data: this.props.data.values
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
        <Bar
          data={this.state.chartData} />
        <Pie
          data={this.state.chartData} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.statisticData.expenses,
    incomes: state.statisticData.incomes,
    data: state.statisticData.filtered,
    expenseRecords: state.statisticData.expenseRecords,
    incomeRecords: state.statisticData.incomeRecords,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(withRouter(Dashboard));