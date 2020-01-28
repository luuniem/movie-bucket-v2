import React, { useState } from "react";
import Search from "../components/Search";
import "./Header.scss";
import Burger from "./../components/Burger/Burger";

const Header = props => {
  const { children } = props;

  return (
    <section className="header__section">
      <Search>{children}</Search>
    </section>
  );
};

export default Header;
