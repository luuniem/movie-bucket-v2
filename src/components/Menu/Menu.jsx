import React, { Fragment } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import "./Menu.scss";
import { BrowserRouter, Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} className="styled__menu">
      <BrowserRouter>
        <ul className="menu__list">
          <li>
            <Link to="bucketList">Bucket List</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/">Discover</Link>
          </li>
          <li>
            <Link to="/top-rated-movies">Top Rated </Link>
          </li>
          <li>
            <Link to="/now-playing-movies">Now Playing </Link>
          </li>
          <li>
            <Link to="/upcoming-movies">Upcoming </Link>
          </li>
          <li>
            <Link to="/tv-shows">TV Shows </Link>
          </li>
        </ul>
      </BrowserRouter>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
