import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter, Redirect } from "react-browser-router";
import App from "./App";

import ParentDashboard from "./components/ParentDashboard";
import ChildDashboard from "./components/ChildDashboard";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddChore from "./components/AddChore";
import AddUser from "./components/AddUser";

import "./CSS/login.css";
import "./CSS/index.css";
import "./CSS/profile.css";
import "./CSS/responsive.css";

class Root extends React.Component{
	constructor(){
		super();
		this.loginUser = this.loginUser.bind(this);
		this.logoutUser = this.logoutUser.bind(this);
	}

	loginUser(user,cb){
		localStorage.setItem('ChappyNest-userID',user._id);
		localStorage.setItem('ChappyNest-userType',user.type);
		localStorage.setItem('ChappyNest-name',user.name);
		cb();
		// this.setState({user: user});
	}

	logoutUser(){
		// this.setState({user: {}});
		localStorage.setItem('ChappyNest-userID','');
		localStorage.setItem('ChappyNest-userType','');
		//cb();
	}

	render(){
		const Logout = (props) => {
			this.logoutUser();
			return (<Redirect to='/' />)
		}

		const myLoginPage = (props) => {
			if(localStorage.getItem('ChappyNest-userID') !== ''){
				return (<Login loginUser={this.loginUser} {...props}/>)
			} else {
				return (
					<Login loginUser={this.loginUser} {...props} />
				)
			}
		}

		const mySignUpPage = (props) => {
			if(localStorage.getItem('ChappyNest-userID') !== ''){
				return (<Redirect to='/' />)
			} else {
				return (
					<Signup loginUser={this.loginUser} {...props} />
				)
			}
		}

		const ParentDashboardPage = (props) => {
			if(localStorage.getItem('ChappyNest-userID') !== '' && localStorage.getItem('ChappyNest-userType') === 'parent'){
				return <ParentDashboard logout={this.logoutUser} {...props} />
			} else {
				return (<Redirect to='/' />)
			}
		}

		const ChildDashboardPage = (props) => {
			if(localStorage.getItem('ChappyNest-userID') !== '' && localStorage.getItem('ChappyNest-userType') === 'child'){
				return <ChildDashboard logout={this.logoutUser} {...props} />
			} else {
				return(<Redirect to='/' />)
			}
		}

		const ProfilePage = (props) => {
			if(localStorage.getItem('ChappyNest-userID') !== '' && localStorage.getItem('ChappyNest-userType') === 'parent'){
				return <Profile logout={this.logoutUser} {...props} />
			} else{
				return(<Redirect to='/' />)
			}
		}

	  return(
		<BrowserRouter>
			<div>
				<Route exact path="/" component={App} />
				<Route exact path="/parentdashboard" component={ParentDashboardPage} />
				<Route exact path="/childdashboard" component={ChildDashboardPage} />
				<Route exact path="/account" component={ProfilePage} />
				<Route exact path="/login" component={myLoginPage} />
				<Route exact path="/signup" component={mySignUpPage} />
				<Route exact path="/addchore" component={AddChore} />
				<Route exact path="/create" component={AddUser} />
				<Route exact path="/logout" component={Logout} />
			</div>
		</BrowserRouter>
	  );
	}
}


ReactDOM.render(
  <Root />,
  document.getElementById("root") // eslint-disable-line no-undef
);