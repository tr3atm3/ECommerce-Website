import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./CardButton.module.css";
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  return (
    <button className={classes.cartButton} onClick={props.onOpen}>
      Cart<span>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
