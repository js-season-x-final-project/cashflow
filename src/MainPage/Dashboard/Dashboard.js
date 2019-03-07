import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { HorizontalBar, Pie } from 'react-chartjs-2'
import Calendar from '../../Components/Calendar/Calendar'
// import Radios from '../../Components/Radios/Radios'
import NestedList from '../../Components/List/List'
class Dashboard extends React.Component {

  state = {
    filteredChartData: {},
    overallChartData: {},
  }

  componentWillMount() {
    if (typeof (this.props.expenses) === 'number') {
      this.generateChartData();
    }
  }

  generateRandom() {
    const COLORS = [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)'
    ]
    return COLORS[Math.floor(Math.random() * COLORS.length)]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data === this.props.data) { 
      return;
    }
    this.generateChartData();

  }

  generateChartData() {
    this.setState({
      filteredChartData: {
        labels: this.props.data.labels,
        datasets: [
          {
            labels: ['Amount'],
            data: this.props.data.values,
            backgroundColor: this.props.data.values.map(val => this.generateRandom())
          }
        ]
      },
      overallChartData: {
        labels: ['Expenses', 'Incomes'],
        datasets: [
          {
            labels: ['Amount'],
            data: [this.props.expenses,this.props.incomes],
            backgroundColor: [this.generateRandom(),this.generateRandom()]
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
        {/* <NestedList /> */}
        {/* <Bar data={this.state.chartData} /> */}
        {/* <Radar data={this.state.chartData} /> */}
        <h2>These are your stats for the period {new Date(this.props.startDate).toDateString()} to {new Date(this.props.endDate).toDateString()}</h2>
        <HorizontalBar
          data={this.state.filteredChartData} />
        <Pie
          data={this.state.filteredChartData} />
        <h3>Your lifetime stats for cashflow</h3>
        <HorizontalBar
          data={this.state.overallChartData}/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    startDate: state.statisticData.startDate,
    endDate: state.statisticData.endDate,
    expenses: state.statisticData.expenses,
    incomes: state.statisticData.incomes,
    data: state.statisticData.filtered,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(withRouter(Dashboard));