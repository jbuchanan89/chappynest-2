import React from "react";
import Client from '../Client';
import DailyList from './dailyList';
import Header from './Header';
var moment= require('moment');

class ChildDashboard extends React.Component{
	state = {
		dailyTask:[],
	}

	constructor(props){
		super(props);
		Client.getDailyTask(moment().format("MM-DD-YYYY"),data => {
			this.setState({dailyTask:data});
		});

	this.updateTask = this.updateTask.bind(this);
	}

	logout(e){
		e.preventDefault();
		let self = this;
		this.props.logout(function(){
		self.props.history.push('/');
		});
	}

	updateTask(task){
		Client.markTaskCompleted(task.id,!task.completed, task => {
			let dt = this.state.dailyTask;
			dt.forEach(function(dailyTask,index){
				if(task._id === dailyTask._id){
					dt[index].completed = !task.completed;
				}
			});
			this.setState({dailyTask: dt});
		});
	}



	render(){
		var Date= moment().format("L");

		return (
		<div>
			<div className="row">	
		<Header link1="Logout" />
			</div>

			<main className="row childDashboard">
				<h1>Child Dashboard</h1>
				<h2>{Date}</h2>
				<div className="childChores">
					<h3>Chores Today</h3>
						<div className="dailyList">
	    					{
						    		Object
						    		.keys(this.state.dailyTask)
						    		.map(key => <DailyList key={key} task={this.state.dailyTask[key]} tasks={this.state.dailyTask} updateTask={this.updateTask}/>)
						   	}

						</div>
				</div>
			</main>

			<footer>
			</footer>
		</div>
		);
	}
}



export default ChildDashboard;