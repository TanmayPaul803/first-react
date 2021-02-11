import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const upload = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  const getInfo = (e) => {
    const { name, value } = e.target;

    setFullName((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <>
      <form action="" onSubmit={upload}>
        <h1>
          Hello {fullName.fname} {fullName.lname}
        </h1>
        <br />
        <p>{fullName.email}</p>
        <br />
        <p>{fullName.phone}</p>
        <input
          type="text"
          placeholder="Enter your First Name"
          onChange={getInfo}
          name="fname"
        />
        <br />
        <input
          type="text"
          placeholder="Enter your Last Name"
          name="lname"
          onChange={getInfo}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your E-mail"
          onChange={getInfo}
          name="email"
        />
        <br />
        <input
          type="number"
          placeholder="Enter your Phone No"
          onChange={getInfo}
          name="phone"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
