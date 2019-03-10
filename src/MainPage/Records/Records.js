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

  extractRecords = () => {
    return this.props.records ? Object.entries(this.props.records).map(record => { return record[1] ? { ...record[1], uid: record[0] } : null }).filter(rec => rec !== null) : null
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
      recordsToDisplay: Object.entries(this.props.records).map(record => { return record[1] ? { ...record[1], uid: record[0] } : null }).filter(record => record && record[filterKey] === filterValue)
    })
  }

  componentDidMount() {
    this.setState({
      ...this.state,
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

  render() {

    return (
      <div className={classes.recordsWrapper}>

        <div className={classes.recordsHeader}>
          <Paper square={true}>
            <h3>All records for the period:</h3>
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
          {this.state.recordsToDisplay ? this.state.recordsToDisplay.reverse().map((rec) => {
            return (rec && rec.amount ?
              <Fragment key={rec.uid} >
                <Record uid={rec.uid} {...rec} />
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
    records: state.firestore.data.users && hash ? state.firestore.data.users[hash].records : null,
    auth: state.firebase.auth ? state.firebase.auth : null
  }
}


export default connect(mapStateToProps)(Records);