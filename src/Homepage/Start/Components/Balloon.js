import React from 'react';
import classes from './Balloon.module.css';

const balloon = props => {

  return (
    <div className={classes.balloonWrapper}>
      <img src={props.imgUrl}  className={classes.balloon} alt={classes.alt} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default balloon;