//import React
import React from "react";
// import Framer Motion
import { motion } from "framer-motion";

//Import Component CSS
import "./DisplaySticky.css";

// create framer motion variable for animating the done button
const doneButtonVariant = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};
// create framer motion variable for animating the edit button
const editButtonVariant = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};
// create framer motion variable for animating the delete / trash can icon button
const deleteButtonVariant = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #ff0000",
    boxShadow: "0px 0px 8px #ff0000",
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

// create framer motion variable for animating the add person button
const addPersonButtonVariant = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #008000",
    boxShadow: "0px 0px 8px #008000",
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

//Create DisplaySticky Component
const DisplaySticky = (props) => {
  let stickies = props.stickies;

  console.log(stickies);

  return (
    <>
      {stickies && stickies.length > 0 ? (
        <div id="sticky-display">
          {stickies.map((sticky) => (
            <motion.div
              className="sticky"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 300 }}
              dragElastic={0.2}
              dragMomentum={true}
            >
              <section className="sticky-name">Name: <span className='font-roboto'>{sticky.task}</span></section>
              <section className="sticky-complete-by">
                Complete By: <br/><span className='font-roboto'>{sticky.completeBy}</span>
              </section>
              <section className="sticky-workSpace">
                Work Space: <span className='font-roboto'>{sticky.workSpace}</span>
              </section>
              <section className="sticky-description">
                Description: <span className='font-roboto'>{sticky.description}</span>
              </section>
              <motion.button
                className="sticky-set-done"
                variants={doneButtonVariant}
                whileHover="whileHover"
                onClick={() => {
                  props.setDone(sticky);
                  props.history.push("/");
                }}
              >
                <span className='font-roboto'>Done</span>
              </motion.button>
              <motion.button
                className="edit-sticky-button"
                variants={editButtonVariant}
                whileHover="whileHover"
                onClick={() => {
                  props.selectSticky(sticky);
                  props.history.push("/edit");
                  console.log(`edit button`, props.handleUpdate);
                }}
              >
                <span className='font-roboto'>Edit</span>
              </motion.button>
              <div className="sticky-delete-and-add-person-container">
                <motion.section
                  variants={deleteButtonVariant}
                  whileHover="whileHover"
                  whileTap={{ scale: 0.9 }}
                  className="far fa-trash-alt"
                  onClick={() => {
                    props.deleteSticky(sticky);
                    props.history.push("/");
                  }}
                ></motion.section>

                <motion.section
                  className="sticky-add-person"
                  variants={addPersonButtonVariant}
                  whileHover="whileHover"
                  whileTap={{ scale: 0.9 }}
                >
                  +
                </motion.section>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <h3>Add Some Stickies!</h3>
      )}
    </>
  );
};

export default DisplaySticky;
