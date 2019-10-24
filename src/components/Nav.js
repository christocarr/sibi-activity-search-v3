import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo-310x310.png'

const Nav = () => {
  return (
    <nav>
      <div className="nav-items-container">
        <img src={Logo} alt="SIBI Logo" width="90px" />
        <ul>
          <Link to="/">Search</Link>
          <Link to="/review">Review</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
