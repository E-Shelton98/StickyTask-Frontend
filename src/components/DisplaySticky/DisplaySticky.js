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
            <motion.div
              className="sticky"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
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
              <section className="sticky-add-person">+</section>
              <motion.button
                className="sticky-set-done"
                variants={doneButtonVariant}
                animate={{}}
                whileHover="whileHover"
                initial={{}}
                whileTap={{ scale: 0.9 }}
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

              <section>For Testing Only! {JSON.stringify(sticky.done)}</section>
              <motion.section
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  textShadow: "0px 0px 8px #ff0000",
                }}
                whileTap={{ scale: 0.9 }}
                class="far fa-trash-alt"
                onClick={() => {
                  props.deleteSticky(sticky);
                  props.history.push("/");
                }}
              ></motion.section>
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
