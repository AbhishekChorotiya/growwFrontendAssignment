import React from "react";
import classes from "./payments.module.css";
import CardsSvg from "../svgs/cardsSvgs";
import CodSvg from "../svgs/codSvg";
import { useUserDataStore } from "../store/zustland";

const PaymentMethod = () => {
  const { payment_method } = useUserDataStore();

  function handleActive(data) {
    useUserDataStore.setState({
      payment_method: data,
    });
  }

  return (
    <>
      <span style={{ color: "var(--foreground)", margin: "0rem " }}>
        Payments Method
      </span>
      <div
        className={classes.options}
        onClick={() => handleActive("cards")}
        style={{
          backgroundColor: `${
            payment_method == "cards" ? "var(--primary)" : "transparent"
          }`,
        }}
      >
        <div className={classes.icon}>
          <CardsSvg active={payment_method} />
        </div>
        <span
          style={{
            color: `${
              payment_method == "cards"
                ? "var(--primary-foreground)"
                : "var(--foreground)"
            }`,
          }}
        >
          Credit / Debit Cards
        </span>
      </div>
      <div
        className={classes.options}
        style={{
          backgroundColor: `${
            payment_method == "upi" ? "var(--primary)" : "transparent"
          }`,
        }}
        onClick={() => handleActive("upi")}
      >
        <div className={classes.icon}>
          <img
            src="https://www.vectorlogo.zone/logos/upi/upi-icon.svg"
            width="25px"
            alt="upi_logo"
          ></img>
        </div>
        <span
          style={{
            color: `${
              payment_method == "upi"
                ? "var(--primary-foreground)"
                : "var(--foreground)"
            }`,
          }}
        >
          UPI
        </span>
      </div>
      <div className={classes.options} style={{ border: "1px solid gray" }}>
        <div className={classes.icon}>
          <CodSvg />
        </div>
        <span style={{ color: "gray" }}>Cash On Delivery</span>
      </div>
    </>
  );
};

export default PaymentMethod;
