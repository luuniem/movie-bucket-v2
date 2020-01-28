import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import "./Menu.scss";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} className="styled__menu">
      <ul className="menu__list">
        <li>My Bucket List</li>

        <li>Upcoming Movies</li>
        <li>Most Popular Movies</li>
        <li>TEST</li>
        <li>TEST</li>
        <li>TEST</li>
      </ul>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
