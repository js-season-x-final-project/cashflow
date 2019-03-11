import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    paddingBottom: 0,
  },
}

class NestedList extends React.Component {
  state = {
    all: false,
    category0: false,
    category1: false,
    category2: false,
    category3: false,
    category4: false,
  };

  tabCloser =() =>{
    let newState ={};
    this.props.categories.forEach((e,i) => {
      newState["category"+i] = false
    });
    return newState
  }

  handleListItemClick = (event, category, value) => {
    if (category !== 0) {
      this.setState({
        ...this.tabCloser(),
        [category]: !this.state[category]
      })
      this.props.onFilter(0, value);
      return;
    }
    this.props.onFilter(value);
  }

  id = 1;

  render() {

    const { classes } = this.props;

    return (
      <List
        component="nav"
        className={classes.root}
      >
        <ListItem
          button
          onClick={(event) => { this.handleListItemClick(event, 'all', "All") }}
        >
          <ListItemText inset primary="All categories" />
        </ListItem>
        <Divider />
        <Collapse in={this.state["all"]} timeout={3000} unmountOnExit key={this.id++}>
          {this.props.categories.map((cat, index) => {
            return (
              <Fragment key={this.id++}>
                <Divider />
                <ListItem
                  button
                  onClick={(event) => { this.handleListItemClick(event, "category" + index, cat.category) }}
                  className={classes.nestedItem}
                >
                  <ListItemText inset primary={cat.category} />
                  {this.state["category" + index] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                {cat.subcategories.map(subcat => {  
                  return (
                    <Collapse in={this.state["category" + index]} timeout={3000} unmountOnExit key={this.id++}>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={(event) => this.handleListItemClick(event, 0, subcat)}>
                          <ListItemText className={classes.nestedLabel} inset primary={subcat} />
                        </ListItem>
                      </List>
                    </Collapse>
                  )
                })
                }
              </Fragment>
            )
          })}
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NestedList);