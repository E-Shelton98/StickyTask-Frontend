//import React
import React, { useState } from "react";
// import Framer Motion
// import { motion } from "framer-motion";
//import Component CSS
import "./Whiteboard.css";
//import Route
import { Route } from "react-router-dom";
//Import Sticky Form
import StickyForm from "../StickyForm/StickyForm";
import PersonForm from "../PersonForm/PersonForm.js";
import DisplaySticky from "../DisplaySticky/DisplaySticky";
import Done from "../Done/Done";

const Whiteboard = (props) => {
  // URL for backend data
  const url = "https://sticky-task.herokuapp.com";

  // State to hold Sticky List
  const [stickies, setStickies] = useState([]);

  const stickiesToFilter = stickies.data;
  let stickiesToDo = [];
  let stickiesDone = [];
  stickiesToFilter
    ? (stickiesToDo = stickiesToFilter.filter(
        (sticky) => sticky.done === false
      ))
    : console.log("something went wrong with the to-do filter");
  stickiesToFilter
    ? (stickiesDone = stickiesToFilter.filter((sticky) => sticky.done === true))
    : console.log("something went wrong with the done filter");

  //empty sticky for Sticky Form
  const emptySticky = {
    task: "",
    completeBy: "",
    workSpace: "",
    description: "",
    // assignTo: ''
  };

  //  Select Sticky for a user to select a sticky to update/edit
  const [selectedSticky, setSelectedSticky] = React.useState(emptySticky);

  //Fetch to get stickies from backend
  const getStickies = () => {
    fetch(url + "/sticky/")
      .then((res) => res.json())
      .then((data) => setStickies(data));
  };

  const getPeople = () => {
    fetch(url + "/person/")
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

  //Get stickies on page load
  React.useEffect(() => {
    getStickies();
  }, []);

  //setUnDone function for setting a sticky back to to-do status
  const setUnDone = (sticky) => {
    fetch(url + "/sticky/" + sticky._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: false,
      }),
    }).then(() => {
      getStickies();
    });
  };

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

  const deleteAllStickies = (sticky) => {
    fetch(url + "/sticky", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getStickies();
    });
  };

  const [dropDown, setDropDown] = useState(false);
  const [dropDownPerson, setDropDownPerson] = useState(false);

  return (
    <div className="Whiteboard-Div">
      <div className="createForm">
        {dropDown === false ? (
          <button
            className="add-sticky"
            onClick={() => {
              setDropDown(true);
            }}
          >
            Sticky Task +
          </button>
        ) : (
          <Route
            exact
            path="/"
            render={(rp) => (
              <StickyForm
                {...rp}
                label="create"
                sticky={emptySticky}
                setDropDown={setDropDown}
                handleSubmit={handleCreate}
              />
            )}
          />
        )}
      </div>

      {dropDown === true || dropDownPerson === true ? (
        <div
          className="outsideClick"
          onClick={() => {
            setDropDown(false);
            setDropDownPerson(false);
          }}
        ></div>
      ) : null}

      <div className="createPerson">
        {dropDownPerson === false ? (
          <button
            className="add-person"
            onClick={() => {
              setDropDownPerson(true);
            }}
          >
            Tasker +
          </button>
        ) : (
          <Route
            exact
            path="/"
            render={(rp) => (
              <PersonForm {...rp} url={url} getPeople={getPeople} />
            )}
          />
        )}
      </div>

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
            stickies={stickiesToDo}
            setDone={setDone}
            deleteSticky={deleteSticky}
            selectSticky={selectSticky}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(rp) => (
          <Done
            {...rp}
            stickies={stickiesDone}
            setUnDone={setUnDone}
            deleteSticky={deleteSticky}
            deleteAllStickies={deleteAllStickies}
          />
        )}
      />
    </div>
  );
};

export default Whiteboard;
