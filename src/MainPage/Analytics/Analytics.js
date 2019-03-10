import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { expensesCats, incomeCats } from "../../App/categories"
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import classes from './Analytics.module.css';


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

  componentDidUpdate(prevProps) {
    if (prevProps.expenseRecords !== this.props.expenseRecords) {
      this.setState({
        expenseRecs: this.filtrate(this.props.expenseRecords, 0),
        incomeRecs: this.filtrate(this.props.incomeRecords, 1)
      })
    }
  }

  render() {

    let id = 1;

    return (
      <Fragment>
        <div className={classes.mainWrapper}>

          <div className={classes.header}>
            <Paper square={true}>
              <h3>Records sorted by categories and subcategories for period:</h3>
            </Paper>
          </div>

          <div className={classes.section}>
            {this.state.incomeRecs ? this.state.incomeRecs.map(cat => {
              return (
                <ExpansionPanel square={true} key={id++}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <h5 className={classes.leftSide}>{cat[0]}</h5>
                    <h5 className={classes.incomes}>{cat[2] !== 0 ? '+' : null}{cat[2]}</h5>
                  </ExpansionPanelSummary>
                  <Divider />
                  {cat[1].map(subCat => {
                    return (
                      <ExpansionPanelDetails key={id++}>
                        <h5 className={classes.leftSide}>{subCat[0]}</h5>
                        <h5 className={classes.incomes}>{subCat[1] !== 0 ? '+' : null}{subCat[1]}</h5>
                      </ExpansionPanelDetails>
                    )
                  })}
                </ExpansionPanel>
              )
            }) : null}
          </div>

          <div className={classes.section}>
            {this.state.expenseRecs ? this.state.expenseRecs.map(cat => {
              return (
                <ExpansionPanel square={true} key={id++}>
                  <ExpansionPanelSummary className={classes.header} expandIcon={<ExpandMoreIcon />}>
                    <h5 className={classes.leftSide}>{cat[0]}</h5>
                    <h5 className={classes.expenses}>{cat[2] !== 0 ? '-' : null}{cat[2]}</h5>
                  </ExpansionPanelSummary>
                  <Divider />
                  {cat[1].map(subCat => {
                    return (
                      <ExpansionPanelDetails key={id++}>
                        <h5 className={classes.leftSide}>{subCat[0]}</h5>
                        <h5 className={classes.expenses}>{subCat[1] !== 0 ? '-' : null}{subCat[1]}</h5>
                      </ExpansionPanelDetails>
                    )
                  })}
                </ExpansionPanel>
              )
            }) : null}
          </div>

        </div>

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