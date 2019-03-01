import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SingleTab from './SingleTab';
import { expensesCats, incomeCats } from '../App/categories';
import { addExpense, addIncome } from '../actions/userActions';
import { connect } from 'react-redux';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

class DialogTabs extends Component {

    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    onAddExpense = newRecord => {
        this.props.onAddExpense(newRecord);
    }

    onAddIncome = newRecord => {
        this.props.onAddIncome(newRecord);
    }

    render() {

        const { value } = this.state;

        return (
            <div>
                <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                    <Tab label="Expenses" />
                    <Tab label="Income" />
                </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><SingleTab cats={expensesCats} handleClose={this.props.handleClose} handleAdd={this.onAddExpense} /></TabContainer>}
                {value === 1 && <TabContainer><SingleTab cats={incomeCats} handleClose={this.props.handleClose} handleAdd={this.onAddIncome} /></TabContainer>}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddExpense: expense => dispatch(addExpense(expense)),
        onAddIncome: income => dispatch(addIncome(income))
    }
}


export default connect(null, mapDispatchToProps)(DialogTabs);