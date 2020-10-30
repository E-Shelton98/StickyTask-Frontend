//import React
import React from "react";
// import Framer Motion
import { motion } from "framer-motion";
//Import Component CSS
import "./Done.css";

// create framer motion variable for animating the not done button
const notDoneButtonVariant = {
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
    scale: 1.3,

    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

//Create DisplaySticky Component
const Done = (props) => {
  let stickies = props.stickies;

  return (
    <>
      {stickies && stickies.length > 0 ? (
        <div id="sticky-display">
          <i className="far fa-trash-alt" id='delete-all' onClick={props.deleteAllStickies}></i>
          {stickies.map((sticky) => (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: `spring`, stiffness: 120, duration: 0.1 }}
              className="sticky"
              key={sticky._id}
            >
              <div className="done-buttons-row">
                <motion.button
                  className="sticky-not-done"
                  initial={{}}
                  animate={{}}
                  variants={notDoneButtonVariant}
                  whileHover="whileHover"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    props.setUnDone(sticky);
                    props.history.push("/");
                  }}
                >
                  <span className="not-done-button">Not Done</span>
                </motion.button>
                
                  <motion.section
                  className="sticky-delete"
                  variants={deleteButtonVariant}
                  whileHover="whileHover"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    props.deleteSticky(sticky);
                    props.history.push("/");
                  }}
                >
                  <i className="far fa-trash-alt"></i>
                  </motion.section>
              
              </div>
              <section className="sticky-task">{sticky.task}</section>
              <section className="sticky-assignTo">
                Assigned to:{" "}
                <span className="font-roboto">{sticky.assignTo}</span>
              </section>
              <section className="sticky-workSpace">
                Work Space:{" "}
                <span className="font-roboto">{sticky.workSpace}</span>
              </section>
              <section className="sticky-complete-by">
                Complete By:{" "}
                <span className="font-roboto">{sticky.completeBy}</span>
              </section>
              <section className="sticky-description">
                Description:{" "}
                <span className="font-roboto">{sticky.description}</span>
              </section>
            </motion.div>
          ))}
        </div>
      ) : (
        <h3>No Completed Tasks Yet!</h3>
      )}
    </>
  );
};

export default Done;
