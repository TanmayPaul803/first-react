import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const getTask = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };

  const add = () => {
    setItems((oldItems) => {
      return [...oldItems, task];
    });
    setTask("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List : Tanmay</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter a task"
            onChange={getTask}
            value={task}
          />
          <button className="add_button" onClick={add}>
            +
          </button>
          <ol>
            {/* <li>{task}</li> */}
            {items.map((itemVal) => {
              return (
                <>
                  <li>{itemVal}</li>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
