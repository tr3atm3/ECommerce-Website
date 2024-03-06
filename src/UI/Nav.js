import React, { useContext } from "react";
import classes from "./Nav.module.css";
import CartContext from "../store/cart-context";
const Nav = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  return (
    <ul className={classes.nav}>
      <li>Home</li>
      <li>Store</li>
      <li>About</li>
      <button onClick={props.onOpen}>
        Cart<span>{numberOfItems}</span>
      </button>
    </ul>
  );
};

export default Nav;
