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
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Test from "./components/Test";

const App = props => {
  const { children } = props;

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
      <Header>{children}</Header>
      <Burger open={open} setOpen={setOpen} />
      <BrowserRouter>
        <>
          <Menu open={open} setOpen={setOpen} />

          <Switch>
            <Route path="/search" component={FilteredTitles} />
            <Route path="/tv-shows" component={TV} />
            <Route path="/test" component={Test} />
          </Switch>
        </>
      </BrowserRouter>
      <div className="main__content" ref={node}></div>
    </div>
  );
};

export default App;
