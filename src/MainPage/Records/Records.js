import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Record from './Record';
import { connect } from 'react-redux';


const records = props => (
    <Fragment>
        <Header />
        {props.expenses.map(expense => 
            <Record key={expense.id} { ...expense } />)
        }
        {props.incomes.map(income => 
            <Record key={income.id} { ...income } />)
        }
    </Fragment>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.user.expenses,
        incomes: state.user.incomes
    }
}

export default connect(mapStateToProps, null)(records);