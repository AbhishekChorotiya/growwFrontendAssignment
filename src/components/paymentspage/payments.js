import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import Main from "../main";
import classes from "./payments.module.css";
import ShortSummary from "../orderSummary/shortSummary";
import CardsSvg from "../svgs/cardsSvgs";
import CodSvg from "../svgs/codSvg";
import { useUserDataStore } from "../store/zustland";

const Payments = (props) => {
  const [active, setActive] = useState("cards");
  const [card, setCard] = useState({name:'',number:'',cvv:'',expiry:''});
  const [upi_id, setUpiId] = useState("");

  const validKeyForNumber = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Backspace",
  ];

  function handleChange(e) {
    if (e.target.name == "upi_id") {
      setUpiId(e.target.value);
    }

    if (e.target.name == "name") {
      setCard({ ...card,name: e.target.value });
    }
  }

  function handleCVV(e) {
    if (!validKeyForNumber.includes(e.key)) {
      e.preventDefault();
      return;
    }

  }

  function handleExpiry(e){

    if (!validKeyForNumber.includes(e.key)) {
      e.preventDefault();
      return
    }


    if(e.target.value.length==2 && e.key!='Backspace'){
      e.target.value+='/'
    }


  }

  function handleCard(e) {
    if (!validKeyForNumber.includes(e.key)) {
      e.preventDefault();
      return;
    }

    if (
      e.key == "Backspace" &&
      e.target.value.length > 4 &&
      e.target.value.length % 8 == 1
    ) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 4);
    }

    if (
      e.target.value.length % 4 == 0 &&
      e.target.value.length < 28 &&
      e.target.value.length > 0 &&
      e.key != "Backspace"
    ) {
      e.target.value += "    ";
    }

    useUserDataStore.setState({
      card: {
        number: e.target.value.replaceAll(" ", ""),
      },
    });
  }

  return (
    <Main theme={props.theme}>
      <Navigation active={2} />

      <div className={classes.outter_box}>
        <div className={classes.left}>
          <div className={classes.upper}>
            <span style={{ color: "var(--foreground)", margin: "0rem " }}>
              Payments Method
            </span>
            <div
              className={classes.options}
              onClick={() => setActive("cards")}
              style={{
                backgroundColor: `${
                  active == "cards" ? "var(--primary)" : "transparent"
                }`,
              }}
            >
              <div className={classes.icon}>
                <CardsSvg active={active} />
              </div>
              <span
                style={{
                  color: `${
                    active == "cards"
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
                  active == "upi" ? "var(--primary)" : "transparent"
                }`,
              }}
              onClick={() => setActive("upi")}
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
                    active == "upi"
                      ? "var(--primary-foreground)"
                      : "var(--foreground)"
                  }`,
                }}
              >
                UPI
              </span>
            </div>
            <div
              className={classes.options}
              style={{ border: "1px solid gray" }}
            >
              <div className={classes.icon}>
                <CodSvg />
              </div>
              <span style={{ color: "gray" }}>Cash On Delivery</span>
            </div>
          </div>
          <div className={classes.lower}></div>
        </div>

        <div className={classes.right}>
          <div className={classes.upper}>
            {active == "upi" ? (
              <>
                {" "}
                <span style={{ color: "var(--foreground)" }}>UPI Details</span>
                <div className={classes.upi}>
                  <div className={classes.upi_warp}>
                    <div>
                      <img
                        className={classes.img}
                        src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"
                      />
                    </div>
                    <div>
                      <img
                        className={classes.img}
                        style={{ padding: "0.1rem 0rem" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                      />
                    </div>
                  </div>
                  <div className={classes.upi_warp}>
                    <div>
                      <img
                        className={classes.img}
                        style={{ padding: "0.3rem 0.2rem" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
                      />
                    </div>
                    <div>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
                <input
                  placeholder="Card Number"
                  maxLength={28}
                  onKeyDown={handleCard}
                />
                <div
                  className={classes.expiry_warp}
                >
                  <span
                    style={{ color: "var(--foreground)", fontSize: "1.1rem" }}
                  >
                    VALID THRU
                  </span>
                  <div className={classes.input_warp} style={{display:'flex',width:'100%'}}>
                  <input
                    placeholder="04/30"
                    maxLength={5}
                    name='expiry'
                    onKeyDown={handleExpiry}
                  />
                  <input
                    placeholder="CVV"
                    type="password"
                    maxLength={3}
                    onKeyDown={handleCVV}
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
            <ShortSummary subtotal={10} tax={1} />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Payments;
