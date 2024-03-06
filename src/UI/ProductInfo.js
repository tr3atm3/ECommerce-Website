import React from "react";
import classes from "./ProductInfo.module.css";
const ProductInfo = ({ item }) => {
  return (
    <div className={classes.product}>
      <h2>{item.title}</h2>
      <div className={classes.imageContainer}>
        <img src={item.imageUrl} alt="differecnt types of colors"></img>
      </div>
      <div className={classes.price}>
        <h3>${item.price}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
