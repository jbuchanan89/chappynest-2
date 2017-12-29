import React from 'react';

class AddUser extends React.Component{
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
			parent_id: localStorage.getItem('ChappyNest-userID'),
			type: 'child'
		};

		this.props.addUser(user);
		this.nameInput.value = "";
		this.usernameInput.value = "";
		this.passwordInput.value = "";
	}

	render(){
		return(
			<div>
					<h2> CREATE CHILD ACCOUNT</h2>

					<form onSubmit={this.handleSubmit.bind(this)}>
						<input className="addUserField" type="text" ref={(input) => { this.nameInput =input}} placeholder="name" required/>
					 	<input className="addUserField" type="text" ref={(input) => { this.usernameInput =input}} placeholder="username" required/>
					 	<input className="addUserField" type="password" ref={(input) => { this.passwordInput = input}} placeholder="password" required/>
						<input className="submit-form" type="submit" value="Add User"/>
					</form>
			</div>
			)
	}
}

export default AddUser;