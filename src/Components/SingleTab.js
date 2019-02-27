import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SingleTab extends Component {

    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="category-label-placeholder" ref={ref => { this.InputLabelRef = ref; }}>
                        Category
                    </InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        input={<Input name="age" id="category-label-placeholder" />}
                        displayEmpty
                        name="age"
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </form>
        )
    }
}

export default withStyles(styles)(SingleTab)