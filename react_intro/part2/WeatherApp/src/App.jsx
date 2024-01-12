import React, { useState } from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Weather Forecast App</h1>
      <Weather />
    </div>
  );
}

export default App;