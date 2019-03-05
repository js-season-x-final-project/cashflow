import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './Header.css';

const styles = () => ({
  authButton: {
    height: 45,
    borderRadius: '25px',
    color: 'white',
    backgroundColor: '#00aa70',
    '&:hover': {
        backgroundColor: '#00aa70',
    },
  },
  button: {
    height: 90
  }
});

const header = props => {

  const { classes } = props;

  return (
    <div className='header'>
      <div className='inner'>
        <div className='leftSide'>
          <Button className={classes.button} component={Link} to="/">Home</Button>
          <Button className={classes.button} component={Link} to="/start">How to start</Button>
          <Button className={classes.button} component={Link} to="/team">Team</Button>
          <Button className={classes.button} component={Link} to="/support">Support</Button>
        </div>
        <Button variant="outlined" className={classes.authButton} component={Link} to="/auth" >Get In</Button>
      </div>
    </div> 
  )

}

export default withStyles(styles)(header);