import React, { Component } from "react";
import NewHomePage from "./components/NewHomePage";
 
class App extends Component {
	loginUser(user,cb){
		localStorage.setItem('ChappyNest-userID',user._id);
		localStorage.setItem('ChappyNest-userType',user.type);
		localStorage.setItem('ChappyNest-name',user.name);
		cb();
		// this.setState({user: user});
	}

  render() {
    
    return (
      <div className="App">
      <NewHomePage loginUser={this.loginUser}/>
      </div>
    );
  }
}

export default App;
