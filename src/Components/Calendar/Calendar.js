import React, {Component} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';
import {connect} from 'react-redux'
import {changePeriod} from '../../actions/analyticsActions'
import './calendar.css'
// import DateRange from 'react-date-range/dist/components/DateRange';

class MyComponent extends Component {

	handleSelect =(ranges)=>{
		const startDate = ranges.selection.startDate.getTime();
		let currentEnd = ranges.selection.endDate.getDate();
		let endDate = ranges.selection.endDate.setDate(currentEnd+1);
		console.log(new Date(ranges.selection.startDate), new Date(endDate));
		this.props.changePeriod(startDate, endDate)
	}
	render(){
		const selectionRange = {
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		}
		return (
			<div>
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={this.handleSelect}
			/>
			</div>
		)
	}
}


const mapDispatchToProps = dispatch =>{
	return{
		changePeriod: (startDate,endDate) => dispatch(changePeriod(startDate,endDate))
	}
}
export default connect(null,mapDispatchToProps)(MyComponent)