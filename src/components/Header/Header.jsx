import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import SearchBox from "./SearchBox/SearchBox";
import CartAndAccountIcon from "./CartAndAccountIcon/CartAndAccountIcon";
function header(props) {
  return (
    <>
      <div className={classes.Header}>
        <div className={classes.HRight}>
          <Logo />
        </div>
        <div className={classes.Search}>
          <SearchBox />
        </div>
        <div className={classes.HLeft}>
          {/* <CartAndAccountIcon productInCart={props.productInCart} /> */}
          <CartAndAccountIcon />
        </div>
      </div>
    </>
  );
}

export default header;
