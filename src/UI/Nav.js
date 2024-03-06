import React from "react";
import classes from "./Nav.module.css";
const Nav = (props) => {
  return (
    <ul className={classes.nav}>
      <li>Home</li>
      <li>Store</li>
      <li>About</li>
      <button onClick={props.onOpen}>
        Cart<span>0</span>
      </button>
    </ul>
  );
};

export default Nav;
