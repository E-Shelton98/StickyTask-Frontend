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
    scale: 1.3,
    textShadow: "0px 0px 8px #ff0000",
    boxShadow: "0px 0px 8px #ff0000",
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
          {stickies.map((sticky) => (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: `spring`, stiffness: 120, duration: 0.1 }}
              className="sticky"
            >
              <section className="sticky-name">
                Name: <span className="font-roboto">{sticky.task}</span>
              </section>
              <section className="sticky-complete-by">
                Complete By:{" "}
                <span className="font-roboto">{sticky.completeBy}</span>
              </section>
              <section className="sticky-workSpace">
                Work Space:{" "}
                <span className="font-roboto">{sticky.workSpace}</span>
              </section>
              <section className="sticky-description">
                Description:{" "}
                <span className="font-roboto">{sticky.description}</span>
              </section>
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
                <span className="font-roboto">Not Done</span>
              </motion.button>
              <div className="delete-container">
                <motion.section
                  className="far fa-trash-alt"
                  variants={deleteButtonVariant}
                  whileHover="whileHover"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    props.deleteSticky(sticky);
                    props.history.push("/");
                  }}
                ></motion.section>
              </div>
            </motion.div>
          ))}
          <i class="far fa-trash-alt" onClick={props.deleteAllStickies}></i>
        </div>
      ) : (
        <h3>No Completed Tasks Yet!</h3>
      )}
    </>
  );
};

export default Done;
