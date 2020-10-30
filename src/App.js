// Import React
import React from "react";
// import Framer Motion
import { motion } from "framer-motion";
// import Route and Link
import { Route, Link } from "react-router-dom";
//Import App CSS
import "./App.css";
//Import Sticky Form
import Whiteboard from "./components/Whiteboard/Whiteboard";
import TeamPage from "./components/TeamPage/TeamPage";

function App() {
  return (
    <div className="App">
      <motion.h1
        className="heading"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, type: `spring`, stiffness: 120 }}
      >
        Sticky Task
      </motion.h1>

      <Whiteboard />
      <div className="team-page">
        <Link to="/teampage">
          <button id="team-button">Meet The Team</button>
        </Link>

        <Route exact path="/teampage" render={(rp) => <TeamPage {...rp} />} />
      </div>
    </div>
  );
}

export default App;
