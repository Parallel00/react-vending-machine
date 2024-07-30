import React from 'react';
import { Link } from 'react-router-dom'

function Soda(){
	return(
	<div id="container">
		<h1>You have chosen soda.</h1>
		<div id="image"><img src="https://static.vecteezy.com/system/resources/previews/013/760/373/original/soda-can-mockup-realistic-transparent-free-png.png" alt="soda" width="450" height="500" /></div>
		<Link to='/' className="back-button">Go back</Link>
	</div>
	);
}

export default Soda;