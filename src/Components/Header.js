import React from "react";
import logo from "../logo.png";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="globalHeader">
      <Link to="/">
        <img alt={"AccMan logo"} id="logoAccMan" src={logo} />
      </Link>
    </div>
  );
};

export default Header;
