// Import React
import React, { useState } from "react";
//Import App CSS
import "./App.css";
//import Route
import { Route } from "react-router-dom";
//Import Sticky Form
import Whiteboard from "./components/Whiteboard/Whiteboard";


function App() {
	return (
		<div className='App'>
			<h1>Sticky Task</h1>
			<Whiteboard/>
		</div>
	);
}

export default App;
