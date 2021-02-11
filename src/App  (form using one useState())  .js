import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fullName, setFullName] = useState({ fname: "", lname: "" });
  const getName = (e) => {
    const { name, value } = e.target;
    setFullName(() => {
      if (name === "fName") {
        return { fname: value, lname: fullName.lname };
      } else if (name === "lName") {
        return { fname: fullName.fname, lname: value };
      }
    });
  };

  const upload = (e) => {
    e.prevetDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <div className="body">
        <form action="" onSubmit={upload}>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <input
            type="text"
            placeholder="Enter Your First_Name"
            onChange={getName}
            name="fName"
            className="inputBox"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last_Name"
            onChange={getName}
            name="lName"
            className="inputBox"
          />
          <br />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
