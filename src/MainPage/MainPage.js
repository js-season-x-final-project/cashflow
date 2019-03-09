import React, { Fragment } from 'react';
import Header from './Header/Header'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { calculateExpenses, calculateIncomes, differentiateRecords, calculateDataByFilter, calculateDataByDate } from '../actions/analyticsActions'
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../MainPage/Dashboard/Dashboard';
import Records from '../MainPage/Records/Records';
import Analytics from '../MainPage/Analytics/Analytics';
import Blog from '../MainPage/Blog/Blog';
import Article from '../MainPage/Blog/Article';

class MainPage extends React.Component {

  componentDidUpdate(prevProps) {
    const p = this.props.records ? Object.entries(this.props.records).map(rec => { return { ...rec[1], rid: rec[0] } }) : [];
    this.props.differentiateRecords(p, this.props.startDate, this.props.endDate);
    this.props.calculateDataByFilter();
    this.props.calculateDataByDate();
    if (prevProps.records !== this.props.records) {
      this.props.calculateExpenses(p);
      this.props.calculateIncomes(p);
    }
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      this.props.history.push('/');
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
          <Route exact path='/main/blog/:id' component={Article} />
        </Switch>
      </Fragment>
    )

  }
}

const mapStateToProps = state => {
  const hash = state.firebase.auth.uid;
  return {
    records: state.firestore.data.users && hash ? state.firestore.data.users[hash].records : null,
    currentFilter: state.statisticData.currentFilter,
    startDate: state.statisticData.startDate,
    endDate: state.statisticData.endDate,
    auth: state.firebase.auth ? state.firebase.auth : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    differentiateRecords: (records, startDate, endDate) => dispatch(differentiateRecords(records, startDate, endDate)),
    calculateDataByFilter: () => dispatch(calculateDataByFilter()),
    calculateDataByDate: () => dispatch(calculateDataByDate()),
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
          { collection: 'records' },
        ]
      }
    ] : []
  })
)(withRouter(MainPage))
