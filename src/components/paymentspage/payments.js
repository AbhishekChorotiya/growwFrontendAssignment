import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import Main from "../main";
import classes from "./payments.module.css";
import ShortSummary from "../orderSummary/shortSummary";

import { useUserDataStore } from "../store/zustland";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "./paymentMethod";

const Payments = (props) => {
  const navigate = useNavigate();

  const [card, setCard] = useState({
    name: "",
    number: "",
    cvv: "",
    expiry: "",
  });

  const [upi_merchant, setUpiMerchant] = useState("");

  const [upi_id, setUpiId] = useState("");

  const { payment_method } = useUserDataStore();

  const handleExpiry = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");

    if (e.target.value.length >= 2) {
      const month = e.target.value.slice(0, 2);
      if (parseInt(month, 10) > 12) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }
    }

    if (e.target.value.length > 2) {
      e.target.value =
        e.target.value.slice(0, 2) + "/" + e.target.value.slice(2);
    }

    setCard({ ...card, expiry: e.target.value });
  };

  const handleCard = (event) => {
    event.target.value = event.target.value.replace(/\D/g, "");

    if (event.target.value.length > 0) {
      event.target.value = event.target.value.match(/.{1,4}/g).join("    ");
    }

    setCard({ ...card, number: event.target.value.replace(/\s/g, "") });
  };

  function handleCVV(e) {
    e.target.value = e.target.value.replace(/\D/g, "");
    setCard({ ...card, cvv: e.target.value });
  }

  function handleSubmit() {
    useUserDataStore.setState({
      ...useUserDataStore.getState(),
      card: {
        name: card.name,
        number: card.number,
        expiry: card.expiry,
        cvv: card.cvv,
      },
      upi: {
        merchant: upi_merchant,
        id: upi_id,
      },
    });

    console.log(useUserDataStore.getState());
    navigate("/");
  }

  function handleUpiMerchant(merchant) {
    if (merchant == upi_merchant) {
      setUpiMerchant("");
    } else {
      setUpiMerchant(merchant);
    }
  }

  return (
    <Main theme={props.theme}>
      <Navigation active={2} />

      <div className={classes.outter_box}>
        <div className={classes.left}>
          <div className={classes.upper}>
            <PaymentMethod />
          </div>
          <div className={classes.lower}></div>
        </div>

        <div className={classes.right}>
          <div className={classes.upper}>
            {payment_method == "upi" ? (
              <>
                {" "}
                <span style={{ color: "var(--foreground)" }}>UPI Details</span>
                <div className={classes.upi}>
                  <div className={classes.upi_warp}>
                    <div
                      style={{
                        border:
                          upi_merchant == "phonepe"
                            ? "3px solid var(--primary)"
                            : "",
                      }}
                      onClick={() => handleUpiMerchant("phonepe")}
                    >
                      <img
                        className={classes.img}
                        src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"
                      />
                    </div>
                    <div
                      style={{
                        border:
                          upi_merchant == "googlepay"
                            ? "3px solid var(--primary)"
                            : "",
                      }}
                      onClick={() => handleUpiMerchant("googlepay")}
                    >
                      <img
                        className={classes.img}
                        style={{ padding: "0.1rem 0rem" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                      />
                    </div>
                  </div>
                  <div className={classes.upi_warp}>
                    <div
                      style={{
                        border:
                          upi_merchant == "paytm"
                            ? "3px solid var(--primary)"
                            : "",
                      }}
                      onClick={() => handleUpiMerchant("paytm")}
                    >
                      <img
                        className={classes.img}
                        style={{ padding: "0.3rem 0.2rem" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
                      />
                    </div>
                    <div
                      style={{
                        border:
                          upi_merchant == "amazonpay"
                            ? "3px solid var(--primary)"
                            : "",
                      }}
                      onClick={() => handleUpiMerchant("amazonpay")}
                    >
                      <img
                        className={classes.img}
                        style={{ padding: "0.3rem 0.2rem" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/2/29/Amazon_Pay_logo.svg"
                      />
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    color: "var(--foreground)",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  OR
                </span>
                <input
                  placeholder="Enter UPI ID"
                  maxLength={28}
                  name="upi_id"
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </>
            ) : (
              <>
                {" "}
                <span style={{ color: "var(--foreground)" }}>Card Details</span>
                <input
                  placeholder="Holder's Name"
                  type="text"
                  name="name"
                  maxLength={30}
                  onChange={(e) => setCard({ ...card, name: e.target.value })}
                />
                <input
                  placeholder="Card Number"
                  maxLength={28}
                  onChange={handleCard}
                />
                <div className={classes.expiry_warp}>
                  <span
                    style={{ color: "var(--foreground)", fontSize: "1.1rem" }}
                  >
                    VALID THRU
                  </span>
                  <div
                    className={classes.input_warp}
                    style={{ display: "flex", width: "100%" }}
                  >
                    <input
                      placeholder="04/30"
                      maxLength={5}
                      name="expiry"
                      onChange={handleExpiry}
                    />
                    <input
                      placeholder="CVV"
                      type="password"
                      maxLength={3}
                      onChange={handleCVV}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            className={classes.lower}
            style={{
              borderTop: "1px solid gray",
              display: "flex",
              fontSize: "1.1rem",
              paddingTop: "2rem",
            }}
          >
            <ShortSummary submit={handleSubmit} subtotal={10} tax={1} />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Payments;
