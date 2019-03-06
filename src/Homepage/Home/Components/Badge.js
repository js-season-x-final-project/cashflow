import React from 'react';
import classes from './Badge.module.css';

const badge = props => {

  return (
    <div className={classes.Badge}>
      <img src={props.imgUrl} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default badge;