import React from 'react';
import NotFound from '../assets/gif/404/NotFound.gif';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const notFound = () => (
  <div className={classes.mainWrapper}>
    <h1 className={classes.fourOFour}>404</h1>
    <h2 className={classes.text}>Nothing to do here...</h2>
    <Button size='large' color='inherit' className={classes.button} component={Link} to="/main/dashboard">GO BACK</Button>
    <img className={classes.travolta} src={NotFound} alt='Where am I?' />
  </div>
)

export default notFound;