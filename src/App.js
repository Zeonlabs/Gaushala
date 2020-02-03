import React, { useState } from "react";
import "./App.css";
import { Button } from "antd";
// const ipc = require('electron').ipcRenderer;
// import {ipcRenderer as ipc} from 'electron'
// const ipc = window.require("electron").ipcRenderer;

function App() {
  const [name, setName] = useState("");

  const handelOnClick = () => {
    // console.log("this is a log in a button Click :->", name);
    // ipc.send("create-user");
    // ipc.on("a", (event, data) => {
    //   console.log(data, "iopssss");
    // });
  };

  const handelText = e => {
    setName(e.target.value);
    // console.log("TCL: handelText -> e.target.value", e.target.value);
  };

  return (
    <div className="App">
      <p>Name</p>
      <Button>Antd</Button>
      <input type="text" value={name} onChange={handelText} />
      <p>Add</p>
      <input />
      <button onClick={handelOnClick}>Click!</button>
    </div>
  );
}

export default App;
