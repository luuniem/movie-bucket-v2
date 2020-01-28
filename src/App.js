import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.scss";
import TV from "./components/TV";
import Header from "./UI/Header";
import Menu from "./components/Menu/Menu";
import Burger from "./components/Burger/Burger";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="App">
      <Header />

      <div className="main__content" ref={node}>
        <Burger open={open} setOpen={setOpen} />

        <Menu open={open} setOpen={setOpen} />
      </div>
      <TV />
    </div>
  );
}

export default App;
