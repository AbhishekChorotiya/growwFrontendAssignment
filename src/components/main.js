import { useEffect } from "react";
import classes from "./main.module.css";
import { useMerchantDataStore } from "./store/zustland";
import { useQuery } from "react-query";

const Main = (props) => {

  const {theme} = useMerchantDataStore()

  useQuery('merchant-data',fetchTheme)

  async function fetchTheme() {
    const res = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
    );
    const data = await res.json();
    useMerchantDataStore.setState({
      theme: data.theme,
      name: data.name,
      logo: data.logo,
    });
  }

  return (
    <>
      <div className={classes.outter_main} style={theme}>
        <div className={classes.inner_main}>{props.children}</div>
      </div>
    </>
  );
};

export default Main;
