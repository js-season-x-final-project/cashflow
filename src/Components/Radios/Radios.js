import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { changeFilter } from '../../actions/analyticsActions'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00cf8d'
    },
  },
});

const styles = theme => ({
  root: {
    display: 'flex',
    height: 180,
  },
  radio: {
    height: '80%',
  }
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'subCategory',
    fsize: 12
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  componentDidUpdate() {
    this.props.changeFilter(this.state.value);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme} >
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              {this.props.options.map((option, i) =>
                <FormControlLabel key={i} value={option.value} control={<Radio color="primary" />} label={option.label} className={classes.radio} />
              )}
            </RadioGroup>
          </FormControl>
        </MuiThemeProvider>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (newFilter) => dispatch(changeFilter(newFilter))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(RadioButtonsGroup));