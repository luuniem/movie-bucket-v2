import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.scss";
import TV from "./components/TV/TV";
import FilteredTitles from "./components/FilteredTitles/FilteredTitles";
import Header from "./UI/Header";
import Menu from "./components/Menu/Menu";
import Burger from "./components/Burger/Burger";

const App = props => {
  const { children } = props;

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
      <Header>{children}</Header>
      <div className="main__content" ref={node}>
        <Burger open={open} setOpen={setOpen} />

        <Menu open={open} setOpen={setOpen} />
      </div>
      <FilteredTitles>{children}</FilteredTitles>
    </div>
  );
};

export default App;
