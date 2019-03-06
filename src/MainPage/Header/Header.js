import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CreateDialog from './Components/CreateDialog';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/AccountBalanceWallet';
import ListIcon from '@material-ui/icons/List';
import ChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import NoteIcon from '@material-ui/icons/Note';
import LogoutIcon from '@material-ui/icons/ExitToApp'
import Tooltip from '@material-ui/core/Tooltip';
import { logout } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = {
    mainBar: {
        backgroundColor: 'white'
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
    },
}

const header = props => {

    const { classes } = props;

    return (
        <AppBar position="static" color="default" className={classes.mainBar}>
            <Toolbar>

                <div className={classes.leftSide}>
                    <CreateDialog />

                    <Tooltip title="Dashboard" classes={{ tooltip: classes.tooltip}}>
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

                    <Tooltip title="Settings" classes={{ tooltip: classes.tooltip }}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Settings" component={Link} to="/main/settings">
                            <SettingsIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                
                <Tooltip title="Logout" classes={{ tooltip: classes.tooltip }}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Logout" onClick={props.logout} >
                        <LogoutIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

// export default connect(mapStateToProps, { logout })(withStyles(styles)(header));
export default connect(null, mapDispatchToProps)(withStyles(styles)(header))