import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SingleTab from './SingleTab';
import { expensesCats, incomeCats } from '../App/categories';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

class DialogTabs extends Component {

    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { value } = this.state;

        return (
            <div>
                <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                    <Tab label="Expenses" />
                    <Tab label="Income" />
                </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><SingleTab cats={expensesCats} handleClose={this.props.handleClose}/></TabContainer>}
                {value === 1 && <TabContainer><SingleTab cats={incomeCats} handleClose={this.props.handleClose}/></TabContainer>}
            </div>
        )
    }
}

export default DialogTabs