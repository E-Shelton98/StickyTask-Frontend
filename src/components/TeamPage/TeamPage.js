import React from "react";

import { motion } from "framer-motion";

import "./TeamPage.css";

const TeamPage = (props) => {
  return (
    <div className="team-page">
      <h2 className="meet-the-team">Let Us Reintroduce Ourselves</h2>
      <h3>Sean</h3>
      <motion.img
        whileHover={{ scale: 1.4 }}
        className="sean-image"
        src="https://i.imgur.com/yjxYvHN.jpg"
        alt=""
      ></motion.img>
      <p className="sean-blurb">
        Worked along side the magnificent minds of Frieda and Erik
        <br /> to create a task manager app called Sticky Task.
      </p>
      <h3>Erik</h3>
      <motion.img
        whileHover={{ scale: 1.4 }}
        className="erik-image"
        src="https://i.imgur.com/wYAXjm8t.jpg"
        alt=""
      ></motion.img>
      <p className="erik-blurb"></p>
      <h3>Frieda</h3>
      <motion.img
        whileHover={{ scale: 1.4 }}
        className="frieda-image"
        src="https://i.imgur.com/QQMZEkVt.jpg"
        alt=""
      ></motion.img>
      <p className="frieda-blurb"></p>
    </div>
  );
};

export default TeamPage;
