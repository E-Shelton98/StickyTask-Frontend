//import React
import React from 'react';
//Import Component CSS
import './DisplaySticky.css';

//Create DisplaySticky Component
const DisplaySticky = (props) => {
	console.log('Display stickies props', props)
	let stickies = props.stickies;

	return (
		<>
			{stickies && stickies.length > 0 ? (
				<div id='sticky-display'>
					<h2>To-Do</h2>
					{stickies.filter(sticky => sticky.done === false).map((sticky) => (
						<div className='sticky'>
							<section className='sticky-name'>Name: {sticky.task}</section>
							<section className='sticky-complete-by'>
								Complete By: {sticky.completeBy}
							</section>
							<section className='sticky-workSpace'>
								Work Space: {sticky.workSpace}
							</section>
							<section className='sticky-description'>
								Description: {sticky.description}
							</section>
							<section className='sticky-add-person'>+</section>
							<button
								className='sticky-set-done'
								onClick={() => {
									props.setDone(sticky);
									props.history.push('/');
								}}>
								Done
							</button>
							<section>For Testing Only! {JSON.stringify(sticky.done)}</section>
							<section onClick={() => {
								props.deleteSticky(sticky);
								props.history.push('/')
							}}>DELETE STICKY!</section>
						</div>
					))}
				</div>
			) : (
				<h3>Add Some Stickies!</h3>
			)}
		</>
	);
};

export default DisplaySticky;