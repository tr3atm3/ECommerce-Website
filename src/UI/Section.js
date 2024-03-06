import React from "react";
import ProductInfo from "./ProductInfo";
import classes from "./Section.module.css";

const Section = (props) => {
  const products = (
    <div className={classes.products}>
      {props.productsArr.map((item) => (
        <ProductInfo item={item} />
      ))}
    </div>
  );
  return (
    <div className={classes.main}>
      <h1>{props.heading}</h1>
      {products}
    </div>
  );
};

export default Section;
