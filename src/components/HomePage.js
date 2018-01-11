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
		<Header link1="login" link1Name="Login" link2="signup" link2Name="Sign Up" />

		<div className="row">
			<div id="summary" className= "summary col-12">
				<h1>Chappy Nest</h1>
			</div>

		</div>

		<div className ="row">
			<div className="col-12 info">
				<h2>How does it work?</h2>	
			</div>

			<div className="row">
				<div className="summary-details col-6"></div>

			<div className="summary-details col-6"></div>
			</div>

		</div>
	</div>
			);
	}
}


export default HomePage;


