import React, { useContext } from "react";
import classes from "./Nav.module.css";
import CardButton from "../Cart/CartButton";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
const Nav = (props) => {
  const authCtx = useContext(CartContext);
  return (
    <ul className={classes.nav}>
      <li>
        <Link to="/">Home</Link>
      </li>
      {authCtx.isLoggedin && (
        <li>
          <Link to="/home">Store</Link>
        </li>
      )}
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
