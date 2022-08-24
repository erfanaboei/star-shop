import React from "react";
import classes from "./CartToolbar.module.css";
import { NavLink } from "react-router-dom";
import NextCart from "../NextCart/NextCart";
import Cart from "../Cart";
function CartToolbar(props) {
  return (
    <>
      <div className={classes.CartToolbar}>
        <div className={classes.ToolbarItem}>
          <NavLink to={Cart} className={props.active ? "active" : null}>
            سبد خرید
          </NavLink>
        </div>
        <div className={classes.ToolbarItem}>
          <NavLink to={NextCart} className={props.active ? "active" : null}>
            خرید بعدی
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default CartToolbar;
