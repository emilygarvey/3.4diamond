import React, { useState } from "react";
import "./styles.css";

/*
1. Replace the color variable with a "state variable" that is named color.
2. Update state inside the function handleClick so the color of div className diamond 
toggles between '#b9f2ff' and 'pink'.

*/
function App() {
  let color = "#b9f2ff";

  function handleClick() {}

  // DO NOT MODIFY CODE BELOW THIS LINE
  return (
    <div className="app">
      <div
        className="diamond"
        style={{
          backgroundColor: color
        }}
        data-testid="diamond"
      ></div>
      <button onClick={handleClick}>diamond changer</button>
    </div>
  );
}

export default App;
