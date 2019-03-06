import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SingleTab from './SingleTab';
import { expensesCats, incomeCats } from '../../App/categories';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class DialogTabs extends Component {

  state = {
    value: this.props.type === 'income' ? 1 : 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    return (
      <div>
        <AppBar position="static">
          <Tabs variant="fullWidth" value={this.state.value} onChange={this.handleChange}>
            <Tab label="Expenses" />
            <Tab label="Income" />
          </Tabs>
        </AppBar>
        {this.state.value === 0 && <TabContainer>
            <SingleTab 
              cats={expensesCats} 
              type={'expense'} 
              handleClose={this.props.handleClose} 
              record={this.props.type === 'expense' ? this.props.record : null} 
              uid={this.props.uid} 
            />
          </TabContainer>}
        {this.state.value === 1 && <TabContainer>
            <SingleTab 
              cats={incomeCats} 
              type={'income'} 
              handleClose={this.props.handleClose} 
              record={this.props.type === 'income' ? this.props.record : null} 
              uid={this.props.uid} 
            />
          </TabContainer>}
      </div>
    )
  }
}


export default DialogTabs;