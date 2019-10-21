import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <Link to="/">Search</Link>
        <Link to="/preview">Preview</Link>
      </ul>
    </nav>
  );
};

export default Nav;
