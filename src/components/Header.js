import React from 'react';

	const Header = (props) => {
		return (
		<div className="row">	
			<header className="nav-bar">

			<p>Chappy Nest</p>
				<ul>
					<a href={'/' + props.link1}><li>{props.link1Name}</li></a>
					<a href={'/' + props.link2}><li>{props.link2Name}</li></a>
				</ul>
			</header>
		</div>
		)
	}

export default Header;