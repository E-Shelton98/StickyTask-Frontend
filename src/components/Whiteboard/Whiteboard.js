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

  //  Select Sticky for a user to select a sticky to update/edit
  const [selectedSticky, setSelectedSticky] = React.useState(emptySticky);

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

  // handleUpdate function to update the contents of a sticky
  const handleUpdate = (sticky) => {
    fetch(url + "/sticky/" + sticky._id, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sticky),
    }).then((response) => {
      getStickies();
      console.log(`sticky`, sticky);
    });
  };
  // selectSticky which selects a sticky
  const selectSticky = (sticky) => {
    setSelectedSticky(sticky);
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
            label="Create"
            sticky={emptySticky}
            handleSubmit={handleCreate}
          />
        )}
      />
      <Route
        exact
        path="/edit"
        render={(rp) => (
          <StickyForm
            {...rp}
            label="Update"
            sticky={selectedSticky}
            handleSubmit={handleUpdate}
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
            handleUpdate={handleUpdate}
            selectSticky={selectSticky}
          />
        )}
      />
    </div>
  );
};

export default Whiteboard;
