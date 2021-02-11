import React, { useState } from "react";
import "./App.css";

// const App = () => {
//   const [fname, setFname] = useState();

//   const [lname, setLname] = useState();

//   const [fullName, setFullName] = useState({ fname: "", lname: "" });

//   const txtinput = (event) => {
//     setFname(event.target.value);
//   };

//   const txtinputwo = (event) => {
//     setLname(event.target.value);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     setFullName({ fname: fname, lname: lname });
//   };

//   return (
//     <>
//       <div className="body">
//         <form onSubmit={onSubmit}>
//           <h1>Hello {fullName}</h1>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             onChange={txtinput}
//             value={fname}
//             className="inputBox"
//           />
//           <input
//             type="text"
//             className="inputBox"
//             placeholder="Enter your Last Name"
//             onChange={txtinputwo}
//             value={lname}
//           />

//           <button type="submit" className="submitButton">
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

////-------------------------- DEBU---------------------------------////

// const App = () => {
//   const [fname, setfname] = useState("");
//   const [lname, setlname] = useState("");
//   const [fullName, setFullName] = useState({ fName: "", lName: "" });
//   const inp1 = (e) => {
//     setfname(e.target.value);
//   };
//   const inp2 = (e) => {
//     setlname(e.target.value);
//   };
//   const setName = (e) => {
//     e.preventDefault();
//     setFullName({ fName: fname, lName: lname });
//   };
//   return (
//     <>
//       <h1>
//         hello {fullName.fName} {fullName.lName}
//       </h1>
//       <form onSubmit={setName}>
//         <input onChange={inp1} type="text" />
//         <input onChange={inp2} type="text" />
//         <button type="submit">click</button>
//       </form>
//     </>
//   );
// };

////-------------------------- DEBU---------------------------------////
const App = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [fullName, setFullName] = useState({ fname: "", lname: "" });

  const getfName = (e) => {
    setfName(e.target.value);
  };

  const getlName = (e) => {
    setlName(e.target.value);
  };

  const submitName = () => {
    setFullName({ fname: fName, lname: lName });
  };

  return (
    <>
      <div>
        <h1>
          Hello {fullName.fname} {fullName.lname}
        </h1>
        <input type="text" onChange={getfName} />
        <br />
        <input type="text" onChange={getlName} />
        <br />
        <button onClick={submitName}>Submit</button>
      </div>
    </>
  );
};
export default App;
