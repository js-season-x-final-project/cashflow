import { DatePicker } from 'antd';
import React from 'react'
import "antd/dist/antd.css"
import {connect} from 'react-redux'
import {changePeriod} from '../../actions/analyticsActions'


const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class PickerDate extends React.Component {

    onChange= (date, dateString)=> {
        const startDate = new Date(dateString[0]).getTime();
		let currentEnd =new Date(dateString[1]).getDate();
        let endDate = new Date(dateString[1]).setDate(currentEnd+1);
        console.log(new Date(date[0]), new Date(endDate));
		this.props.changePeriod(startDate, endDate)
        console.log(date, dateString);
    }

    render() {
        return (
            <div>
                <DatePicker onChange={this.onChange} />
                <br />
                <MonthPicker onChange={this.onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={this.onChange} />
                <br />
                <WeekPicker onChange={this.onChange} placeholder="Select week" />
            </div>
        )
    }
};
const mapDispatchToProps = dispatch =>{
	return{
		changePeriod: (startDate,endDate) => dispatch(changePeriod(startDate,endDate))
	}
}
export default connect(null,mapDispatchToProps)(PickerDate)