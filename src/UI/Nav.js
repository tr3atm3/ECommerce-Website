import React from "react";
import classes from "./Nav.module.css";
import CardButton from "../Cart/CartButton";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <ul className={classes.nav}>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/">Store</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <CardButton onOpen={props.onOpen} />
    </ul>
  );
};

export default Nav;
