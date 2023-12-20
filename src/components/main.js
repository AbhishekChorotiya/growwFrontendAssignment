import { useEffect } from "react";
import classes from "./main.module.css";
import { useMerchantDataStore } from "./store/zustland";
import { useQuery } from "react-query";

const Main = (props) => {

  const {theme,name,logo} = useMerchantDataStore()

  useQuery('merchant-data',fetchTheme)

  async function fetchTheme() {
    const res = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
    );
    const data = await res.json();
    useMerchantDataStore.setState({
      theme: data.theme,
      name: data.merchantName,
      logo: data.merchantLogo,
    });
  }

  return (
    <>
      <div className={classes.outter_main} style={theme}>
        <div className={classes.navbar}>
          <img src={logo} alt="logo" style={{objectFit:'contain', height:'70%'}}></img>
          <span style={{color:'var(--foreground)',fontWeight:'bold',letterSpacing:'2px',fontSize:'1.2rem',margin:'0 2rem'}}>{name}</span>
        </div>
        <div className={classes.inner_main}>{props.children}</div>
      </div>
    </>
  );
};

export default Main;
