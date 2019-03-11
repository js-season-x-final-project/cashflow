import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classes from './Team.module.css';
import Alex from '../../assets/images/alex.jpg'
import Simeon from '../../assets/images/simeon.jpg'

const team = () => {

  return (
    <div className={classes.wrapper}>

      <div className={classes.firstPart}>
        <div className={classes.firstPartInner}>
          <h1>Meet our awesome team</h1>
          <p>Being part of IT-Talents season X was so much fun for both of us, besides of all the things we've managed to learn. We are working together as a team since our intermediate project - EMAG Clone website. As students in two different parts of the building processes, we have met our expectations for each other. Our main goals for the projects were to learn as much as possible for all the newest and best technologies of our time and implement them in our code. For the past 2 weeks we worked very hard as a team to make this product so we hope you enjoy it! </p>
        </div>
      </div>

      <div className={classes.secondPart}>
        <div className={classes.secondPartInner}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={Alex} title='Alexander Zlatev' />
            <CardContent>
              <Typography variant='h5' className={classes.name} >Alexander Zlatev</Typography>
              <div className={classes.info}>
                <ul>
                  <li>Technology enthusiast</li>
                  <li>Graduated as an Architect, but only of buildings for now</li>
                  <li>No coding experience background</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={Simeon} title='Alexander Zlatev' />
            <CardContent>
              <Typography variant='h5' className={classes.name} >Simeon Grancharov</Typography>
              <div className={classes.info}>
                <ul>
                  <li>Studies master degree of Geodesy in University of Architecture, Civil Engineering and Geodesy, Sofia, Bulgaria.</li>
                  <li>Graduating this year.</li>
                  <li>Without experience in WEB Technologies before this course.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default team