import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import classes from './Header.module.css';

const styles = () => ({
  authButton: {
    height: 45,
    borderRadius: '25px',
    color: 'white',
    backgroundColor: '#00cf8d',
    '&:hover': {
      backgroundColor: '#00cf8d',
    },
  },
  button: {
    height: 90
  }
});


class Header extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log(this.state)
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { anchorEl } = this.state;

    return (
      <div className={classes.header}>
        <div className={classes.inner}>
          <div className={classes.hiddenMenu}>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={() => this.props.history.push('/home')}>Home</MenuItem>
              <MenuItem onClick={() => this.props.history.push('/home/start')}>Start</MenuItem>
              <MenuItem onClick={() => this.props.history.push('/home/team')}>Team</MenuItem>
              <MenuItem onClick={() => this.props.history.push('/home/support')}>Support</MenuItem>
            </Menu>
          </div>
          <div className={classes.leftSide}>
            <Button className={classes.button} component={Link} to="/home">Home</Button>
            <Button className={classes.button} component={Link} to="/home/start">How to start</Button>
            <Button className={classes.button} component={Link} to="/home/team">Team</Button>
            <Button className={classes.button} component={Link} to="/home/support">Support</Button>
          </div>
          <Button variant="outlined" className={classes.authButton} component={Link} to="/auth" >Get In</Button>
        </div>
      </div>
    )
  }

}

export default withRouter(withStyles(styles)(Header));