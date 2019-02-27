import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateDialog from '../../Components/CreateDialog';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/AccountBalanceWallet';
import ListIcon from '@material-ui/icons/List';
import ChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import NoteIcon from '@material-ui/icons/Note';
import LogoutIcon from '@material-ui/icons/ExitToApp'
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    mainBar: {
        backgroundColor: 'white'
    },
    menuButton: {
        margin: '0px 5px',
        color: '#00aa70'
    }
}

const header = props => {

    const { classes } = props;

    return (
        <AppBar position="static" color="default" className={classes.mainBar}>
            <Toolbar>

                <CreateDialog />

                <Tooltip title="Dashboard">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Dashboard" component={Link} to="/dashboard">
                        <DashboardIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Records">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="List" component={Link} to="/records">
                        <ListIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Analytics">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Chart" component={Link} to="/analytics">
                        <ChartIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Blog">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Blog" component={Link} to="/blog">
                        <NoteIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Settings">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Settings" component={Link} to="/settings">
                        <SettingsIcon />
                    </IconButton>
                </Tooltip>
                
                <Tooltip title="Logout">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Logout">
                        <LogoutIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(header);