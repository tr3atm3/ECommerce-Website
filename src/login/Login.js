import React, { useContext, useRef } from "react";
import classes from "./Login.module.css";
import CartContext from "../store/cart-context";
const Login = () => {
  const authCtx = useContext(CartContext);
  const email = useRef("");
  const password = useRef("");
  const handleClickButton = () => {
    const details = {
      email: email.current.value,
      password: email.current.value,
      returnSecureToken: true,
    };
    authCtx.login(details);
  };
  return (
    <div className={classes.login}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={email} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={password} />
      </div>
      <button onClick={handleClickButton}>Login</button>
    </div>
  );
};

export default Login;
