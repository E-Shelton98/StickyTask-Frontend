// Import React
import React, { useState } from 'react';
//Import App CSS
import './App.css';
//import Route
import { Route } from 'react-router-dom';
//Import Sticky Form
import StickyForm from './components/StickyForm';

function App() {
	// URL for backend data
	const url = 'https://sticky-task.herokuapp.com/';
	// State to hold Sticky List
	const [stickies, setStickies] = useState([]);

	//empty sticky for Sticky Form
	const emptySticky = {
		task: '',
		completeBy: '',
		workSpace: '',
		description: '',
	};

	//Fetch to get stickies from backend
	const getStickies = () => {
		fetch(url + '/sticky/')
			.then((res) => res.json())
			.then((data) => setStickies(data));
	};

	//Get songs on page load
	React.useEffect(() => {
		getStickies();
	}, []);

	//handleCreate Function for creating stickies in DisplayStickies
	const handleCreate = (newSticky) => {
		console.log(newSticky);
		fetch(url + '/sticky/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSticky),
		});
	};

	return (
		<div className='App'>
			<h1>Hello World, how you been.....good to see you my old friend.</h1>
			<Route
				exact
				path='/'
				render={(rp) => (
					<StickyForm
						{...rp}
						label='create'
						sticky={emptySticky}
						handleSubmit={handleCreate}
					/>
				)}
			/>
		</div>
	);
}

export default App;
