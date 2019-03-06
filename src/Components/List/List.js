import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {connect} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { expensesCats } from '../../App/categories';
import {changeFilter} from '../../actions/analyticsActions'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    open: false,
    value: null,
  };

  handleClick = (event) => {
    this.setState(state => ({ open: !state.open }));
  };


  handleListItemClick(event, val){
    this.setState({open:!this.state.open,value:val})
  }
  componentDidUpdate(){
    this.props.changeFilter(this.state.value);
    console.log(this.state);

  }
  id=1;

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        className={classes.root}
      >
        {expensesCats.map(cat => {
          return (
            <Fragment key={this.id++}>
              <ListItem button onClick={(event)=>{this.handleListItemClick(event,'category')}} >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> 
                <ListItemText inset primary={cat.category} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {cat.subcategories.map(subcat=>{
                return(
                <Collapse in={this.state.open} timeout="auto" unmountOnExit key={this.id++}>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested} onClick={(event)=>this.handleListItemClick(event,'subCategory')}   >
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText inset primary={subcat}  />
                    </ListItem>
                  </List>
                </Collapse>
                )
              })
              }
            </Fragment>
          )
        })}
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch =>{
  return{
    changeFilter: (newFilter)=>dispatch(changeFilter(newFilter))
  }
}

export default connect(null,mapDispatchToProps)(withStyles(styles)(NestedList));