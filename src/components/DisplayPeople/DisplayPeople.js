import React from 'react'

import './DisplayPeople.css'

const DisplayPeople = (props) => {
    console.log('display people props', props)
  //state to hold people list
  const [people, setPeople] = React.useState([])
  
  const getPeople = () => {
      fetch(props.url + "/person/")
      .then((res) => res.json())
      .then((data) => setPeople(data));
    };
    
    React.useEffect(() => {
        getPeople();
    }, []);
    
    const peopleArr = people.data
    console.log('people',peopleArr)


    return(
       <>
          {peopleArr && peopleArr.length > 0 ? (<select> {peopleArr.map((person) => (
            <option key={person._id} name='assignTo' value='5f9984597c1ed0001ef5ec86'>{person.name}</option>
        ))}  
        </select>) : (<p>Add Some Taskers!</p>)}
       </>
    )

}

export default DisplayPeople