import React from "react";
import { motion } from "framer-motion";
import "./PersonForm.css";

// framer motion function for the person form
const personFormVariant = {
  transition: {
    duration: 20.4,
    type: "spring",
    ease: "easeIn",
    stiffness: 120,
  },
};

// create framer motion variable for animating the add tasker button
const addTaskerButtonVariant = {
  whileHover: {
    scale: 1.1,

    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
  whileTap: { scale: 0.9 },
};

const PersonForm = (props) => {
  console.log("person form", props);

  const emptyPerson = {
    name: "",
    tasks: [],
  };

  //state for data form
  const [formData, setFormData] = React.useState(emptyPerson);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  //handleCreate Function for creating people
  const handleCreate = (newPerson) => {
    console.log(newPerson);
    fetch(props.url + "/person/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
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
    <motion.form
      className="personForm"
      variants={personFormVariant}
      initial={{ y: 0, x: -90 }}
      animate={{ y: 10, x: -90 }}
      transition="transition"
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Tasker's Name"
        id="person-name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <motion.input
        variants={addTaskerButtonVariant}
        whileHover="whileHover"
        whileTap="whileTap"
        id="personButton"
        type="submit"
        value="Add Tasker"
      />
    </motion.form>
  );
};

export default PersonForm;
