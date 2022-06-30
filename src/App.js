import './App.css';
import Header from "./components/header";
import Dice from "./components/dice";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === `light`) {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been anabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been anabled", "success");
    }
  };
  return (
    <div className="">
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      
      <hr />
      <Dice />
      <hr />
      <TextForm heading="Enter the Text" showAlert={showAlert} />
    </div>
  );
}























// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
