import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
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

  const contextValue = {
    items: currentItems.items,
    totalAmount: currentItems.totalAmount,
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
