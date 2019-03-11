import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classes from './Team.module.css';
import Alex from '../../assets/images/alex.jpg'
import Simeon from '../../assets/images/simeon.jpg'

const team = props => {

  return (
    <div className={classes.wrapper}>

      <div className={classes.firstPart}>
        <div className={classes.firstPartInner}>
          <h1>Meet our awesome team</h1>
          <p>Met in the beggining of October. We have made one other project together - EMAG Clone website. As students in two different parts of the building processes, we have met our expectations for each other. In the past two weeks we worked together as a team. We have succefully separated the taskas between us. </p>
        </div>
      </div>

      <div className={classes.secondPart}>
        <div className={classes.secondPartInner}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={Alex} title='Alexander Zlatev' />
            <CardContent>
              <Typography variant='h5'>Alexander Zlatev</Typography>
              <Typography>
                <ul>
                  <li> Graduated from University of Architecture, Civil Engineering and Geodesy in 2015 with master degree in Architecture.</li>
                  <li>No previous expirience with JavaScript, HTML or CSS.</li>
                  <li>Some other info....</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={Simeon} title='Alexander Zlatev' />
            <CardContent>
              <Typography variant='h5'>Simeon Grancharov</Typography>
              <Typography>
                <ul>
                  <li> Studies master degree of Geodesy in University of Architecture, Civil Engineering and Geodesy, Sofia, Bulgaria.</li>
                  <li> Graduating this year.</li>
                  <li>Without expirience in WEB Technologies before this course.</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default team