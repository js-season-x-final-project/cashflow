import React, {Component} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {connect} from 'react-redux'
import {changePeriod} from '../../actions/analyticsActions'

class MyComponent extends Component {

	handleSelect =(ranges)=>{
		console.log(ranges);
		const startDate = ranges.selection.startDate.getTime();
		let currentEnd = ranges.selection.endDate.getDate();
		let endDate = ranges.selection.endDate.setDate(currentEnd+1);
		console.log(new Date(endDate));
		this.props.changePeriod(startDate, endDate)
	}
	render(){
		const selectionRange = {
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		}
		return (
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={this.handleSelect}
			/>
		)
	}
}


const mapDispatchToProps = dispatch =>{
	return{
		changePeriod: (startDate,endDate) => dispatch(changePeriod(startDate,endDate))
	}
}
export default connect(null,mapDispatchToProps)(MyComponent)