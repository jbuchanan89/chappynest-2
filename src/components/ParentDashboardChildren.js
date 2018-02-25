import React from 'react';

class  ParentDashboardChildren extends React.Component{
	render(){

		let taskContent = this.props.tasks.map(function(task){
			if(task.child_id === this.props.children._id){
				return <li className={"completed-"+task.completed}>{task.name} - ({task.pointValue})</li>;
			} else {
				return ""
			}
		},this);

		let pointValueContent = 0;

		for (var i = 0; i < this.props.tasks.length; i++) {
			if(this.props.tasks[i].child_id === this.props.children._id){
				if(this.props.tasks[i].completed){
					pointValueContent += this.props.tasks[i].pointValue;
				} else {
					pointValueContent += 0;
				}
			}
		}

		return(
		<div className="kidBox col-5">
			<div className="row">
					<img src="https://image.flaticon.com/icons/svg/163/163801.svg" alt="avatar"/>
					<p className="childName">{this.props.children.name}</p>
	    	</div>	

    		<p className="childUsername"><span className="label">Username:</span> {this.props.children.username} </p>
	    	
	    	<div className="row">
	    		<ul className="task-content">{taskContent}</ul>
	    	</div>

    		<div className="row point-box">
				<p className="points">Points: <span className="value">{pointValueContent}</span></p>
			</div>
		</div>	
			)
	}
}

export default ParentDashboardChildren;