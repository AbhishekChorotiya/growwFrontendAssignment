import React, { useEffect, useState } from "react";
import classes from "./checkout.module.css";
import Navigation from "../navigation/navigation";
import Address from "../address/address";
import Card from "../productCard/card";
import Summary from "../orderSummary/summary";
import Main from "../main";
import { useProductsStore } from "../store/zustland";
import { useQuery } from "react-query";

const Checkout = (props) => {
  const { products, subtotal, tax, refetch_bool } = useProductsStore();

  const { data, refetch } = useQuery("cart", fetchProducts, {
    enabled: false,
  });

  useEffect(() => {
    if (!refetch_bool) refetch();
  }, []);

  async function fetchProducts() {
    const res = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details"
    );
    const data = await res.json();
    var sum = 0;

    for (let val of data.products) {
      sum += val.price * val.quantity;
    }
    console.log("Query_reRendered");
    useProductsStore.setState({
      products: data.products,
      subtotal: Math.floor(sum * 100) / 100,
      tax: Math.floor(0.18 * sum * 100) / 100,
      refetch_bool: true,
    });

    return data.products;
  }

  return (
    <Main theme={props.theme}>
      <div className={classes.checkout}>
        <Navigation active={1} />
        <div className={classes.wraper}>
        <Address />
          <div style={{ display: "flex" }}>
            <div
              style={{
                color: "var(--foreground)",
                marginTop: "0.5rem",
                fontSize: "1.1rem",
                width: "70%",
              }}
            >
              Order List
            </div>
            <div
              className={classes.summary_txt}
              style={{
                color: "var(--foreground)",
                marginTop: "0.5rem",
                width: "30%",
                fontSize: "1.1rem",
              }}
            >
              Order Summary
            </div>
          </div>
          <div className={classes.details}>
            <div className={classes.left}>
              {products.map((a) => {
                return (
                  <Card
                    key={a.id}
                    id={a.id}
                    title={a.title}
                    price={a.price}
                    quantity={a.quantity}
                    image={a.image}
                  />
                );
              })}
            </div>
            <span className={classes.temp_text}>Order Summary
            </span>
            <div className={classes.right}>
              <Summary subtotal={subtotal} tax={tax} />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Checkout;
