import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { HorizontalBar, Bar, Radar, Line, Doughnut } from 'react-chartjs-2'
import Calendar from '../../Components/Calendar/Calendar'
import Paper from '@material-ui/core/Paper';
import Radios from '../../Components/Radios/Radios'
import classes from './Dashboard.module.css';
import colors from 'nice-color-palettes/100'


const colorsArr = () =>{
  return colors.flat(1)
}


class Dashboard extends React.Component {

  state = {
    properties:["category","subCategory","date","amount"],
    filteredChartData: {},
    overallChartData: {},
    radarChartData: {}
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
            backgroundColor: colorsArr().slice(Math.floor(Math.random()*450)),
          }
        ],
      },
      radarChartData: {
        labels: this.props.filteredByData.map(rec => rec[0]),
        datasets: [
          {
            label:["Expenses"],
            data: this.props.filteredByData.map(rec => rec[1]),
            backgroundColor: ['rgba(75, 192, 192, 0.6)'],
            spanGaps: true,

          },
          {

            label: ["Incomes"],
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
            labels: ['Expenses',"Incomes"],
            data: [this.props.expenses, this.props.incomes],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(153, 102, 255, 0.6)'],
          }
        ]
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div className={classes.wrapperForUserInfo}>
        <Calendar />
        <Paper className={classes.radioButtons}>
          <Radios options={this.state.properties.map(prop=> {return{value:prop,label:prop.toUpperCase()}})}/>
        </Paper>
        <Paper className={classes.LastFiveRecords}>
          

        </Paper>

        </div>
        <div className={classes.chartsWrapper}>
          {this.props.data.values.length > 0 ?
            <Fragment>
              <Paper className={classes.chart}>
                <label>These are your stats for the period {new Date(this.props.startDate).toDateString()} to {new Date(this.props.endDate).toDateString()}</label>
                <Bar
                  data={this.state.filteredChartData}
                  options={{legend:false}}
                  responsive
                />
            
                <Doughnut
                  data={this.state.filteredChartData}
                  options={{legend:{
                    position:"left"
                  }}}
                  responsive
                />
              </Paper>

              {/* {this.props.filteredByData.length > 2 && (this.props.endDate - this.props.startDate <= 604800000) ? */}
                <Fragment>
                  {/* <Paper className={classes.chart}>
                    <Radar
                      data={this.state.radarChartData}
                      redraw
                      responsive
                    />
                  </Paper> */}

                  <Paper className={classes.chart} style={{height:200}}>
                    <Line
                      data={this.state.radarChartData}
                      redraw
                      responsive
                    />
                  </Paper>
                </Fragment> 
                {/* : null} */}
            </Fragment> :
            <h3>You dont have what to see for this period :)</h3>}
          <Paper className={classes.chart}>
            <h3>Your lifetime stats for cashflow</h3>
            <HorizontalBar
              options={{legend:false}}
              data={this.state.overallChartData}
              responsive
            />
          </Paper>
        </div>

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
    filteredByData: state.statisticData.filteredByData,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(withRouter(Dashboard));