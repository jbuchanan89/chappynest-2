import React from "react";
import Client from '../Client';
var moment = require('moment');

class AddTask extends React.Component{
	
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let chore = this.choreInput.value.split("|");
		let dailyTask = {
			name	: chore[1],
			completed: 'false',
			pointValue: chore[2],
			day: this.dateInput.value,
			child_id: this.childInput.value,
			chore_id: chore[0],
		};		

		Client.addTask(dailyTask, dailyTask => {
			alert('Daily Task Added');
			this.props.addTask(dailyTask);
			document.getElementById("AssignTask").reset();
		});
	}

	render(){
		const Child= this.props.children
		.map((user) => 
			<option value={user._id}>{user.name}</option>);

		const Chore= this.props.chores
		.map((chore) =>
			<option value={chore._id+"|"+chore.name+"|"+chore.pointValue} data-name={chore.name} data-points={chore.pointValue}>{chore.name} - {chore.pointValue}</option>);

		var day1 = moment().format("L");
		var day2 = moment().add(1, 'days').format('L');
		var day3 = moment().add(2, 'days').format('L');
		var day4 = moment().add(3, 'days').format('L');
		var day5 = moment().add(4, 'days').format('L');
		var day6 = moment().add(5, 'days').format('L');
		var day7 = moment().add(6, 'days').format('L');
		
		var dayOfWeek = [day1, day2, day3, day4, day5, day6, day7];
		console.log(dayOfWeek);
		return (
		<div>
			<div> 
				<div className="assignTask">
					<h1>Assign Task</h1>

					<form id="AssignTask" onSubmit={this.handleSubmit.bind(this)}>
						<select ref={(input) => { this.childInput =input}}>
							<option selected="selected">
							 Select Child
							</option>
							{Child}
						</select>
						<select ref={(input) => { this.choreInput =input}}>
							<option selected="selected">
							 Select Task
							</option>
							{Chore}
						</select>
						<select ref={(input) => { this.dateInput =input}}>
						  	<option selected="selected">
							 Select Date
							</option>

						  	{dayOfWeek.map((day) => (
						  	<option value={day}>
						  	{day}
						  	</option>
						  	))}
						</select>
						<input className="submit-form" type="submit" value="Add Task"/>
					</form>

					<p></p>
				</div>
			</div>
		</div>
			);
	}
}



export default AddTask;