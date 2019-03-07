import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import Radios from '../../Components/Radios/Radios'

// const analytics = props => {
class Analytics extends React.Component {

  state = {
    sortBy: 'category'
  }

  madafaka(){
    console.log('ebi se')
  }
  render() {
    return (
      <Fragment>
        <h1>Analytics</h1>
        <div>
          <p>Total expenses: {this.props.expenses} лв.</p>
          <p>Total incomes: {this.props.incomes} лв.</p>
        </div>
        <Radios onChange={this.madafaka} />
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
              {this.props.expenseRecords ? this.props.expenseRecords.sort((c1, c2) => { return c1[this.state.sortBy] > c2[this.state.sortBy] ? 1 : -1 }).map(expense => (
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