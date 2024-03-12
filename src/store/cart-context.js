import { createContext } from "react";

const CartContext = createContext({
  token: "",
  items: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  login: () => {},
});

export default CartContext;
