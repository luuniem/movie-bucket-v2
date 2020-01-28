import React from "react";
import Search from "../components/Search";
import "./Header.scss";

const Header = props => {
  const { children } = props;
  return (
    <section className="header__section">
      <Search>{children}</Search>
    </section>
  );
};

export default Header;
