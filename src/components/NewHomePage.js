import React from "react";
import Client from '../Client';

class NewHomePage extends React.Component{
		constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		document.getElementById("sign-up-load").classList.add('loader');
		let user = {
			name: 		this.nameInput.value,
			username: 	this.usernameInput.value,
			password: 	this.passwordInput.value,
			type: 		'parent'
		};

		this.addUser(user);
		this.nameInput.value = "";
		this.usernameInput.value = "";
		this.passwordInput.value = "";
	}

	addUser(user){
		Client.addAccount(user, user => {
			let self = this;
			this.props.loginUser(user,function(){
				self.props.history.push('/'+user.type+'dashboard');
			});
		});
	}

	handleLogin(event) {
		event.preventDefault();
		document.getElementById("login-load").classList.add('loader');
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

	handleLoginLink(event) {
		event.preventDefault();
		var loginDiv = document.getElementById("login");
		var signUpDiv = document.getElementById("sign-up");
		signUpDiv.style.display = "none";
		loginDiv.style.display = "block";
	}

	handleSignUpLink(event) {
		event.preventDefault();
		var signUpDiv = document.getElementById("sign-up");
		var loginDiv = document.getElementById("login");
		loginDiv.style.display = "none";
		signUpDiv.style.display = "block";		
	}

	render(){
		return (
			<div> 
				<div className="header">
				   <h1>Chappy Nest </h1>

				 	<div className="header1">
				    <p>Organize Your Household with us!</p>
				  	</div>
				</div>
				  
				<main>
				    <section className="section1">
				      	<h3>How Does It Work?</h3>
				      
				      	<div className="info">
				        	<h4>For Parents:</h4>
				          		<ul>
						            <li><i className="fa fa-check" aria-hidden="true"></i> Add Children Accounts</li>
						            <li><i className="fa fa-check" aria-hidden="true"></i> Add Household Chores</li>
						            <li><i className="fa fa-check" aria-hidden="true"></i> Assign points for each chore completed</li>
						            <li><i className="fa fa-check" aria-hidden="true"></i> Assign Daily Task for each child</li>
				        		</ul>
				      	</div>
				      
				       <div className="info">
				         	<h4>For Kids:</h4>
				           		<ul>
				            		<li><i className="fa fa-check" aria-hidden="true"></i> See task for the day</li>
				            		<li><i className="fa fa-check" aria-hidden="true"></i> Let your parents know when task are completed</li>
				             		<li><i className="fa fa-check" aria-hidden="true"></i> Earn points by the day!</li>
				          		</ul>
				      	</div>
				      
				    </section>
				    
				    <section className="section2">
				    	<section id="sign-up">
				      		<h2><i className="fa fa-sign-in" aria-hidden="true"></i> Sign Up</h2>
								<form id="AddUser" onSubmit={this.handleSubmit.bind(this)}>
									<input type="text" ref={(input) => { this.nameInput =input}} placeholder="name" required/>
								 	<input type="text" ref={(input) => { this.usernameInput =input}} placeholder="username" required/>
								 	<input type="password" ref={(input) => { this.passwordInput = input}} placeholder="password" required/>
									<input className="btn" type="submit" value="Add User" name="Sign up!"/>
								</form>

								<div id="sign-up-load">
								</div>

				      			<p>Already have an account? <span className="link" onClick={this.handleLoginLink}>Login</span></p>
				      	</section>

				     	<section id="login">
				      		<h2><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</h2>
								<form id="Login" onSubmit={this.handleLogin.bind(this)}>
        							<input ref={(input) => { this.usernameInput =input}} placeholder="Username" type="text" name="username1" className="username" required />
        							<input ref={(input) => { this.passwordInput =input}} placeholder="Password" type="password" className="password1" name="password" required/>
        							<input className="btn" type="submit" name="Login" />
								</form>
								
								<div id="login-load">
								</div> 

				      			<p>Dont have an account? <span className="link" onClick={this.handleSignUpLink.bind(this)}>Sign Up</span></p>
				    	</section>
						<ul>
							<li><img src={require("../Images/bucket.svg")} alt="house icon"/></li>
							<li><img src={require("../Images/homework.svg")} alt="house icon"/></li>
							<li><img src={require("../Images/vacuum-cleaner.svg")} alt="house icon"/></li>
							<li><img src={require("../Images/wiping-swipe-for-floors.svg")} alt="house icon"/></li>
						</ul>

				</section>
   
				</main>
			</div>
			);
	}
}


export default NewHomePage;