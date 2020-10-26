//import React
import React, { useState } from "react";
//import Component CSS
import "./Whiteboard.css";
//import Route
import { Route } from "react-router-dom";
//Import Sticky Form
import StickyForm from "../StickyForm/StickyForm";
import DisplaySticky from "../DisplaySticky/DisplaySticky";

const Whiteboard = (props) => {
  // URL for backend data
  const url = "https://sticky-task.herokuapp.com";
  // State to hold Sticky List
  const [stickies, setStickies] = useState([]);

  //empty sticky for Sticky Form
  const emptySticky = {
    task: "",
    completeBy: "",
    workSpace: "",
    description: "",
  };

  //Fetch to get stickies from backend
  const getStickies = () => {
    fetch(url + "/sticky/")
      .then((res) => res.json())
      .then((data) => setStickies(data));
  };

  //handleCreate Function for creating stickies in DisplayStickies
  const handleCreate = (newSticky) => {
    console.log(newSticky);
    fetch(url + "/sticky/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSticky),
    });
  };

  //Get stickies on page load
  React.useEffect(() => {
    getStickies();
  }, []);

  //setDone function for setting a sticky to done status
  const setDone = (sticky) => {
    fetch(url + "/sticky/" + sticky._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: true,
      }),
    }).then(() => {
      getStickies();
    });
  };

  // editSticky function to edit the contents of a sticky
  const editSticky = (sticky) => {
    fetch(url + "/sticky/" + sticky._id, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sticky),
    }).then((response) => {
      getStickies();
      console.log(`sticky`, sticky);
    });
  };

  const deleteSticky = (sticky) => {
    fetch(url + "/sticky/" + sticky._id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getStickies();
    });
  };

  return (
    <div className="Whiteboard-Div">
      <Route
        exact
        path="/"
        render={(rp) => (
          <StickyForm
            {...rp}
            label="create"
            sticky={emptySticky}
            handleSubmit={handleCreate}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(rp) => (
          <DisplaySticky
            {...rp}
            stickies={stickies}
            setDone={setDone}
            deleteSticky={deleteSticky}
            editSticky={editSticky}
          />
        )}
      />
    </div>
  );
};

export default Whiteboard;
