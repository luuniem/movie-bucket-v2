import React, { useState } from "react";
import Search from "../components/Search/Search";
import "./Header.scss";
import Burger from "./../components/Burger/Burger";

const Header = props => {
  const { children, enteredSearch, onChangeSearch } = props;

  return (
    <section className="header__section">
      <h2>MOVIE BUCKET</h2>
    </section>
  );
};

export default Header;
