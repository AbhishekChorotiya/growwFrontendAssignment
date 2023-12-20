import React from "react";
import classes from "./navigation.module.css";

const Navigation = (props) => {
  return (
    <>
      <div className={classes.navigation}>
        <div>
          <svg
            width="1rem"
            fill={props.active == 1 ? "var(--primary)" : "var(--foreground)"}
            viewBox="0 0 342.357 342.357"
          >
            <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 " />
          </svg>
          <span
            style={{
              color: `${
                props.active == 1 ? "var(--primary)" : "var(--foreground)"
              }`,
            }}
          >
            Checkout
          </span>
        </div>
        <div className={classes.line}>
          <hr></hr>
        </div>
        <div>
          {!(props.active >= 2) ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                transform: "translateX(0.4rem)",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  height: "1rem",
                  width: "1rem",
                  backgroundColor: "transparent",
                  border: `3px solid ${
                    props.active == 2 ? "var(--primary)" : "var(--foreground)"
                  }`,
                  borderRadius: "50%",
                }}
              ></span>
            </div>
          ) : (
            <svg
              width="1rem"
              fill={props.active == 2 ? "var(--primary)" : "var(--foreground)"}
              viewBox="0 0 342.357 342.357"
            >
              <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 " />
            </svg>
          )}
          <span
            style={{
              color: `${
                props.active == 2 ? "var(--primary)" : "var(--foreground)"
              }`,
            }}
          >
            Payments
          </span>
        </div>
        <div className={classes.line}>
          <hr></hr>
        </div>
        <div>
          {props.active != 3 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "translateX(0.4rem)",
              }}
            >
              <span
                style={{
                  height: "1rem",
                  width: "1rem",
                  backgroundColor: "transparent",
                  border: `3px solid ${
                    props.active == 3 ? "var(--primary)" : "var(--foreground)"
                  }`,
                  borderRadius: "50%",
                }}
              ></span>
            </div>
          ) : (
            <svg
              width="1rem"
              fill={props.active == 3 ? "var(--primary)" : "var(--foreground)"}
              viewBox="0 0 342.357 342.357"
            >
              <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 " />
            </svg>
          )}
          <span
            style={{
              color: `${
                props.active == 3 ? "var(--primary)" : "var(--foreground)"
              }`,
            }}
          >
            Order Confirmation
          </span>
        </div>
      </div>
      <div className={classes.navigation_mobile}>
        {props.active == 1 ? (
          <span>Checkout</span>
        ) : props.active == 2 ? (
          <span>Payments</span>
        ) : (
          <span>Order Confirmation</span>
        )}
      </div>
    </>
  );
};

export default Navigation;
