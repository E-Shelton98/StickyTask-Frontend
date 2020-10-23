import React from 'react';

const StickyForm = (props) => {
	//State for form data
	const [formData, setFormData] = React.useState(props.task);

	//handleSubmit function to list data to App
	const handleSubmit = (event) => {
		console.log('this is formData: ', formData);
		props.handleSubmit(formData);
		props.history.push('/');
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return (
		<form onSubmit={handleSubmit}>
			<label id='task-name' for='name'>
				Task Name
			</label>
			<input
				type='text'
				id='form-task-name'
				name='name'
				value={formData.task}
				onChange={handleChange}
			/>
			<br />
			<label id='task-complete-by' for='complete-by'>
				Complete By
			</label>
			<input
				type='text'
				id='form-complete-by'
				name='complete-by'
				value={formData.completeBy}
				onChange={handleChange}
			/>
			<br />
			<label id='task-workSpace' for='workSpace'>
				Task Location
			</label>
			<input
				type='text'
				id='form-workspace'
				name='workSpace'
				value={formData.workSpace}
				onChange={handleChange}
			/>
			<br />
			<label id='task-description' for='description'>
				Task Description
			</label>
			<input
				type='text'
				id='form-description'
				name='description'
				value={formData.description}
				onChange={handleChange}
			/>
		</form>
	);
};

export default StickyForm