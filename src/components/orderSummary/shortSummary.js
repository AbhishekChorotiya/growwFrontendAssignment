import React from "react";
import classes from "./summary.module.css";
import { useProductsStore } from "../store/zustland";

const ShortSummary = (props) => {
  const {subtotal,tax} = useProductsStore()

  return (
    <>
      <div className={classes.data}>
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className={classes.data}>
        <span>Tax</span>
        <span>${tax}</span>
      </div>
      <div className={classes.data}>
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className={classes.data}>
        <span>Extra Discounts</span>
        <span>N/A</span>
      </div>
      <hr
        style={{
          marginTop: "1rem",
          marginBottom: "0.5rem",
          backgroundColor: "gray",
          borderWidth: "0",
          height: "1px",
        }}
      ></hr>
      <div className={classes.data}>
        <span>Total</span>
        <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
          ${Math.ceil((subtotal + tax) * 100) / 100}
        </span>
      </div>

      <button className={classes.checkout_btn} style={{marginTop:'2rem'}} onClick={props.submit}>Place Order</button>
      </>
  );
};

export default ShortSummary;
