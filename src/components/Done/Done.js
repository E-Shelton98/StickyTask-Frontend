//import React
import React from 'react';
//Import Component CSS
import './Done.css';

//Create DisplaySticky Component
const Done = (props) => {
	console.log('Display done stickies props', props);
	let stickies = props.stickies;

	return (
		<>
			{stickies && stickies.length > 0 ? (
				<div id='sticky-display'>
					<h2>Done</h2>
					{stickies.map((sticky) => (
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
									props.setUnDone(sticky);
									props.history.push('/');
								}}>
								Not Done
							</button>
							<section>For Testing Only! {JSON.stringify(sticky.done)}</section>
							<section
								onClick={() => {
									props.deleteSticky(sticky);
									props.history.push('/');
								}}>
								DELETE STICKY!
							</section>
						</div>
					))}
					<i class='far fa-trash-alt' onClick={props.deleteAllStickies}></i>
				</div>
			) : (
				<h3>No Completed Tasks Yet!</h3>
			)}
		</>
	);
};

export default Done;
