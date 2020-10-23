// Import React
import React from 'react';
//Import App CSS
import './App.css';
//import Route
import { Route } from 'react-router-dom';
//Import Sticky Form
import StickyForm from './components/StickyForm';

function App() {
	return (
		<div className='App'>
			<h1>Hello World, how you been.....good to see you my old friend.</h1>
			<Route exact path='/'>
				<StickyForm />
			</Route>
		</div>
	);
}

export default App;
