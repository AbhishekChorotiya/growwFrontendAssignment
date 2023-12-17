import React from "react";
import classes from './card.module.css'

const Card = () => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.product_img}>
          <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"></img>
        </div>
        <div className={classes.product_detail}>
          <div className={classes.product_detail_left}>
            <div className={classes.brand}>
              <span>Groww</span>{" "}
              {/* <img
                      src="https://groww.in/groww-logo-270.png"
                    ></img> */}
            </div>
            <div className={classes.title_warp}>
              <p className={classes.title}>
                Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor
                (LC49HG90DMNXZA) – Super Ultrawide Screen QLED
              </p>
            </div>
            <div className={classes.price_div}>
              <span className={classes.price}>$199</span>
              <span className={classes.price}>X</span>
              <span className={classes.price}>3</span>
              <span className={classes.price}>=</span>
              <span className={classes.price_total}>$597</span>
            </div>
          </div>
          <div className={classes.product_detail_right}>
            <span>-</span>
            <span>3</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
