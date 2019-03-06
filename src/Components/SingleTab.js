import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import { addRecord } from '../actions/recordsActions';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        width: 300,
    },
    amountControl: {
        margin: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'row',
        width: 300,
    },
    amount: {
        width: 210,
    },
    currency: {
        width: 70,
        marginLeft: 20,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

function today() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    today = `${year}-${month}-${day}`;
    // let today = new Date();
    // console.log(today.toLocaleDateString());
    return today;
}

class SingleTab extends Component {

    state = {
        id: Date.now(),
        type: this.props.type,
        category: this.props.cats[0].category,
        subCategory: this.props.cats[0].subcategories[0],
        amount: 0,
        currency: 'BGN',
        date:today(),
        note: '',
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = event => {
            this.setState({ [event.target.name]: event.target.value });
    };

    onAddRecord = () => {
        this.props.addRecord(this.state);
        this.props.handleClose();
    }

    render() {

        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">

                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="category-label-placeholder" ref={ref => { this.InputLabelRef = ref; }}>
                        Category
                    </InputLabel>
                    <Select
                        value={this.state.category}
                        onChange={this.handleChange}
                        input={<Input name="category" id="category-label-placeholder" />}
                        displayEmpty
                        name="category"
                        className={classes.selectEmpty}
                    >
                        {this.props.cats.map(cat =>
                            <MenuItem key={cat.category} value={cat.category}>{cat.category}</MenuItem>
                        )}
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="subCategory-label-placeholder">
                        Sub-Category
                    </InputLabel>
                    <Select
                        value={this.state.subCategory}
                        onChange={this.handleChange}
                        input={<Input name="age" id="subCategory-label-placeholder" />}
                        displayEmpty
                        name="subCategory"
                        className={classes.selectEmpty}
                    >
                        {this.props.cats.find(cat => cat.category === this.state.category).subcategories.map(subCat =>
                            <MenuItem key={subCat} value={subCat}>{subCat}</MenuItem>
                        )}
                    </Select>
                </FormControl>

                <FormControl className={classes.amountControl}>
                    <InputLabel shrink htmlFor="amount-label-placeholder">
                        Amount
                    </InputLabel>
                    <Input
                        className={classes.amount}
                        type="number"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                    <Select
                        value={this.state.currency}
                        onChange={this.handleChange}
                        input={<Input name="currency" id="currency-label-placeholder" />}
                        displayEmpty
                        name="currency"
                        className={classes.currency}
                    >
                        <MenuItem key='BGN' value='BGN'>BGN</MenuItem>
                        <MenuItem key='EUR' value='EUR'>EUR</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField
                        id="date"
                        label="Day"
                        type="date"
                        name="date"

                        onChange={this.handleChange}
                        defaultValue={this.state.date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="note-label-placeholder">
                        Note
                    </InputLabel>
                    <Input
                        id="Note"
                        label="Note"
                        name="note"
                        multiline
                        rows="4"
                        rowsMax="4"
                        defaultValue=""
                        value={this.state.note}
                        onChange={this.handleChange}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <DialogActions>
                        <Button onClick={this.onAddRecord} color="primary">
                            Add
                        </Button>
                        <Button onClick={this.props.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </FormControl>

            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRecord: record => dispatch(addRecord(record))
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SingleTab))