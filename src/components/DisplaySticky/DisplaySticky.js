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

//Create DisplaySticky Component
const DisplaySticky = (props) => {
  let stickies = props.stickies;

  console.log(stickies);

  return (
    <>
      {stickies && stickies.length > 0 ? (
        <div id="sticky-display">
          <h2>To-Do</h2>
          {stickies.map((sticky) => (
            <div className="sticky">
              <section className="sticky-name">Name: {sticky.task}</section>
              <section className="sticky-complete-by">
                Complete By: {sticky.completeBy}
              </section>
              <section className="sticky-workSpace">
                Work Space: {sticky.workSpace}
              </section>
              <section className="sticky-description">
                Description: {sticky.description}
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
                Done
              </motion.button>
              <button
                className="editStickyButton"
                onClick={() => {
                  props.selectSticky(sticky);
                  props.history.push("/edit");
                  console.log(`edit button`, props.handleUpdate);
                }}
              >
                Edit
              </button>
              <div className="sticky-delete-and-add-person-container">
                <section
                  class="far fa-trash-alt"
                  onClick={() => {
                    props.deleteSticky(sticky);
                    props.history.push("/");
                  }}
                ></section>
                <section className="sticky-add-person">+</section>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>Add Some Stickies!</h3>
      )}
    </>
  );
};

export default DisplaySticky;
