import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateDialog from './Components/CreateDialog';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/AccountBalanceWallet';
import ListIcon from '@material-ui/icons/List';
import ChartIcon from '@material-ui/icons/BarChart';
import NoteIcon from '@material-ui/icons/Note';
import LogoutIcon from '@material-ui/icons/ExitToApp'
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { logout } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
  mainBar: {
    backgroundColor: 'white',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
  },
  toolBar: {
    width: '100%'
  },
  hiddenMenu: {
    display: 'none',
  },
  mainButtons: {
    display: 'block',
  },
  menuButton: {
    margin: '0px 5px',
    color: '#00cf8d'
  },
  tooltip: {
    fontSize: 12,
    color: '#00cf8d',
    backgroundColor: 'white'
  },
  leftSide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  authEmail: {
    color: '#00cf8d'
  },
  '@media (max-width: 620px)': {
    hiddenMenu: {
      display: 'block'
    },
    mainButtons: {
      display: 'none'
    },
    authEmail: {
      display: 'none'
    }
  }
}

class Header extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <AppBar position="static" color="default" className={classes.mainBar}>
        <Toolbar className={classes.toolBar}>

          <div className={classes.leftSide}>

            <CreateDialog />

            <div className={classes.hiddenMenu}>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MenuIcon className={classes.menuButton} />
                <span className={classes.menuButton}>Menu</span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => {this.handleClose();this.props.history.push('/main/dashboard')}}>Dashboard</MenuItem>
                <MenuItem onClick={() => {this.handleClose();this.props.history.push('/main/records')}}>Records</MenuItem>
                <MenuItem onClick={() => {this.handleClose();this.props.history.push('/main/analytics')}}>Analytics</MenuItem>
                <MenuItem onClick={() => {this.handleClose();this.props.history.push('/main/blog')}}>Blog</MenuItem>
              </Menu>
            </div>

              <div className={classes.mainButtons}>
              <Tooltip title="Dashboard" classes={{ tooltip: classes.tooltip }}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Dashboard" component={Link} to="/main/dashboard">
                  <DashboardIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Records" classes={{ tooltip: classes.tooltip }}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="List" component={Link} to="/main/records">
                  <ListIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Analytics" classes={{ tooltip: classes.tooltip }}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Chart" component={Link} to="/main/analytics">
                  <ChartIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Blog" classes={{ tooltip: classes.tooltip }}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Blog" component={Link} to="/main/blog">
                  <NoteIcon />
                </IconButton>
              </Tooltip>

            </div>
          </div>

          <div className={classes.rightSide}>
            <h4 className={classes.authEmail}>{this.props.auth.email}</h4>
            <Tooltip title={'Logout: ' + this.props.auth.email} classes={{ tooltip: classes.tooltip }}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Logout" onClick={this.props.logout} >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </div>
          
        </Toolbar>
      </AppBar>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Header)))