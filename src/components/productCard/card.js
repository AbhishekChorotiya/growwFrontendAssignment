import React from "react";
import classes from "./card.module.css";

const Card = (props) => {
  const title = props.title;
  const quantity = props.quantity;
  const price = props.price;
  const image = props.image;
  const id = props.id;

  return (
    <>
      <div className={classes.card}>
        <div className={classes.product_img}>
          <img src={image}></img>
        </div>
        <div className={classes.product_detail}>
          <div className={classes.product_detail_left}>
            <div className={classes.brand}>
              <span>Groww</span>{" "}
            </div>
            <div className={classes.title_warp}>
              <p className={classes.title}>{title}</p>
            </div>
            <div className={classes.price_div}>
              <span className={classes.price}>{price}</span>
              <span className={classes.price}>X</span>
              <span className={classes.price}>{quantity}</span>
              <span className={classes.price}>=</span>
              <span className={classes.price_total}>${price * quantity}</span>
            </div>
          </div>
          <div className={classes.product_detail_right}>
            <span style={{ wordSpacing: "0" }}>--</span>
            <span>{quantity}</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
