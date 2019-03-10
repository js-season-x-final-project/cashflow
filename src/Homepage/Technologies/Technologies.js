import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Technologies from '../../assets/images/Technologies/Logos.png';
import ReduxDiagram from '../../assets/images/Technologies/Redux.png';
import classes from './Technologies.module.css';


const technologies = () => {

  return (
    <div className={classes.wrapper}>

      <Paper className={classes.headerPaper}>
        <Typography className={classes.header} variant='h4' >TECHNOLOGIES USED IN THE PROJECT</Typography>
      </Paper>

      <Paper className={classes.paper}>
        <img className={classes.technologies} src={Technologies} alt='Technologies'/>
      </Paper>

      <Paper className={classes.paper}>
        <img className={classes.technologies} src={ReduxDiagram} alt='Technologies'/>
      </Paper>

    </div>
  )
}

export default technologies;