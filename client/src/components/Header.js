import React from 'react';



	const Header = (props) => {
		return (
		<div className="row">	
			<header className="nav-bar">
				<ul>
					<a href={'/' + props.link1}><li>{props.link1}</li></a>
					 <a href={'/' + props.link2}><li>{props.link2}</li></a>
				</ul>
			</header>
		</div>
		)
	}




export default Header;