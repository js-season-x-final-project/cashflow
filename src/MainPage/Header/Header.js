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
// import { logout } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import { connect } from 'react-redux';

const styles = {
    mainBar: {
        backgroundColor: 'white'
    },
    menuButton: {
        margin: '0px 5px',
        color: '#00aa70'
    },
    tooltip: {
        fontSize: 12,
        color: '#00aa70',
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
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Dashboard" component={Link} to="/dashboard">
                            <DashboardIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Records" classes={{ tooltip: classes.tooltip }}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="List" component={Link} to="/records">
                            <ListIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Analytics" classes={{ tooltip: classes.tooltip }}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Chart" component={Link} to="/analytics">
                            <ChartIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Blog" classes={{ tooltip: classes.tooltip }}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Blog" component={Link} to="/blog">
                            <NoteIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Settings" classes={{ tooltip: classes.tooltip }}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Settings" component={Link} to="/settings">
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

// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//     }
// }

// export default connect(mapStateToProps, { logout })(withStyles(styles)(header));
export default withStyles(styles)(header)