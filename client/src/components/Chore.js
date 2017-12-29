import React from 'react';


class Chore extends React.Component{
	render(){
		return(
		<tr>
			<td>{this.props.details.name}</td>
			<td>{this.props.details.pointValue}</td>
		</tr>
		)
	}
}

export default Chore;