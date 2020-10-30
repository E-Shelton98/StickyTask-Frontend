import React from 'react';

import './DisplayPeople.css';

const DisplayPeople = (props) => {
	const formData = props.formData;

	//state to hold people list
	const [people, setPeople] = React.useState([]);

	const getPeople = () => {
		fetch(props.url + '/person/')
			.then((res) => res.json())
			.then((data) => setPeople(data));
	};

	React.useEffect(() => {
		getPeople();
	});

	const peopleArr = people.data;

	const handleChange = (event) => {
		console.log(event.target.value);
    let newFormData = { ...formData };
    newFormData.assignTo = event.target.value
    console.log('this is newFormData: ', newFormData);
		props.setFormData(newFormData)
	};

	return (
		<>
			{peopleArr && peopleArr.length > 0 ? (
				<select onChange={(event) => handleChange(event)}>
					{peopleArr.map((person) => (
						<option key={person._id} name='assignTo' value={person._id}>
							{person.name}
						</option>
					))}
				</select>
			) : (
				<p>Add Some Taskers!</p>
			)}
		</>
	);
};

export default DisplayPeople;
