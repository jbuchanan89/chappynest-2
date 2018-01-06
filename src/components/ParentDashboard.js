import React from "react";
import Client from '../Client';
import AddTask from './AddTask';
import ParentDashboardChildren from './ParentDashboardChildren';
import Header from './Header';
var moment= require('moment');

class ParentDashboard extends React.Component{
		state = {
			chores:[],
			children:[],
			tasks:[],
			user: {},
	}

	constructor(props){
		super(props);
		this.setState({user:localStorage.getItem('user')})
		Client.getChildAccounts(data => {
			this.setState({children:data});
		});
		Client.parentDashboardGetTask(moment().format("MMDDYYYY"),data => {
		this.setState({tasks: data});
		});
		this.logout = this.logout.bind(this);

		Client.getChores(data => {
		this.setState({chores:data});
		});

		this.addTask = this.addTask.bind(this);
	}

	logout(e){
		e.preventDefault();
		let self = this;
		this.props.logout(function(){
			self.props.history.push('/');
		});
	}

	addTask(task){
		let tasks = this.state.tasks;
		tasks.push(task);
		this.setState({tasks:tasks});
	}

	render(){
		var Date= moment().format("L");
		var Day = moment().format('dddd'); 
		return (
		<div> 
			<div className="row">	
				<Header link1="Logout" link2="Account" />
			</div>

			<main className="row parentDashboard">
				<h1>Parent Dashboard</h1>
				<h2>{Day}, {Date}</h2>
					<div className="dashboardKids row">
					  <div className="kid">
								{
						    		Object
						    		.keys(this.state.children)
						    		.map(key => <ParentDashboardChildren key={key} children={this.state.children[key]} tasks={this.state.tasks} />)
						    	}

					  </div>
					</div>
			</main>

			<AddTask addTask={this.addTask} task={this.state.tasks} chores={this.state.chores} children={this.state.children}/>
			<footer>
			</footer>
		</div>
			);
	}
}


export default ParentDashboard;