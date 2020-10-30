import React from "react";

import "./TeamPage.css";

const TeamPage = (props) => {
  return (
    <div className="team-page">
      <h2 className="meet-the-team">Let Us Reintroduce Ourselves</h2>
      <h3>Sean</h3>
      <img
        className="sean-image"
        src="https://i.imgur.com/yjxYvHN.jpg"
        alt=""
      ></img>
      <p className="sean-blurb">
        Worked along side the magnificent minds of Frieda and Erik
        <br /> to create a task manager app called Sticky Task.
      </p>
      <h3>Erik</h3>
      <p></p>
      <h3>Frieda</h3>
      <p></p>
    </div>
  );
};

export default TeamPage;
