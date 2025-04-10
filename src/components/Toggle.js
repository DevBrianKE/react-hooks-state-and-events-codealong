import React, { useState }from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false) // Initial state: false (OFF)

  function handleClick() {
    setIsOn((isOn) => !isOn) //toggle the state
  }

  const buttonStyle = {
    background:isOn ? "green" : "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
  return <button onClick={handleClick} style={buttonStyle}>{isOn ? "ON" : "OFF"}</button>; //conditional rendering
}

export default Toggle;
