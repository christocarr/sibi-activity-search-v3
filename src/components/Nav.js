import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../images/logo-310x310.png'

const Nav = () => {
  return (
    <nav>
      <div className="nav-items-container">
        <img src={Logo} alt="SIBI Logo" width="90px" />
        <ul>
          <NavLink to="/">Search</NavLink>
          <NavLink to="/review">Review</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
