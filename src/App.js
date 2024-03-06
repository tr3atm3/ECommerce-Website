import React, { useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer.js";
import Cart from "./Cart/Cart.js";
import ContextProvider from "./store/ContextProvider.js";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const hideCart = () => {
    setShowCart(false);
  };
  const openCart = () => {
    setShowCart(true);
  };
  return (
    <ContextProvider>
      {showCart && <Cart onHide={hideCart} />}
      <Header onOpenCart={openCart} />
      <Body />
      <Footer />
    </ContextProvider>
  );
};

export default App;
