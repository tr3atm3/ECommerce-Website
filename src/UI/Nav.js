import React from "react";
import classes from "./Nav.module.css";
const Nav = () => {
  return (
    <ul className={classes.nav}>
      <li>Home</li>
      <li>Store</li>
      <li>About</li>
      <button>
        Cart<span>0</span>
      </button>
    </ul>
  );
};

export default Nav;
