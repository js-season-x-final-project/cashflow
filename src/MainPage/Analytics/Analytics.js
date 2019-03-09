import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import classes from './Analytics.module.css';
import { expensesCats, incomeCats } from "../../App/categories"
// const analytics = props => {
class Analytics extends React.Component {

  state = {
    expenseRecs: null,
    incomeRecs: null,
  }

  filtrate = (array, c) => {
    const arr = c === 0 ? expensesCats : incomeCats;
    return arr.map(cat => {
      return [
        cat.category,
        cat.subcategories.map(scat => [
          scat,
          array.reduce((acc, rec) => rec.subCategory === scat ? acc + Number(rec.amount) : acc, 0)
        ]),
        array.reduce((acc, rec) => { return cat.category === rec.category ? acc + Number(rec.amount) : acc }, 0)
      ]
    })

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.expenseRecords !== this.props.expenseRecords) {
      this.setState({
        expenseRecs: this.filtrate(this.props.expenseRecords, 0),
        incomeRecs: this.filtrate(this.props.incomeRecords, 1)
      })
    }
  }

  handleClick = () => {
    console.log('natisna me')
  }

  render() {
    return (
      <Fragment>
        <h1>Analytics</h1>
        <div>
          <p>Total expenses: {this.props.expenses} лв.</p>
          <p>Total incomes: {this.props.incomes} лв.</p>
        </div>
        <Paper className={classes.section}>
          <Table >
            <TableHead>
              <TableRow hover>
                <TableCell>Category</TableCell>
                <TableCell align="center">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(this.state.expenseRecs)}
              {this.state.expenseRecs ? this.state.expenseRecs.map((expense, index) => (
                <TableRow key={index}>
                  <TableCell  onSelect={this.handleClick} component="th" scope="row">
                    {expense[0]}
                  </TableCell>
                  <TableCell align="center">{expense[2]}</TableCell>
                </TableRow>
              )) : null}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell >Total expenses:</TableCell>
                <TableCell align="center"><strong>{this.state.expenseRecs ? this.state.expenseRecs.reduce((acc, rec) => acc + rec[2], 0) : null} лв.</strong></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>

        <Paper className={classes.section}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.incomeRecs ? this.state.incomeRecs.map((expense, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {expense[0]}
                  </TableCell>
                  <TableCell align="right">{expense[2]}</TableCell>
                </TableRow>
              )) : null}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell colSpan={1}>Total incomes:</TableCell>
                <TableCell align="right"><strong>{this.state.incomeRecs ? this.state.incomeRecs.reduce((acc, rec) => acc + rec[2], 0) : null} лв.</strong></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.statisticData.expenses,
    incomes: state.statisticData.incomes,
    incomeRecords: state.statisticData.incomeRecords,
    expenseRecords: state.statisticData.expenseRecords,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, null)(withRouter(Analytics));