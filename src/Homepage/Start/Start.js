import React, { Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import addAcc from '../../assets/images/Homepage/img-add-acc.png';
import addRec from '../../assets/images/Homepage/img-records.png';
import addCat from '../../assets/images/Homepage/img-categories.png';
import Balloon from './Components/Balloon';
import Typography from '@material-ui/core/Typography';
import classes from './Start.module.css'

const start = props => {

  return (
    <Fragment>
      <div className={classes.wrapper}>

        <div className={classes.firstPart}>
          <div className={classes.firstPartInside}>
            <div className={classes.leftSide}>
              <h1>How to Start Managing Your Finance With <span className={classes.logo}>CASHFLOW</span>?</h1>
            </div>
            <div className={classes.rightSide}>
              <h3>Managing your personal finance is like taking care of your health.</h3>
              <h3>Both are essential to lead and enjoy the richness of your life.</h3>
              <h3>We would love to see our Wallet helping you in this regard.</h3>
            </div>
          </div>
        </div>

        <div className={classes.secondPart}>
          <div className={classes.secondPartInside}> 
            <h2>Three Simple Steps to Get First Insight</h2>
            <div className={classes.balloons}>
              <Balloon imgUrl={addAcc} alt='Add Account' title='Step 1' text='Add Accounts you want to see in one place' />
              <p className={classes.step}>></p>
              <Balloon imgUrl={addRec} alt='Add Record' title='Step 2' text='Upload transaction history' />          
              <p className={classes.step}>></p>
              <Balloon imgUrl={addCat} alt='Add Category' title='Step 3' text='Learn and adjust system of records categorization' />          
            </div>
            <div className={classes.root}>
              <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary>
                  <h4 className={classes.heading}>Show more details</h4>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.stepInfo}>
                    <h5>1</h5>
                    <Typography className={classes.paragraph}>
                      Start by deciding which accounts you want to have in Wallet so that you can fully control your finances.
                    </Typography>
                    <Typography className={classes.paragraph}>
                      Wallet supports current accounts, savings, credit cards, loans, but also your pocket money (cash)
                    </Typography>
                    <Typography className={classes.paragraph}>
                      Wallet main screen has a primary tab called Accounts, where you simply add all accounts you need.
                    </Typography>
                    <Typography className={classes.paragraph}>
                      For each account you can connect to your bank for synchonization, or import files, or enter records manually
                    </Typography>
                  </div>
                  <div className={classes.stepInfo}>
                    <h5>2</h5>
                    <Typography className={classes.paragraph}>
                      Start by deciding which accounts you want to have in Wallet so that you can fully control your finances.
                    </Typography>
                    <Typography className={classes.paragraph}>
                      Wallet supports current accounts, savings, credit cards, loans, but also your pocket money (cash)
                    </Typography>
                    <Typography className={classes.paragraph}>
                      Wallet main screen has a primary tab called Accounts, where you simply add all accounts you need.
                    </Typography>
                    <Typography className={classes.paragraph}>
                      For each account you can connect to your bank for synchonization, or import files, or enter records manually
                    </Typography>
                  </div>
                  <div className={classes.stepInfo}>
                    <h5>3</h5>
                    <Typography className={classes.paragraph}>
                      Start by deciding which accounts you want to have in Wallet so that you can fully control your finances.
                    </Typography>
                    <Typography className={classes.paragraph}>
                      Wallet supports current accounts, savings, credit cards, loans, but also your pocket money (cash)
                    </Typography>
                    <Typography className={classes.paragraph}>
                      Wallet main screen has a primary tab called Accounts, where you simply add all accounts you need.
                    </Typography>
                    <Typography className={classes.paragraph}>
                      For each account you can connect to your bank for synchonization, or import files, or enter records manually
                    </Typography>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default start;