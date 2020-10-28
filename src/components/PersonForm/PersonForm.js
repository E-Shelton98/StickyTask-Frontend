import React from 'react'
import './PersonForm.css'

const PersonForm = (props) => {
    console.log('person form',props)

    const emptyPerson = {
        name: '',
        tasks:[]
    }

    //state for data form
    const [formData, setFormData] = React.useState(emptyPerson)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    //handleCreate Function for creating people
    const handleCreate = (newPerson) => {
		console.log(newPerson);
		fetch(props.url + '/person/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPerson),
		});
    };
    
      //handleSubmit function to list data to App
  const handleSubmit = (event) => {
    console.log("this is formData: ", formData);
    handleCreate(formData);
    props.history.push("/");
  };

    return (
        <form onSubmit={() => {handleSubmit()}}>
            <input type="text" id="person-name" name="name" value={formData.name} onChange={handleChange} />

            <input id="personButton" type='submit' value='Add Tasker!'/>
        </form>

    )
}

export default PersonForm