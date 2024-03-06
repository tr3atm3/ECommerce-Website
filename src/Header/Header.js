import React from "react";
import Nav from "../UI/Nav";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={classes.header}>
      <Nav onOpen={props.onOpenCart} />
      <h1>The Generics</h1>
    </div>
  );
};

export default Header;
