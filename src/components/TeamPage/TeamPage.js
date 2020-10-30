import React from "react";

import { motion } from "framer-motion";

import "./TeamPage.css";

const TeamPage = (props) => {
  return (
    <div className="team-page">
      <h2 className="meet-the-team">
        Let <motion.span whileHover={{ color: "#FFFDD0" }}>Us</motion.span>{" "}
        <motion.span whileHover={{ color: "#1400ab" }}>Reintroduce</motion.span>{" "}
        Ourselves
      </h2>
      <h3>Sean</h3>
      <motion.img
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 200, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.4 }}
        className="sean-image"
        src="https://i.imgur.com/yjxYvHN.jpg"
        alt=""
      ></motion.img>
      <p className="sean-blurb">
        A New York City based software engineer who <br />
        worked along side the magnificent minds of fellow software engineers,{" "}
        <br />
        Frieda and Erik, to fully develop the backend and front end <br /> of a
        task manager app called "Sticky Task."
      </p>
      <h3>Erik</h3>
      <motion.img
        whileHover={{ scale: 1.4 }}
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 200, type: "spring", stiffness: 120 }}
        className="erik-image"
        src="https://i.imgur.com/wYAXjm8t.jpg"
        alt=""
      ></motion.img>
      <p className="erik-blurb"></p>
      <h3>Frieda</h3>
      <motion.img
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 200, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.4 }}
        className="frieda-image"
        src="https://i.imgur.com/QQMZEkVt.jpg"
        alt=""
      ></motion.img>
      <p className="frieda-blurb">
        An up-state New Yorker turned down-state New Yorker, <br />
        Frieda is a student at GA enjoying the process of slowly going bald from
        pulling her hair out because of code. She has joined forces with Erik
        and Sean to provide the world with a brand-new, state-of-the-art task
        manager, Sticky Task! <br />
        Frieda lent her expertise in design and functionality to help complete
        this magnificent app before you.
      </p>
    </div>
  );
};

export default TeamPage;
