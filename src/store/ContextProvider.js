import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  token: "",
  items: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount = state.totalAmount + action.item.price;
    const existingItemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems = [...state.items];
    if (existingItem) {
      let updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "LOGIN") {
    let token;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCiEPQhh-5cxw0GuD2RX1ZShwOP-hE8B_Q",
      {
        method: "POST",
        body: JSON.stringify(action.details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          res
            .json()
            .then((err) => {
              console.log(err);
              throw new Error(err.error.message);
            })
            .catch((err) => {
              alert(err);
            });
        }
      })
      .then((data) => {
        console.log(data);
        token = data.idToken;
        localStorage.setItem("tokenId", token);
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      items: state.items,
      totalAmount: state.totalAmount,
      token: token,
    };
  }
  return defaultState;
};

const ContextProvider = (props) => {
  const [currentItems, dispatchAction] = useReducer(cartReducer, defaultState);

  const addItemToCart = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const login = (details) => {
    dispatchAction({ type: "LOGIN", details: details });
  };

  const contextValue = {
    items: currentItems.items,
    totalAmount: currentItems.totalAmount,
    token: currentItems.token,
    login: login,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
