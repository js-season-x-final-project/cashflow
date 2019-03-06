import React, { Fragment } from 'react';
import Badge from './Components/Badge';
import budgets from '../../assets/images/Homepage/budgets.png';
import finance from '../../assets/images/Homepage/finance.png';
import pieChart from '../../assets/images/Homepage/pie-chart.png';
import classes from './Home.module.css'

const home = props => {

  return (
    <Fragment>
      <div className={classes.wrapper}>

        <div className={classes.firstPart}>
          <div className={classes.firstPartInner}>
            <h1 className={classes.logo}>CASHFLOW</h1>
            <h2>Your Finances in One Place</h2>
          </div>
        </div>

        <div className={classes.secondPart}>
          <h1>What can you do with Cashflow?</h1>
          <div className={classes.badges}>
            <Badge imgUrl={budgets} alt='budgets' title='Get the big picture' text='Bring all your accounts to one place. See your spending in real-time' />
            <Badge imgUrl={finance} alt='budgets' title='Know how you spend' text='Spot spending habits. Learn to spend on things you really want.' />
            <Badge imgUrl={pieChart} alt='budgets' title='Save to achieve goals' text='Create budgets that work for you. Fund your dreams by saving right.' />
          </div>
        </div>
        
      </div>
    </Fragment>
  )
}

export default home