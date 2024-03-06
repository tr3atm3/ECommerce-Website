import React, { useState } from "react";
import classes from "./Cart.module.css";
import CartItem from "../UI/CartItem";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
const Cart = (props) => {
  const [cartItems, setCartItems] = useState(cartElements);

  const removeItemFromCart = (item) => {
    setCartItems((prev) => {
      return prev.filter((i) => i.title !== item.title);
    });
  };

  const cartItemsUi = (
    <ul>
      {cartItems.map((item) => (
        <CartItem
          key={item.title}
          item={item}
          toRemoveItem={removeItemFromCart.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <div className={classes.cart}>
      <div className={classes.cartHeader}>
        <h1>Cart</h1>
        <button onClick={props.onHide}>X</button>
      </div>
      <div className={classes.contentHeader}>
        <div>
          <h2>Item</h2>
          <div className={classes.underline}></div>
        </div>
        <div>
          <h2>Price</h2>
          <div className={classes.underline}></div>
        </div>
        <div>
          <h2>Quantity</h2>
          <div className={classes.underline}></div>
        </div>
      </div>
      {cartItemsUi}
    </div>
  );
};

export default Cart;
