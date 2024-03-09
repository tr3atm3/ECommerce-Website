import React, { useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer.js";
import Cart from "./Cart/Cart.js";
import ContextProvider from "./store/ContextProvider.js";
import About from "./About/About.js";
import Home from "./Home/Home.js";
import Contact from "./ContactUs/Contact.js";

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
      <Outlet />
      <Footer />
    </ContextProvider>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
