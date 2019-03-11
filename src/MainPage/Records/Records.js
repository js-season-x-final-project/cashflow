import React, { Component, Fragment } from 'react';
import Record from './Record';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import NestedList from '../../Components/List/List'
import { expensesCats, incomeCats } from '../../App/categories';
import classes from './Records.module.css'

class Records extends Component {

  state = {
    recordsToDisplay: null
  }
   extractRecords = () =>{
    return this.props.records ? [...this.props.expenseRecords,...this.props.incomeRecords] : null
  }

  filterRecords = (subcategory, category) => {
    if (category === "All" && this.props.records) {
      this.setState({
        recordsToDisplay: this.extractRecords()
      })
      return;
    }
    let filterValue = category || subcategory;
    let filterKey = category ? "category" : "subCategory";
    this.setState({
      recordsToDisplay: this.extractRecords().filter(record=>record && record[filterKey] === filterValue)
    })
  }

  componentDidMount(){
    this.setState({...this.state,
      recordsToDisplay: this.extractRecords()
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }
    this.setState({
      ...this.state,
      recordsToDisplay: this.extractRecords()
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
      <div className={classes.recordsWrapper}>

        <div className={classes.recordsHeader}>
          <Paper square={true} className={classes.headTitles}>
            <h3>All records for the period:</h3>
            <h3>{this.returnDate(this.props.startDate)} - {this.returnDate(this.props.endDate)}</h3>
          </Paper>
        </div>

        <Paper square={true} className={classes.recordsFilter}>
          <div className={classes.singleFilter}>
            <h4>Expense Categories</h4>
            <NestedList className={classes.list} categories={expensesCats} onFilter={this.filterRecords} />
          </div>
          <div className={classes.singleFilter}>
            <h4>Income Categories</h4>
            <NestedList className={classes.list} categories={incomeCats} onFilter={this.filterRecords} />
          </div>
        </Paper>

        <Paper square={true} className={classes.recordsExpenses}>
          {this.state.recordsToDisplay ? this.state.recordsToDisplay.sort((a, b) => b.id - a.id).map((rec) => {

            return (rec && rec.amount ?
              <Fragment key={rec.rid} >
                <Record uid={rec.rid} {...rec} />
                <Divider />
              </Fragment>
              : null)
          })
            : null}
        </Paper>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const hash = state.firebase.auth.uid
  return {
    startDate: state.statisticData.startDate,
    endDate: state.statisticData.endDate,
    expenseRecords: state.statisticData.expenseRecords,
    incomeRecords: state.statisticData.incomeRecords,
    records: state.firestore.data.users && hash ? state.firestore.data.users[hash].records : null,
    startDate: state.statisticData.startDate,
    endDate: state.statisticData.endDate,
    auth: state.firebase.auth ? state.firebase.auth : null
  }
}


export default connect(mapStateToProps)(Records);