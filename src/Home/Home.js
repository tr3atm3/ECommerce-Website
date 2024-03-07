import React from "react";
import classes from "./Home.module.css";
import HomeInfo from "../UI/HomeInfo";

const tours = [
  {
    date: "JUL16",
    city: "Kolkata, IN",
    location: "RamKrishna Mission Institute",
  },
  {
    date: "JUL20",
    city: "Kolkata, IN",
    location: "RamKrishna Mission Institute",
  },
  {
    date: "JUL31",
    city: "Kolkata, IN",
    location: "RamKrishna Mission Institute",
  },
  {
    date: "AUG5",
    city: "Kolkata, IN",
    location: "RamKrishna Mission Institute",
  },
  {
    date: "AUG17",
    city: "Kolkata, IN",
    location: "RamKrishna Mission Institute",
  },
  {
    date: "AUG25",
    city: "Kolkata, IN",
    location: "RamKrishna Mission Institute",
  },
];
const Home = () => {
  const tourList = (
    <ul className={classes.listItems}>
      {tours.map((item) => (
        <HomeInfo item={item} />
      ))}
    </ul>
  );
  return (
    <div className={classes.home}>
      <div className={classes.homeBtns}>
        <button className={classes.albumBtn}>Get our latest Album</button>
        <button className={classes.playBtn}>▶</button>
      </div>
      <h1 className={classes.title}>Tours</h1>
      {tourList}
    </div>
  );
};

export default Home;
