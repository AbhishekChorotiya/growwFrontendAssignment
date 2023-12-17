import React, { useEffect, useState } from "react";
import classes from "./checkout.module.css";
import Navigation from "../navigation/navigation";
import Address from "../address/address";
import Card from "../productCard/card";
import Summary from "../orderSummary/summary";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details"
    );
    const data = await res.json();
    setProducts(data.products);
    console.log(data.products);
    var sum = 0;
    for (let val of data.products) {
      sum += val.price * val.quantity;
    }
    setSubtotal(Math.floor(sum * 100) / 100);
    setTax(Math.floor(0.18 * sum * 100) / 100); //18% GST Tax
  }

  return (
    <div className={classes.checkout}>
      <Navigation active={1} />
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
        <div className={classes.right}>
          <Summary subtotal={subtotal} tax={tax} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
