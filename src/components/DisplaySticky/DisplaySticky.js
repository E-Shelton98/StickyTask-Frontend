//import React
import React from 'react';
// import Framer Motion
import { motion } from 'framer-motion';

//Import Component CSS
import './DisplaySticky.css';

// create framer motion variable for animating the done button
const doneButtonVariant = {
	whileHover: {
		scale: 1.1,

		transition: {
			yoyo: Infinity,
			duration: 0.4,
		},
	},
};
// create framer motion variable for animating the edit button
const editButtonVariant = {
	whileHover: {
		scale: 1.1,

		transition: {
			yoyo: Infinity,
			duration: 0.4,
		},
	},
};
// create framer motion variable for animating the delete / trash can icon button
const deleteButtonVariant = {
	whileHover: {
		scale: 1.1,

		transition: {
			yoyo: Infinity,
			duration: 0.4,
		},
	},
};

//Create DisplaySticky Component
const DisplaySticky = (props) => {
	let stickies = props.stickies;
	console.log('this is stickies: ', stickies);
  let people = props.people.data;
  console.log('this is people ', people)

	return (
		<>
			{stickies && stickies.length > 0 ? (
				<div id='sticky-display'>
					{stickies.map((sticky) => (
						<motion.div
							className='sticky'
							initial={{ opacity: 0.2 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
							drag
							dragConstraints={{ left: 0, top: 0, right: 0, bottom: 300 }}
							dragElastic={0.2}
							dragMomentum={true}
							key={sticky._id}>
							<div className='buttons-row'>
								<motion.button
									className='sticky-set-done'
									variants={doneButtonVariant}
									whileHover='whileHover'
									whileTap={{ scale: 0.9 }}
									onClick={() => {
										props.setDone(sticky);
										props.history.push('/');
									}}>
									<i className='fas fa-check'></i>
								</motion.button>
								<motion.button
									className='edit-sticky-button'
									variants={editButtonVariant}
									whileHover='whileHover'
									whileTap={{ scale: 0.9 }}
									onClick={() => {
										props.selectSticky(sticky);
										props.history.push('/edit');
										console.log(`edit button`, props.handleUpdate);
									}}>
									<i className='fas fa-pencil-alt'></i>
								</motion.button>

								<motion.section
									className='sticky-delete'
									variants={deleteButtonVariant}
									whileHover='whileHover'
									whileTap={{ scale: 0.9 }}
									onClick={() => {
										props.deleteSticky(sticky);
										props.history.push('/');
									}}>
									<i className='far fa-trash-alt'></i>
								</motion.section>
							</div>
							<section className='sticky-task'>{sticky.task}</section>
							<section className='sticky-assignTo'>
								Assigned to:{' '}
								<>
									{people ? (
										<span className='font-roboto'>
											{
												people.find((person) => person._id === sticky.assignTo)
													.name
											}
										</span>
									) : (
										<span>Error getting people</span>
									)}
								</>
							</section>
							<section className='sticky-workSpace'>
								Work Space:{' '}
								<span className='font-roboto'>{sticky.workSpace}</span>
							</section>
							<section className='sticky-complete-by'>
								Complete By:{' '}
								<span className='font-roboto'>{sticky.completeBy}</span>
							</section>
							<section className='sticky-description'>
								Description:{' '}
								<span className='font-roboto'>{sticky.description}</span>
							</section>
						</motion.div>
					))}
				</div>
			) : (
				<h3>Add Some Stickies!</h3>
			)}
		</>
	);
};

export default DisplaySticky;
