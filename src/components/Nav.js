import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <Link to="/">Search</Link>
        <Link to="/checkout">Checkout</Link>
      </ul>
    </nav>
  );
};

export default Nav;
