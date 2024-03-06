import React from "react";
import Nav from "../UI/Nav";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <Nav />
      <h1>The Generics</h1>
    </div>
  );
};

export default Header;
