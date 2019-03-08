import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {changeFilter} from '../../actions/analyticsActions'
import {connect} from 'react-redux'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'subCategory',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  componentDidUpdate(){
    this.props.changeFilter(this.state.value);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Sort By</FormLabel>
          <RadioGroup
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
          {this.props.options.map((option, i)=>
            <FormControlLabel key={i} value={option.value} control={<Radio />} label={option.label} />
          )}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch =>{
  return{
    changeFilter : (newFilter) => dispatch(changeFilter(newFilter))
  }
}

export default connect(null,mapDispatchToProps)(withStyles(styles)(RadioButtonsGroup));