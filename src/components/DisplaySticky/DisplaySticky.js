//import React
import React from "react";
// import Framer Motion
import { motion } from "framer-motion";
//Import Component CSS
import "./DisplaySticky.css";

//Create DisplaySticky Component
const DisplaySticky = (props) => {
  let stickies = props.stickies;
  console.log(stickies);

  return (
    <>
      {stickies && stickies.length > 0 ? (
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="sticky-display"
        >
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
              <section className="sticky-add-person">+</section>
              <motion.button
                className="sticky-set-done"
                initial={{}}
                animate={{}}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
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
                whileHover={{ scale: 1.1, originX: 0 }}
                class="far fa-trash-alt"
                onClick={() => {
                  props.deleteSticky(sticky);
                  props.history.push("/");
                }}
              ></motion.section>
            </div>
          ))}
        </motion.div>
      ) : (
        <h3>Add Some Stickies!</h3>
      )}
    </>
  );
};

export default DisplaySticky;
