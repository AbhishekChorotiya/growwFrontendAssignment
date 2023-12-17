import React from 'react'
import classes from './navigation.module.css'

const Navigation = () => {
  return (
    <div className={classes.navigation}>
    <div>
      <svg
        width="1rem"
        fill="hsl(142.1, 70.6%, 45.3%)"
        viewBox="0 0 342.357 342.357"
      >
        <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 " />
      </svg>
      <span style={{ color: "hsl(142.1, 70.6%, 45.3%)" }}>Checkout</span>
    </div>
    <div className={classes.line}>
      <hr></hr>
    </div>
    <div>
      <svg width="1rem" fill="white" viewBox="0 0 342.357 342.357">
        <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 " />
      </svg>
      <span>Payments</span>
    </div>
    <div className={classes.line}>
      <hr></hr>
    </div>
    <div>
      <svg width="1rem" fill="white" viewBox="0 0 342.357 342.357">
        <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 " />
      </svg>
      <span>Order Confirmation</span>
    </div>
  </div>
  )
}

export default Navigation