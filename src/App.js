import React from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.scss";
import TV from "./components/TV";

function App() {
  return (
    <div className="App">
      <TV />
    </div>
  );
}

export default App;
