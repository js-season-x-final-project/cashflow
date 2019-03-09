import React, { Component, Fragment } from 'react';
import Record from './Record';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SelectByCategory from '../../Components/Selects/ControlledSelect'
import { connect } from 'react-redux';
import classes from './Records.module.css';
import { expensesCats, incomeCats } from '../../App/categories'

class Records extends Component {

  state = {
    recordsToDisplay: null
  }

  extractRecords = () =>{
    return this.props.records ? Object.entries(this.props.records).map(record => {return record[1]?{...record[1],uid:record[0]}:null}).filter(rec=>rec!==null): null
  }

  extractCategories = () => {
    let exCats = expensesCats.map(ex => ex.subcategories).flat(1);
    let inCats = incomeCats.map(inc => inc.subcategories).flat(1);
    return [...exCats, ...inCats];
  }

  filterRecords = (subcategory) => {
    if (subcategory === "All"&& this.props.records) {
      this.setState({
        recordsToDisplay: this.extractRecords()
      })
      return;
    }
    this.setState({
      recordsToDisplay:  Object.entries(this.props.records).map(record => {return record[1]?{...record[1],uid:record[0]}:null}).filter(record=> record && record.subCategory === subcategory)
    })
  }

  componentDidMount(){
    this.setState({...this.state,
      recordsToDisplay: this.extractRecords()
    })
  }

  componentDidUpdate(prevProps,prevState){
    if (prevProps === this.props) {
      return;
    }
    this.setState({...this.state,
      recordsToDisplay:  this.extractRecords()
    })
  }

  render() {

    return (
      <div className={classes.mainWrapper}>
        <Paper className={classes.recordsExpenses}>
          <SelectByCategory labels={this.extractCategories()} onFilter={this.filterRecords} />
          {console.log(this.state.recordsToDisplay)}
          {this.state.recordsToDisplay ? this.state.recordsToDisplay.map((rec) => {
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