import React from "react";
import Checkout from "./checkout/checkout";
import classes from "./main.module.css";
const Main = () => {
  return (
    <>
      <div className={classes.outter}>
        <div className={classes.inner}>
        <Checkout />
        </div>
      </div>
    </>
  );
};

export default Main;
