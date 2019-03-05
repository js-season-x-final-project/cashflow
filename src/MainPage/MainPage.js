import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard';
import Records from './Records/Records';
import Analytics from './Analytics/Analytics';
import Blog from './Blog/Blog';
import Settings from './Settings/Settings';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { calculateExpenses, calculateIncomes, differentiateRecords } from '../actions/analyticsActions'
import {withRouter} from 'react-router-dom'


class MainPage extends React.Component {
  componentDidUpdate() {
    this.props.differentiateRecords(this.props.records || []);
    this.props.calculateExpenses();
    this.props.calculateIncomes();
    console.log(this.props);
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
    auth: state.firebase.auth ? state.firebase.auth : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    differentiateRecords: records => dispatch(differentiateRecords(records)),
    calculateExpenses: () => dispatch(calculateExpenses()),
    calculateIncomes: () => dispatch(calculateIncomes()),
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

