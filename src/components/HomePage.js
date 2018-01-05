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
		<Header link1="Login" link2="SignUp" />

		<div className="row">
			<div id="summary" className= "summary col-12">

				<h1>Chappy Nest</h1>
			</div>


		</div>

		<div className ="row">
			<div className="col-12 info">
				<h2>What does this site do? </h2>

				<div className="detail col-11">
					<p>Detail 1</p>
				</div>

				<div className="detail col-11">
					<p>Detail 2</p>
				</div>

				<div className="detail col-11">
					<p>Detail 3</p>
				</div>

				
			</div>

		</div>
	</div>
			);
	}
}


export default HomePage;


