import React, { Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
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

        <div className={classes.mainWrapper}>

          <div className={classes.section}>
            {this.state.expenseRecs ? this.state.expenseRecs.map(cat => {
              return (
                <ExpansionPanel>
                  <ExpansionPanelSummary className={classes.header} expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.leftSide}>{cat[0]}</Typography>
                    <Typography>{cat[2]}</Typography>
                  </ExpansionPanelSummary>
                  {cat[1].map(subCat => {
                    return (
                      <ExpansionPanelDetails>
                        <Typography className={classes.leftSide}>{subCat[0]}</Typography>
                        <Typography>{subCat[1]}</Typography>
                      </ExpansionPanelDetails>
                    )
                  })}
                </ExpansionPanel>
              )
            }) : null}
          </div>

          <div className={classes.section}>
            {this.state.incomeRecs ? this.state.incomeRecs.map(cat => {
              return (
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.leftSide}>{cat[0]}</Typography>
                    <Typography>{cat[2]}</Typography>
                  </ExpansionPanelSummary>
                  {cat[1].map(subCat => {
                    return (
                      <ExpansionPanelDetails>
                        <Typography className={classes.leftSide}>{subCat[0]}</Typography>
                        <Typography>{subCat[1]}</Typography>
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