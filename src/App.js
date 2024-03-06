import React, { useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer.js";
import Cart from "./Cart/Cart.js";

const App = () => {
  const [showCart, setShowCart] = useState(true);
  const hideCart = () => {
    setShowCart(false);
  };
  const openCart = () => {
    setShowCart(true);
  };
  return (
    <div>
      {showCart && <Cart onHide={hideCart} />}
      <Header onOpenCart={openCart} />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
