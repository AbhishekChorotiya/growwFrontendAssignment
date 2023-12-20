import React from "react";
import { useProductsStore, useUserDataStore } from "../store/zustland";
import classes from "./order.module.css";
import Main from "../main";
import Navigation from "../navigation/navigation";
import FinialSummary from "../orderSummary/finialSummary";

const Successful = () => {
  const { contact, payment_method, card, upi } = useUserDataStore();
  const { products, subtotal, tax } = useProductsStore();

  var sum = 0;
  for (let val of products) {
    sum += val.quantity;
  }

  return (
    <Main>
        <Navigation active={3} />
      <div className={classes.outter}>
        <div className={classes.inner}>
          <div className={classes.upper}>
            <span style={{ color: "var(--primary)" }}>
              Thankyou For Ordering With Us !
            </span>
            <span>
              Your order will reach on your address within 5 working days
            </span>
            <span style={{ fontSize: "1rem" }}>
              Your Order ID : #XYZ123ABC890
            </span>
          </div>
          <div className={classes.lower}>
            <div className={classes.left}>
              <span style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                Order List
              </span>
              <div className={classes.left_table}>
                <div>
                  <span className={classes.srno}>Sno.</span>
                  <span
                    className={classes.title}
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    {" "}
                    Product Name{" "}
                  </span>
                  <span className={classes.quantity}>Quantity</span>
                  <span className={classes.price}>Amount</span>
                </div>
                {products.map((item, i) => (
                  <div key={i}>
                    <span className={classes.srno}>{i + 1}.</span>
                    <span className={classes.title}>{item.title}</span>
                    <span className={classes.quantity}>{item.quantity}</span>
                    <span className={classes.price}>
                      {Math.floor(item.quantity * item.price * 100) / 100}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <span className={classes.summary_title}> SUMMARY</span>
            <div className={classes.right}>
              <FinialSummary totalItems={sum} />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Successful;
