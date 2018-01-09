import React from "react";
import Client from '../Client';
import Header from './Header';

class HomePage extends React.Component{

	handleLogin(event) {
		event.preventDefault();
		Client.login();
	}

	render(){
		return (
	<div> 
		<Header link1="Login" link1Name="Login" link2="SignUp" link2Name="Sign Up" />

		<div className="row">
			<div id="summary" className= "summary col-12">

				<h1>Chappy Nest</h1>
			</div>
		</div>

		<div className ="row">
			<div className="col-12 info">
				<h2>What Can I Do With ChappyNest? </h2>

				<div className="detail col-8">
					<p>Add Household Chores</p>
				</div>

				<div className="detail col-8">
					<p>Assign Chores to Children</p>
				</div>

				<div className="detail col-8">
					<p>Mark Chores Completed</p>
				</div>

				
			</div>

		</div>

		<footer></footer>
	</div>
			);
	}
}


export default HomePage;


