import React from 'react';
import DailyList from './dailyList';
import Client from '../Client';

class ChildAccounts extends React.Component{
	state = {
		dailyTask:[],
	}

	constructor(props){
		super(props);
		Client.getDailyTask(data => {
			this.setState({dailyTask:data});
		});
	}
	render(){
		return(
		<div className="profileKidBox col-5">
			<p className="childName">{this.props.details.name}</p>
			<img src="https://image.flaticon.com/icons/svg/163/163801.svg" alt=""/>
    		<p className="childUsername"><span className="label">Username:</span> {this.props.details.username} </p>

    		<div className="row edit">
    			<p className="edit-delete"><i className="fa fa-pencil" aria-hidden="true"></i></p>
    			<p className="edit-delete"><i className="fa fa-trash" aria-hidden="true"></i></p>
    		</div>

    		<div className="row choreList">
    			{
    				Object
					.keys(this.state.dailyTask)
					.map(key => <DailyList key={key} details={this.state.dailyTask[key]} />)
				}
    		</div>

    		<div className="points">
					<p>Points: </p>
			</div>
		</div>
			)
	}
}

export default ChildAccounts;
