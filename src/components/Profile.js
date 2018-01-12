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
		});
		// Client.addAccount()
	}

	render(){
		return(
			<div>
				<div className="row sectionOne">	
					<Header link1="logout" link1Name="Logout" link2="parentdashboard" link2Name="Dashboard"/>
				</div>

				{
					(this.state.users.length === 0)
				
					? 	<div>

							<div className="account-message">
								<p>Let's get started by setting up your Account!</p>
								<p>Create some Household Chores that you always assign to your kids</p>
								<p>Then create your child accounts. You can assign a username and a password for them. </p>
								<p> Once you add your childrens accounts you will be able to see all the chores for your household and the accounts listed</p>
							</div>
							<div id="addChores"className="row addChoreInput assignTask">
								<AddChore addChore={this.addChore} />
							</div>

							<div id="addUser"className="addUser">
								 <AddUser addUser={this.addUser} />
							</div>
						</div>

					: 	<div className="row section">
							<h1 className="profileHeader">Account Settings</h1>
							<ul className="nav">
								<a href="#addChores"><input type="submit" className="create" value="Create Household Chore"/></a>
								<a href="#addUser"><input type="submit" className="create" value="Create Child Account"/></a>
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


							<div className="householdChores">
								<h2>Household Chores</h2>

								<table>
									<tbody>
										<tr>
											<th>Chore</th>
											<th>Points</th>
										</tr>
								    	{
								    		Object
								    		.keys(this.state.chores)
								    		.map(key => <Chore key={key} details={this.state.chores[key]} />)
								    	}
							    	</tbody>
								</table>
							</div>
							<div id="addChores"className="row addChoreInput assignTask">
								<AddChore addChore={this.addChore} />
							</div>

							<div id="addUser"className="addUser">
								 <AddUser addUser={this.addUser} />
							</div>
						</div>	
				}
	</div>
			)
	}
}


export default Profile; 