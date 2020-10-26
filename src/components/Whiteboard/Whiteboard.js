//import React
import React, { useState } from 'react';
//import Component CSS
import './Whiteboard.css';
//import Route
import { Route } from 'react-router-dom';
//Import Sticky Form
import StickyForm from '../StickyForm/StickyForm';
import DisplaySticky from '../DisplaySticky/DisplaySticky';
import Done from '../Done/Done'

const Whiteboard = (props) => {
	// URL for backend data
	const url = 'http://localhost:3500';    //DONT FORGET TO CHANGE BACK TO HEROKU
	// State to hold Sticky List
	const [stickies, setStickies] = useState([]);
	console.log('stickies', stickies)

	const stickiesToFilter = stickies.data
	let stickiesToDo = []
	stickiesToFilter ? stickiesToDo = stickiesToFilter.filter(sticky => sticky.done === false) : console.log('something went wrong with the filter')
	
	console.log('false', stickiesToDo)
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

	//Get stickies on page load
	React.useEffect(() => {
		getStickies();
	}, []);

	//setDone function for setting a sticky to done status
	const setDone = (sticky) => {
		fetch(url + '/sticky/' + sticky._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				done: true,
			}),
		}).then(() => {
			getStickies();
		});
	};

		//setUnDone function for setting a sticky back to to-do status
		const setUnDone = (sticky) => {
			fetch(url + '/sticky/' + sticky._id, {
				method: 'put',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					done: false
				}),
			}).then(() => {
				getStickies();
			});
		};

	const deleteSticky = (sticky) => {
		fetch(url + '/sticky/' + sticky._id, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			getStickies();
		});
	};

	const deleteAllStickies = (sticky) => {
		fetch(url + '/sticky', {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			getStickies();
		});
	};

	return (
		<div className='Whiteboard-Div'>
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
			<Route
				exact
				path='/'
				render={(rp) => (
					<DisplaySticky {...rp} stickies={stickiesToDo} setDone={setDone} deleteSticky={deleteSticky}/>
				)}
			/>
			<Route
				exact
				path='/'
				render={(rp) => (
					<Done {...rp} stickies={stickies} setUnDone={setUnDone} deleteSticky={deleteSticky} deleteAllStickies={deleteAllStickies}/>
				)}
			/>
		</div>
	);
};

export default Whiteboard;
