import React from "react";
import { motion } from "framer-motion";
import "./PersonForm.css";

// framer motion function for the person form
const personFormVariant = {
  animate: {},
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
      variants={personFormVariant}
      animate="animate"
      transition={{}}
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <input
        type="text"
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
        value="Add Tasker!"
      />
    </motion.form>
  );
};

export default PersonForm;
