import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../images/logo-310x310.png'

const Nav = () => {
  const style = {textDecoration: 'none', color: 'black'}
  return (
    <nav>
      <div className="nav-items-container">
        <img src={Logo} alt="SIBI Logo" width="90px" height="90px"/>
        <ul>
          <NavLink exact={true} to="/" activeStyle={style}>Search</NavLink>
          <NavLink to="/review" activeStyle={style}>Review</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
