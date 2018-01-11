import React, { Component } from "react";
import NewHomePage from "./components/NewHomePage";
 
class App extends Component {

  render() {
    
    return (
      <div className="App">
      <NewHomePage loginUser={this.loginUser} {...props}/>
      </div>
    );
  }
}

export default App;
