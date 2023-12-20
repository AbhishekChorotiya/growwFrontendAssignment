import React from "react";
import { useProductsStore, useUserDataStore } from "../store/zustland";
import classes from "./order.module.css";
import Main from "../main";
import Navigation from "../navigation/navigation";
import FinialSummary from "../orderSummary/finialSummary";
import { useNavigate } from "react-router-dom";

const Failed = () => {
  const { products, subtotal, tax } = useProductsStore();
    const navigate = useNavigate()
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
            <div style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <svg style={{margin:'0 1rem'}} width='2rem' fill="var(--primary)" viewBox="0 -8 528 528">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>fail</title>
                  <path d="M264 456Q210 456 164 429 118 402 91 356 64 310 64 256 64 202 91 156 118 110 164 83 210 56 264 56 318 56 364 83 410 110 437 156 464 202 464 256 464 310 437 356 410 402 364 429 318 456 264 456ZM264 288L328 352 360 320 296 256 360 192 328 160 264 224 200 160 168 192 232 256 168 320 200 352 264 288Z"></path>
                </g>
              </svg>
              <span style={{ color: "var(--primary)" }}>Purchase Failed !</span>
            </div>
            <span
              style={{
                backgroundColor: "var(--primary)",
                padding: "0rem 1rem",
                margin: "1rem",
                borderRadius: "0.2rem",
                cursor:'pointer',
                color:'var(--foreground)'
              }}
              onClick={()=>navigate('/payment')}
            >
              Retry Payment
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

export default Failed;
