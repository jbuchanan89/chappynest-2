import React from 'react';

class DailyList extends React.Component{

	handleClick(e) {
		e.preventDefault();
		let task = {
			id: this.props.task._id,
			completed: this.props.task.completed
		};
		this.props.updateTask(task);
		console.log(this.props.task._id);
	}
	
	render(){
		return(
			<div>
				{
					(this.props.task.completed === false) 
					? 	<div>
							<i className={"fa fa-square-o check-box completed-"+this.props.task.completed}  aria-hidden="true" onClick={this.handleClick.bind(this)} ></i>
							<p className={"chore completed-"+this.props.task.completed}>{this.props.task.name}</p>
				 			<p className={"pointValue completed-"+this.props.task.completed}>{this.props.task.pointValue}</p>
						</div>
					: 	<div>
							<i className={"fa fa-check-square-o check-box completed-"+this.props.task.completed}  aria-hidden="true" onClick={this.handleClick.bind(this)} ></i>
							<p className={"chore completed-"+this.props.task.completed}>{this.props.task.name}</p>
			 				<p className={"pointValue completed-"+this.props.task.completed}>{this.props.task.pointValue}</p>
						</div>
				}
		 </div>
		);
	}
}

export default DailyList;