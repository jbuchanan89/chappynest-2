import React from "react";
import Client from '../Client';
import Header from './Header';

class NewHomePage extends React.Component{
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
		//let users = this.state.users;
		//users.push(user);
		//this.setState({users:users});
		Client.addAccount(user, user => {
			//console.log(user);
			let self = this;
			this.props.loginUser(user,function(){
				// self.props.history.push('/');
				self.props.history.push('/'+user.type+'dashboard');
			});
		});
	}

	handleLogin(event) {
		event.preventDefault();
		let user = {
			username: this.usernameInput.value,
			password: this.passwordInput.value
		};
		Client.login(user, user => {
			if(user.hasOwnProperty('message')){
				alert(user.message);
			} else {
				//user is correct, store in App State.
				let self = this;
				this.props.loginUser(user,function(){
					// self.props.history.push('/');
					self.props.history.push('/'+user.type+'dashboard');
				});
			}
		});
	}

	render(){
		return (
			<div> 
				<div className="header">
				   <h1>Chappy Nest </h1>

				 	<div className="header1">
				    <p>Organize Your Household with us!</p>
				  	</div>
				  
				  	<div className="header2">
				    	<img src={require("../Images/house.svg")}/>
					</div>
				</div>
				  
				<main>
				    <section className="section1">
				      	<h3>How Does It Work?</h3>
				      
				      	<div className="info">
				        	<h4>For Parents:</h4>
				          		<ul>
						            <li>Add Children Accounts</li>
						            <li>Add Household Chores</li>
						            <li>Assign points for each chore completed</li>
						            <li>Assign Daily Task for each child</li>
				        		</ul>
				      	</div>
				      
				       <div className="info">
				         	<h4>For Kids:</h4>
				           		<ul>
				            		<li>See task for the day</li>
				            		<li>Let your parents know when task are completed</li>
				             		<li>Earn points by the day!</li>
				          		</ul>
				      	</div>
				      
				    </section>
				    
				    <section className="section2">
				      		<h2><i className="fa fa-sign-in" aria-hidden="true"></i> Sign Up</h2>
								<form id="AddUser" onSubmit={this.handleSubmit.bind(this)}>
									<input type="text" ref={(input) => { this.nameInput =input}} placeholder="name"/>
								 	<input type="text" ref={(input) => { this.usernameInput =input}} placeholder="username"/>
								 	<input type="password" ref={(input) => { this.passwordInput = input}} placeholder="password"/>
									<button className="submit-form" type="submit" value="Add User">Sign Up!</button>
								</form>

				      			<p>Already have an account? <a href="/login">Login</a></p>
				      </section>

				      <section className="section2">
				      		<h2><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</h2>
								<form id="Login" onSubmit={this.handleLogin.bind(this)}>
        							<input ref={(input) => { this.usernameInput =input}} placeholder="Username" type="text" name="username1" className="username" required />
        							<input ref={(input) => { this.passwordInput =input}} placeholder="Password" type="password" className="password1" name="password" required/>
        							<button id="login" className="btn" type="submit" >Sign In</button>
								</form>

				      			<p>Dont have an account? <a href="#Login">Login</a></p>
				    </section>
				    
				</main>
			</div>
			);
	}
}


export default NewHomePage;