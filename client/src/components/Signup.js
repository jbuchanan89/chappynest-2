import React from 'react';
import Client from '../Client';

class Signup extends React.Component {
		state = {
		users:[]
	}
	
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let user = {
			name: this.nameInput.value,
			username	: this.usernameInput.value,
			password: this.passwordInput.value,
			type: 'parent'
		};

		this.addUser(user);
		this.nameInput.value = "";
		this.usernameInput.value = "";
		this.passwordInput.value = "";
	}

	addUser(user){
		let users = this.state.users;
		users.push(user);
		this.setState({users:users});
		Client.addAccount(user, user => {
			//
		});
	}	
	render(){
		return(
		<div>
			<header className="nav-bar">
				<ul>
					<li><a href="/login">Log In</a></li>
					<li> <a href="/">Home</a></li>
				</ul>
			</header>
			
			<div class="title">
				<h2>Chappy Nest</h2>
			</div>

			<div className="form">
				<h1>SIGN UP</h1>
				<form id="AddUser" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref={(input) => { this.nameInput =input}} placeholder="name"/>
				 	<input type="text" ref={(input) => { this.usernameInput =input}} placeholder="username"/>
				 	<input type="password" ref={(input) => { this.passwordInput = input}} placeholder="password"/>
					<button className="submit-form" type="submit" value="Add User">Sign Up!</button>
				</form>
				<p class="link">Already have an account? <span><a href="/login">Log In</a></span></p>
			</div>
		</div>
			)
	}
}

export default Signup;