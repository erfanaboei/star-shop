import React from "react";
import styles from "./CartAndAccountIcon.module.css";
import { NavLink } from "react-router-dom";
import { useCartAction } from "../../../context/CartContext";
function CartAndAccountIcon(props) {
  const { allProductCount } = useCartAction();
  return (
    <>
      <div className={styles.Cart}>
        <NavLink to="/profile">
          <i className="fa fa-user fa-2x"></i>
        </NavLink>
        <span>|</span>
        <NavLink to="/cart">
          <i className="fa fa-shopping-cart fa-2x">
            <small>{allProductCount}</small>
          </i>
        </NavLink>
      </div>
    </>
  );
}

export default CartAndAccountIcon;
