import React from 'react';
import { Link } from 'react-router-dom'

function Candy(){
	return(
	<div id="container">
		<h1>You have chosen candy.</h1>
		<div id="image"><img src="https://static.vecteezy.com/system/resources/previews/019/859/753/original/milk-chocolate-bar-isolated-background-vector-illustration-png.png" alt="candy" width="700" height="500" /></div>
		<Link to='/' className="back-button">Go back</Link>
	</div>
	);
}

export default Candy;