import React from 'react';
import { Link } from 'react-router-dom'

function Chips(){
	return(
	<div id="container">
		<h1>You have chosen chips.</h1>
		<div id="image"><img src="https://atlas-content-cdn.pixelsquid.com/stock-images/potato-chip-bag-k1R8B3B-600.jpg" alt="chips" width="450" height="500" /></div>
		<Link to='/' className="back-button">Go back</Link>
	</div>
	);
}

export default Chips;