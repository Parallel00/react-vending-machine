import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import VendingMachine from "./main";
import Soda from "./soda";
import Chips from "./chips";
import Candy from "./candy";

function App(){
	return(
		<div className="MainApp">
		<BrowserRouter>
		<Routes>
		<Route path="/soda" element={<Soda/>} />
		<Route path="/chips" element={<Chips/>} />
		<Route path="/candy" element={<Candy/>} />
		<Route path="/" element={<VendingMachine/>} />
		</Routes>
		</BrowserRouter>
		</div>
	);
}

export default App;