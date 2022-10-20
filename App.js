import "./App.css";
import Navbar from "./Customcomponents/Navbar";
import TextArea from "./Customcomponents/TextArea";
import React, { useState } from "react";
import Alert from "./Customcomponents/Alert";
import About from "./Customcomponents/About";
// import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Darkmode from "./customcomponents/Darkmode";

// let marks = 10;
function App() {
  let [mode, setmode] = useState("dark");
  let [alert, setalert] = useState(null);
  // Alert Box
  // const [alert1,setAlert] = useState(null);
  let showAlert = (message, type) => {
    setalert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
    // console.log(alert.msg);
    // console.log(alert.Type);
  };

  // CHange The Mode
  let Chmode = () => {
    if (mode === "light") {
      // document.body.style.backgroundColor = 'black';
      setmode("dark");
      console.log("converting to Dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Is Enabled", "success");
    } else {
      // document.body.style.backgroundColor = 'white';
      setmode("light");
      console.log("converting to Light");
      document.body.style.backgroundColor = "skyblue";
      showAlert("Light Mode Is Enabled", "success");
    }
  };
  return (
    <>
      <div className="App">
        <Navbar homeLink="home" drop1text="drop2" cmode={Chmode} mode={mode} />
        <Alert alert={alert} />
        <About />
        <TextArea />
      </div>
    </>
  );
}

export default App;
