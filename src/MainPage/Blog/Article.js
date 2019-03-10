import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { articles } from './blogArticles';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './Article.css';

const styles = {
  paper: {
    padding: '10px 10px 50px 10px',
  },
}

const article = props => {

  const id = +props.match.params.id;
  const article = articles.find(search => search.id === id);
  const { classes } = props

  return (
    <div className='articleWrapper'>

      <Paper className={classes.paper}>
        <Button component={Link} to='/main/blog/'>←Back</Button>
        <Typography className='articleTitle' variant='h4'>{article.title}</Typography>
        {article.tips.map(tip => {
          return (
            <div className='articleParagraph' key={tip.title}>
              <Typography variant='h6'>
                {tip.title}
              </Typography>
              <Typography variant='body1'>
                {tip.tip}
              </Typography>
            </div>
          )
        })}
      </Paper>
      
    </div>
  )
}

export default withStyles(styles)(article);