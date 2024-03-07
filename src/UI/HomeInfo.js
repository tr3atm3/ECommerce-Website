import React from "react";
import classes from "./HomeInfo.module.css";
const HomeInfo = ({ item }) => {
  return (
    <>
      <li className={classes.listItem}>
        <h3 className={classes.date}>{item.date}</h3>
        <p className={classes.city}>{item.city}</p>
        <p className={classes.location}>{item.location}</p>
        <button className={classes.buyBtn}>Buy Tickets</button>
      </li>
      <div className={classes.borderLine}></div>
    </>
  );
};

export default HomeInfo;
