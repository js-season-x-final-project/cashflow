import React, { Fragment } from 'react';
import MainPage from '../MainPage'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Bar, Radar, Pie, Line } from 'react-chartjs-2'
import Header from '../Header/Header';


// const dashboard = props => {
class Dashboard extends React.Component {

  state ={
    chartData:{}
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      console.log('true');
      return;
    }
    this.generateChartData();
    console.log('[DASH] DID UPDATE');
  }

  generateChartData() {
    console.log(this.props.expenses);
    this.setState({
      chartData: {
        labels: ['Expenses', 'Incomes'],
        datasets: [
          {
            labels:['Amount'],
            data:[
              this.props.expenses,
              this.props.incomes
            ]
          }
        ]
      }
    })
  }

  render() {
    return (
      <Fragment>
        <h1>dashboard</h1>
        <Bar data={this.state.chartData} />
        <Radar data={this.state.chartData} />
        <Line data={this.state.chartData} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.statisticData.expenses,
    incomes: state.statisticData.incomes,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(withRouter(Dashboard));