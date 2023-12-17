import React from 'react'
import classes from './address.module.css'

const Address = () => {
  return (
    <div className={classes.address}>
    <div className={classes.address_inner}>
      <span>Address</span>
      <div>
        <p>Hostel 6, MNIT Jaipur, Jhalana Gram, Malviya Nagar (302017)</p>
      </div>
      <button>
        <svg width="1.5rem" viewBox="0 0 24 24">
          <rect x="0" fill="none" width="24" height="24" />

          <g>
            <path d="M7 10l5 5 5-5" />
          </g>
        </svg>
      </button>
    </div>

    <div style={{ marginLeft: "1rem" }} className={classes.address_inner}>
      <span>Contact</span>
      <input type="text" placeholder="+91 XXXXX XXXXX" />
    </div>
  </div>
  )
}

export default Address