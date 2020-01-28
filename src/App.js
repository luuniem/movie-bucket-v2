import React from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.scss";
import TV from "./components/TV";
import Header from "./UI/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main__content">
        <TV />
      </div>
    </div>
  );
}

export default App;
