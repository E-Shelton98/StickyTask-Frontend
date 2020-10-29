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
              transition={{ type: `spring`, stiffness: 120 }}
              className="sticky"
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
                initial={{}}
                animate={{}}
                variants={notDoneButtonVariant}
                whileHover="whileHover"
                // whileHover={{
                //   scale: 1.1,
                //   textShadow: "0px 0px 8px rgb(255,255,255)",
                //   boxShadow: "0px 0px 8px rgb(255,255,255)",
                // }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  props.setUnDone(sticky);
                  props.history.push("/");
                }}
              >
                Not Done
              </motion.button>
              <section
                onClick={() => {
                  props.deleteSticky(sticky);
                  props.history.push("/");
                }}
              >
                DELETE STICKY!
              </section>
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
