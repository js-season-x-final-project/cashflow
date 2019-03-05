import React from 'react';
import Header from './Header/Header'
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
      <Header />
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
