import React from "react";
import classes from "./CartPayment.module.css";
import Separate from "./../../../Utilities/Separate";
import { NavLink } from "react-router-dom";
function CartPayment(props) {
  return (
    <>
      <div className={classes.CartPayment}>
        <div className={classes.PriceWithoutDiscount}>
          <div className={classes.RightElement}>
            <span>قیمت کالا ها ({props.productCount})</span>
          </div>
          <div className={classes.LeftElement}>
            <span>{Separate(props.totalPrice)} تومان</span>
          </div>
        </div>
        <div className={classes.PriceWithDiscount}>
          <div className={classes.RightElement}>
            <span>جمع سبد خرید</span>
          </div>
          <div className={classes.LeftElement}>
            <span>{Separate(props.totalCartPrice)} تومان</span>
          </div>
        </div>
        <div className={classes.PaymentDescription}>
          <span>
            هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
            می‌شود
          </span>
        </div>
        <div className={classes.PurchaseProfit}>
          <div className={classes.RightElement}>
            <span>سود شما از این خرید</span>
          </div>
          <div className={classes.LeftElement}>
            <span>{Separate(props.purchaseProfit)} تومان</span>
          </div>
        </div>
        <button id={classes.btnCuntinue}>
          <NavLink exact to="/factor">
            ادامه
          </NavLink>
        </button>
      </div>
    </>
  );
}

export default CartPayment;
