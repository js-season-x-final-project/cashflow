import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { HorizontalBar, Bar, Line, Doughnut } from 'react-chartjs-2'
import Calendar from '../../Components/Calendar/Calendar'
import Paper from '@material-ui/core/Paper';
import Radios from '../../Components/Radios/Radios'
import classes from './Dashboard.module.css';
import colors from 'nice-color-palettes/100'
import { Divider } from '@material-ui/core';


const colorsArr = () => {
  return colors.flat(1)
}


class Dashboard extends React.Component {

  state = {
    properties: ["category", "subCategory", "date", "amount"],
    filteredChartData: {},
    overallChartData: {},
    radarChartData: {},
    isClicked: false
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
      filteredChartData: {
        labels: this.props.data.labels,
        datasets: [
          {
            labels: this.props.data.labels,
            data: this.props.data.values,
            backgroundColor: colorsArr().slice(Math.floor(Math.random() * 450)),
          }
        ],
      },
      radarChartData: {
        labels: this.props.filteredByData.map(rec => rec[0]),
        datasets: [
          {
            label: ["Incomes"],
            data: this.props.filteredByData.map(rec => rec[1]),
            backgroundColor: ['rgba(75, 192, 192, 0.6)'],
            spanGaps: true,

          },
          {
            label: ["Expenses"],
            data: this.props.filteredByData.map(rec => rec[2]),
            backgroundColor: ['rgba(255, 159, 64, 0.6)'],
            spanGaps: true,
          }
        ]
      },
      overallChartData: {
        labels: ['Expenses', 'Incomes'],
        datasets: [
          {
            labels: ['Expenses', "Incomes"],
            data: [this.props.expenses, this.props.incomes],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(153, 102, 255, 0.6)'],
          }
        ]
      }
    })
  }

  returnDate = (digits) => {
    if (digits) {
      const date = new Date(digits);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`
    }
  }

  render() {
    return (
      <div className={classes.dashboardWrapper}>

        <div className={classes.wrapperForUserInfo}>

          <Paper square className={classes.calendarWrapper}>
            <h2>Choose period:</h2>
            <Calendar />
            <h3>Current Period: {this.returnDate(this.props.startDate)} - {this.returnDate(this.props.endDate)}</h3>
          </Paper>

          <div className={classes.rightSide}>
            <Paper square className={classes.LastFiveRecords}>
              <h5 className={classes.sortHeading}>Last five expenses:</h5>
              {this.props.expenseRecords.sort((c1, c2) => c1.date < c2.date ? 1 : -1).slice(0, 5).map(record => {
                return (
                  <div classes={classes.singleRecord}>
                    <div className={classes.leftAlign}>
                      <h5> {record.subCategory} </h5>
                      <p>{record.date}</p>
                    </div>
                    <div className={classes.rightAlign}>
                      <p className={record.type === 'expense' ? classes.redLabel : classes.greenLabel}>-{Number(record.amount).toFixed(2)} {record.currency}.</p>
                    </div>
                    <Divider />
                  </div>
                )
              })}
            </Paper>

            <Paper square className={classes.radioButtons}>
              <h5 className={classes.sortHeading}>Sort By</h5>
              <Radios options={this.state.properties.map(prop => { return { value: prop, label: prop.toUpperCase() } })} />
            </Paper>
          </div>

        </div>
        <div className={classes.chartsWrapper}>
          {this.props.data.values.length > 0 ?
            <Fragment>

              <Paper square className={classes.BarChart} >
                <Bar
                  data={this.state.filteredChartData}
                  options={{
                    legend: false,
                    scaleShowValues: true,
                    scales: {
                      xAxes: [{
                        ticks: {
                          display: false
                        },
                      }]
                    },
                  }}
                  responsive
                />
              </Paper>

              <Paper square className={classes.Doughnut} >
                <Doughnut
                  data={this.state.filteredChartData}
                  options={{
                    legend: {
                      position: 'left',
                    }
                  }}
                  responsive
                />
              </Paper>

              <Paper square className={classes.Line}>
                <Line
                  data={this.state.radarChartData}
                  redraw
                  responsive
                />
              </Paper>

            </Fragment> :
            <h3>You dont have what to see for this period :)</h3>}

          <Paper square className={classes.lifetimeChart}>
            <h3 className={classes.sortHeading}>Your lifetime stats for Cashflow</h3>
            <HorizontalBar
              options={{ legend: false }}
              data={this.state.overallChartData}
              responsive
            />
          </Paper>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    expenseRecords: state.statisticData.expenseRecords,
    startDate: state.statisticData.startDate,
    endDate: state.statisticData.endDate,
    expenses: state.statisticData.expenses,
    incomes: state.statisticData.incomes,
    data: state.statisticData.filtered,
    filteredByData: state.statisticData.filteredByData,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(withRouter(Dashboard));