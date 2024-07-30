import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function VendingMachine() {
  return (
    <>
      <div className="Title">
        <h1>Welcome to the vending machine. Which snack would you like?</h1>
      </div>
	  <div id="wrapper">
	  <div id="image"><img src="https://www.selectivend.com/wp-content/uploads/2020/04/SV-Evolution-40-1.png" alt="the machine" width="450" height="500" /></div>
      <br />
      <div id="options">
        <h2>
          <Link to="/soda" className="machine-item">Soda</Link>
		  <br />
		  <Link to="/chips" className="machine-item">Chips</Link>
		  <br />
		  <Link to="/candy" className="machine-item">Candy</Link>
        </h2>
      </div>
	  </div>
    </>
  );
}

export default VendingMachine;