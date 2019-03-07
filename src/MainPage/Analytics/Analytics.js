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

// const analytics = props => {
class Analytics extends React.Component {
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
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Subcategory</TableCell>
                <TableCell align="right">Note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.expenseRecords ? this.props.expenseRecords.sort((c1, c2) => { return c1.date > c2.date ? 1 : -1 }).map(expense => (
                <TableRow key={expense.id}>
                  <TableCell component="th" scope="row">
                    {expense.category}
                  </TableCell>
                  <TableCell align="right">{expense.amount}</TableCell>
                  <TableCell align="right">{expense.date}</TableCell>
                  <TableCell align="right">{expense.subCategory}</TableCell>
                  <TableCell align="right">{expense.note}</TableCell>
                </TableRow>
              )) : null}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell colSpan={1}>Total expenses:</TableCell>
                <TableCell align="right">{this.props.expenses} лв.</TableCell>
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
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Subcategory</TableCell>
                <TableCell align="right">Note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.incomeRecords.map(expense => (
                <TableRow key={expense.id}>
                  <TableCell component="th" scope="row">
                    {expense.category}
                  </TableCell>
                  <TableCell align="right">{expense.amount}</TableCell>
                  <TableCell align="right">{expense.date}</TableCell>
                  <TableCell align="right">{expense.subCategory}</TableCell>
                  <TableCell align="right">{expense.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell colSpan={1}>Total incomes:</TableCell>
                <TableCell align="right">{this.props.incomes} лв.</TableCell>
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