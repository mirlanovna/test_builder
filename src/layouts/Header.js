import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyled } from "../assets/Global";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header_taps">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/page">Home</NavLink>
      </div>
      <div className="header_wrapper"></div>
    </HeaderStyled>
  );
};

export default Header;
