import React from "react";
import classes from "./Nav.module.css";
import CardButton from "../Cart/CartButton";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <ul className={classes.nav}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>Store</li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <CardButton onOpen={props.onOpen} />
    </ul>
  );
};

export default Nav;
