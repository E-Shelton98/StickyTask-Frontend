//import React
import React, { useState } from "react";

//import reactstrap tab
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
//import classnames
import classnames from "classnames";
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
  const [people, setPeople] = useState([]);

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
    assignTo: "",
  };

  //  Select Sticky for a user to select a sticky to update/edit
  const [selectedSticky, setSelectedSticky] = useState(emptySticky);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //Fetch to get stickies from backend
  const getStickies = () => {
    fetch(url + "/sticky/")
      .then((res) => res.json())
      .then((data) => setStickies(data));
  };

  const getPeople = () => {
    fetch(url + "/person/")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  };

  //handleCreate Function for creating stickies in DisplayStickies
  const handleCreate = (newSticky) => {
    console.log("This is newSticky: ", newSticky);
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
    });
  };

  //Get stickies on page load
  React.useEffect(() => {
    getStickies();
    getPeople();
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
    }, []);
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
      <hr />
      <div id="add-buttons">
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
                  label="Add Sticky"
                  sticky={emptySticky}
                  setDropDown={setDropDown}
                  handleSubmit={handleCreate}
                  url={url}
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
      </div>
      <hr />

      <Route
        exact
        path="/edit"
        render={(rp) => (
          <StickyForm
            {...rp}
            label="Update"
            sticky={selectedSticky}
            handleSubmit={handleUpdate}
            url={url}
          />
        )}
      />
      <div className="tabs">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              To-Do
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Done
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
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
                      people={people}
                    />
                  )}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <div className="done-stickies">
                <i
              className="far fa-trash-alt"
              id="delete-all"
              onClick={props.deleteAllStickies}
            ></i>
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
                        people={people}
                      />
                    )}
                  />
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      <div className="desktop-view">
        <h2>To-Do</h2>
        {
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
                people={people}
              />
            )}
          />
        }
        <div className="done-stickies-dt">
          <div className="done-top-row">
            <h2>Done</h2>
            <i
              className="far fa-trash-alt"
              id="delete-all"
              onClick={props.deleteAllStickies}
            ></i>
          </div>

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
                people={people}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
