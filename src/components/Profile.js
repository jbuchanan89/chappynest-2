import React from 'react';
import Client from '../Client';
import Chore from './Chore';
import AddChore from './AddChore';
import ChildAccounts from './ChildAccounts';
import AddUser from './AddUser';
import Header from './Header';

class Profile extends React.Component{
		state = {
		chores:[],
		users:[],
	}

	constructor(props){
		super(props);
		Client.getChores(data => {
			this.setState({chores:data});
		});

		this.addChore = this.addChore.bind(this);

		Client.getChildAccounts(data => {
			this.setState({users:data});
		});
		
		this.addUser = this.addUser.bind(this);
	}

	addChore(chore){
		let chores = this.state.chores;
		chores.push(chore);
		this.setState({chores:chores});
	}

	addUser(user){
		let users = this.state.users;
		users.push(user);
		this.setState({users:users});
		Client.addAccount(user, user => {
			//
			console.log(user);
		});
		// Client.addAccount()
	}

	render(){
		return(
			<div>
				<div className="row sectionOne">	
					<Header link1="Logout" link2="ParentDashboard" />
				</div>

			<div className="row section">
				<h1 class="profileHeader">Account Settings</h1>
					<ul className="nav">
						<a href="#addChores"><li>Create Household Chore</li></a>
						<a href="#addUser"><li>Create Child Account</li></a>

					</ul>
				<div className="myKids">
					<h2>My Kids</h2>
						<div className="kid row">
							{
					    		Object
					    		.keys(this.state.users)
					    		.map(key => <ChildAccounts key={key} details={this.state.users[key]} />)
					    	}
						</div>

						
				</div>
			</div>
				

				<div className="householdChores">
					<h2>Household Chores</h2>

					<table>
						<tr>
							<th>Chore</th>
							<th>Points</th>
						</tr>
				    	{
				    		Object
				    		.keys(this.state.chores)
				    		.map(key => <Chore key={key} details={this.state.chores[key]} />)
				    	}
					</table>
				</div>
				    
			<div id="addChores"className="row addChoreInput assignTask">
				<AddChore addChore={this.addChore} />
			</div>

			<div id="addUser"className="addUser">
				 <AddUser addUser={this.addUser} />
			</div>

	</div>
			)
	}
}


export default Profile; 