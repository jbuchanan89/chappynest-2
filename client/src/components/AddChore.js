import React from "react";
import Client from "../Client.js";

class AddChore extends React.Component{
	
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let chore = {
			name	: this.nameInput.value,
			pointValue: this.pointValueInput.value,
			parent_id: localStorage.getItem('ChappyNest-userID')
		};
		Client.addChore(chore, chore => {
			this.nameInput.value = "";
			this.pointValueInput.value = "";
			this.props.addChore(chore);
		});

	}
	
	render(){
		return(
			<div id= "addChores">
				<div className="modal">
					<h2> CREATE CHORE</h2>

					<form id="AddChore" onSubmit={this.handleSubmit.bind(this)}>
					 	<input className="addChoreField" type="text" ref={(input) => { this.nameInput =input}} placeholder="name" required/>
					 	<input className="addChoreField" type="number" ref={(input) => { this.pointValueInput = input}} placeholder="points" required/>
						<input className="submit-form" type="submit" value="Add Chore"/>
					</form>
				</div>
			</div>
			)
	}
}

export default AddChore;