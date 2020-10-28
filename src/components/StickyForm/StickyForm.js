import React from "react";
// import Framer Motion
import { motion } from "framer-motion";
//import Component CSS
import "./StickyForm.css";

// framer motion function for the sticky form
const stickyFormVariant = {
  initial: {
    y: -100,
  },
  animate: {
    scale: 1.5,
    x: "-10vw",
    y: "20vw",
  },
  transition: {
    duration: 0.4,
  },
};

// create framer motion variable for animating the create button
const createButtonVariant = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
  whileTap: { scale: 0.9 },
};

const StickyForm = (props) => {
  console.log("sticky form props", props);
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
    <motion.form
      onSubmit={() => {
        handleSubmit();
      }}
      variants={stickyFormVariant}
      //   initial="inital"
      animate="animate"
    >
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
      <motion.input
        id="createButton"
        type="submit"
        value={props.label}
        variants={createButtonVariant}
        whileHover="whileHover"
        whileTap="whileTap"
      />
      {/* <input type="submit" value={props.label} /> */}
    </motion.form>
  );
};

export default StickyForm;
