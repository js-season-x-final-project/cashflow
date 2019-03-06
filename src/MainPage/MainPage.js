import React,{Fragment} from 'react';
import Header from './Header/Header'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { calculateExpenses, calculateIncomes, differentiateRecords,calculateDataByFilter } from '../actions/analyticsActions'
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../MainPage/Dashboard/Dashboard';
import Records from '../MainPage/Records/Records';
import Analytics from '../MainPage/Analytics/Analytics';
import Blog from '../MainPage/Blog/Blog';
import Settings from '../MainPage/Settings/Settings'

class MainPage extends React.Component {


  componentDidUpdate(prevProps) {
    this.props.differentiateRecords(this.props.records || [],this.props.startDate, this.props.endDate);
    this.props.calculateDataByFilter();
    // this.props.calculateDataByFilter(filter)
    if (prevProps.records !== this.props.records) {
      this.props.calculateExpenses(this.props.records || []);
      this.props.calculateIncomes(this.props.records || []);
    }
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      this.props.history.push('/auth');
    }
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/main' component={Dashboard} />
          <Route exact path='/main/dashboard' component={Dashboard} />
          <Route exact path='/main/records' component={Records} />
          <Route exact path='/main/analytics' component={Analytics} />
          <Route exact path='/main/blog' component={Blog} />
          <Route exact path='/main/settings' component={Settings} />
        </Switch>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    records: state.firestore.ordered.users ? state.firestore.ordered.users[0].records : null,
    currentFilter: state.statisticData.currentFilter,
    startDate: state.statisticData.startDate,
    endDate: state.statisticData.endDate,
    auth: state.firebase.auth ? state.firebase.auth : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    differentiateRecords: (records,startDate,endDate) => dispatch(differentiateRecords(records,startDate,endDate)),
    calculateDataByFilter: () => dispatch(calculateDataByFilter()),
    calculateExpenses: (arr) => dispatch(calculateExpenses(arr)),
    calculateIncomes: (arr) => dispatch(calculateIncomes(arr)),
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return props.auth.uid ? [
      {
        collection: 'users',
        doc: props.auth.uid,
        subcollections: [
          { collection: 'records' }
        ]
      }
    ] : []
  })
)(withRouter(MainPage))
