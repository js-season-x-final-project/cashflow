import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { articles } from './blogArticles';
import './Blog.css';

const styles = {
  card: {
    width: 400,
    margin: 20,
  },
  media: {
    height: 300,
  },
  area: {
    height: '100%'
  }
}

const blog = props => {

  const { classes } = props;

  return (
    <div className='blogWrapper'>

      {articles.map(article => {
        return (
          <Card className={classes.card} key={article.id}>
            <CardActionArea className={classes.area} component={Link} to={"/main/blog/"+article.id}>
              <CardMedia
                className={classes.media}
                image={article.img}
                title={article.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.title}
                </Typography>
                <Typography component="p">
                  {article.subTitle}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </div>
  )
}

export default withStyles(styles)(blog);