import React from "react";
import classes from "./summary.module.css";
import { useProductsStore, useUserDataStore } from "../store/zustland";
import { useNavigate } from "react-router-dom";

const FinialSummary = (props) => {
  const {subtotal,tax} = useProductsStore()
  const {payment_method,contact} = useUserDataStore()
  const navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }
  return (
    <>

      <div className={classes.data}>
        <span>Address</span>
        <div style={{flex:'1',display:'flex',justifyContent:'right'}}>
        <span style={{maxWidth:'60%',display:'flex',textAlign:'right'}}>Hostel 6, MNIT Jaipur, Jhalana Gram, Malviya Nagar (302017)</span>
        </div>
      </div>
      <div className={classes.data}>
        <span>Contact</span>
        <span style={{maxWidth:'60%'}}>{contact}</span>
      </div>
      <div className={classes.data} style={{marginBottom:'1rem',borderBottom:'1px solid gray',paddingBottom:'1rem'}}>
        <span>Payment Method</span>
        <span style={{maxWidth:'60%'}}>{payment_method.toUpperCase()}</span>
      </div>
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
        <span>Total Cart Items</span>
        <span>{props.totalItems}</span>
      </div>
      <div className={classes.data}>
        <span>Extra Discounts</span>
        <span>N/A</span>
      </div>
      <div className={classes.data}>
        <span>Coupon Applied</span>
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

      <button className={classes.checkout_btn} style={{marginTop:'2rem'}} onClick={handleClick}>Continue Shopping</button>
      </>
  );
};

export default FinialSummary;
