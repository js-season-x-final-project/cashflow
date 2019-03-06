import React, { Fragment } from 'react';
import classes from './Start.module.css'

const start = props => {

  return (
    <Fragment>
      <div className={classes.wrapper}>

        <div className={classes.firstPart}>
          <div className={classes.leftSide}>
            <h1>How to Start Managing Your Finance With <span className={classes.logo}>CASHFLOW</span>?</h1>
          </div>
          <div className={classes.rightSide}>
            <h3>Managing your personal finance is like taking care of your health.</h3>
            <h3>Both are essential to lead and enjoy the richness of your life.</h3>
            <h3>We would love to see our Wallet helping you in this regard.</h3>
          </div>
        </div>

        <div className={classes.secondPart}>
          <h2>Three Simple Steps to Get First Insight</h2>
        </div>

      </div>
    </Fragment>
  )
}

export default start