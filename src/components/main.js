import React, { useEffect, useState } from "react";
import Checkout from "./checkout/checkout";
import classes from "./main.module.css";
const Main = () => {

  const [theme,setTheme] = useState({})

  useEffect(()=>{
    fetchTheme()
  },[])

  async function fetchTheme(){
    const res = await fetch('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata')
    const data = await res.json()
    setTheme(data.theme)
  }


  return (
    <>
      <div className={classes.outter} style={theme}>
        <div className={classes.inner}>
          <Checkout />
        </div>
      </div>
    </>
  );
};

export default Main;
