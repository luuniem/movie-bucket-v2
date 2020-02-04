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
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
            <Route path="/"></Route>
            <Route path={"/search"} exact component={FilteredTitles} />
            <Route path={"/tv-shows"} exact component={TV} />
          </Switch>
        </>
      </BrowserRouter>
      <div className="main__content" ref={node}>
        {/* <FilteredTitles /> */}
      </div>
    </div>
  );
};

export default App;
