import React from "react";
// import Framer Motion
import { motion } from "framer-motion";
//import Component CSS
import "./StickyForm.css";
import DisplayPeople from "../DisplayPeople/DisplayPeople";

// framer motion function for the sticky form
const stickyFormVariant = {
  transition: {
    duration: 20.4,
    type: "spring",
    ease: "easeIn",
    stiffness: 120,
  },
};

// create framer motion variable for animating the create button
const createButtonVariant = {
  whileHover: {
    scale: 1.1,

    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
  whileTap: { scale: 0.9 },
};

const StickyForm = (props) => {
  //State for form data
  const [formData, setFormData] = React.useState(props.sticky);

  //handleSubmit function to list data to App
  const handleSubmit = (event) => {
    console.log("this is formData: ", formData);
    /* event.preventDefault() */
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
      className="stickyForm"
      variants={stickyFormVariant}
      initial={{ y: 0 }}
      animate={{ y: 10 }}
      transition="transition"
    >
      <input
        type="text"
        id="form-task"
        name="task"
        placeholder="Task Name"
        value={formData.task}
        onChange={handleChange}
      />

      <input
        type="text"
        id="form-completeBy"
        name="completeBy"
        placeholder="Complete By"
        value={formData.completeBy}
        onChange={handleChange}
      />

      <input
        type="text"
        id="form-workspace"
        name="workSpace"
        placeholder="Task Location"
        value={formData.workSpace}
        onChange={handleChange}
      />

      <input
        type="text"
        id="form-description"
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleChange}
      />

      <DisplayPeople
        url={props.url}
        setFormData={setFormData}
        formData={formData}
      />

      <motion.input
        id="createButton"
        type="submit"
        value={props.label}
        variants={createButtonVariant}
        whileHover="whileHover"
        whileTap="whileTap"
      />
    </motion.form>
  );
};

export default StickyForm;
