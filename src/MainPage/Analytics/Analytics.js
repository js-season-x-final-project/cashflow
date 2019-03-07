import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const analytics = props => {

  return (
    <Fragment>
      <h1>Analytics</h1>
      <div>
        <p>Total expenses: {props.expenses} лв.</p>
        <p>Total incomes: {props.incomes} лв.</p>
      </div>
      <Paper>
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
            {props.expenseRecords ? props.expenseRecords.sort((c1,c2)=>{return c1.date > c2.date ? 1 : -1 }).map(expense => (
              <TableRow key={expense.id}>
                <TableCell component="th" scope="row">
                  {expense.category}
                </TableCell>
                <TableCell align="right">{expense.amount}</TableCell>
                <TableCell align="right">{expense.date}</TableCell>
                <TableCell align="right">{expense.subCategory}</TableCell>
                <TableCell align="right">{expense.note}</TableCell>
              </TableRow>
            )):null}
          </TableBody>
        </Table>
      </Paper>
      <Paper>
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
            {props.incomeRecords.map(expense => (
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
        </Table>
      </Paper>
    </Fragment>
  )
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

export default connect(mapStateToProps, null)(withRouter(analytics));