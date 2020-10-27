import React from "react";
//import Component CSS
import "./StickyForm.css";

const StickyForm = (props) => {
  console.log('sticky form props', props)
  //State for form data
  const [formData, setFormData] = React.useState(props.sticky);

  //handleSubmit function to list data to App
  const handleSubmit = (event) => {
    console.log("this is formData: ", formData);
    props.handleSubmit(formData);
    props.history.push("/");
  };
  //handleChange for input of form data
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={() => {handleSubmit()}}>
      <label id="task-name">Task Name</label>
      <input
        type="text"
        id="form-task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <br />
      <label id="task-completeBy">Complete By</label>
      <input
        type="text"
        id="form-completeBy"
        name="completeBy"
        value={formData.completeBy}
        onChange={handleChange}
      />
      <br />
      <label id="task-workSpace">Task Location</label>
      <input
        type="text"
        id="form-workspace"
        name="workSpace"
        value={formData.workSpace}
        onChange={handleChange}
      />
      <br />
      <label id="task-description">Task Description</label>
      <input
        type="text"
        id="form-description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <input id="createButton" type="submit" value={props.label} />
      {/* <input type="submit" value={props.label} /> */}
    </form>
  );
};

export default StickyForm;
