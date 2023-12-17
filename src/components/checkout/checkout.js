import React from "react";
import classes from "./checkout.module.css";
import Navigation from "../navigation/navigation";
import Address from "../address/address";
import Card from "../productCard/card";

const Checkout = () => {
  return (
    <div className={classes.checkout}>
      <Navigation />
      <Address />
      <span
        style={{
          color: "hsl(0, 0%, 95%)",
          marginTop: "0.5rem",
          fontSize: "1.1rem",
        }}
      >
        Order List
      </span>
      <div className={classes.details}>
        <div className={classes.left}>

        <Card/>
        <Card/>
        <Card/>

        </div>
        <div className={classes.right}></div>
      </div>
    </div>
  );
};

export default Checkout;
