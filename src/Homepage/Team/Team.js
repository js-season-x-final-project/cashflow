import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classes from './Team.module.css';
import Alex from '../../assets/images/alex.jpg'

const team = props => {

  return (
    <div className={classes.wrapper}>

      <div className={classes.firstPart}>
        <div className={classes.firstPartInner}>
          <h1>Meet our awesome team</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC</p>
        </div>
      </div>

      <div className={classes.secondPart}>
        <div className={classes.secondPartInner}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={Alex} title='Alexander Zlatev' />
            <CardContent>
              <Typography variant='h5'>Alexander Zlatev</Typography>
              <Typography>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia className={classes.media} title='Alexander Zlatev' />
            <CardContent>
              <Typography variant='h5'>Simeon Gryncharov</Typography>
              <Typography>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default team