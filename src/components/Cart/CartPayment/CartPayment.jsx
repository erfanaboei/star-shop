import React from "react";
// import classes from "./CartPayment.module.css";
import Separate from "./../../../Utilities/Separate";
import { NavLink } from "react-router-dom";
function CartPayment(props) {
  return (
    <>
      <div className="mx-5">
        <div className="">
          <div className="float-right w-[50%] my-2">
            <span>قیمت کالا ها ({props.productCount})</span>
          </div>
          <div className="float-left w-[50%] my-2">
            <span className="float-left">{Separate(props.totalPrice)} تومان</span>
          </div>
        </div>
        <div className="">
          <div className="float-right w-[50%] my-2">
            <span>جمع سبد خرید</span>
          </div>
          <div className="float-left w-[50%] my-2">
            <span className="float-left">{Separate(props.totalCartPrice)} تومان</span>
          </div>
        </div>
        <div className="my-2">
          <span>
            هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
            می‌شود
          </span>
        </div>
        <div className="text-red-600 my-2">
          <div className="float-right w-[50%] my-2">
            <span>سود شما از این خرید</span>
          </div>
          <div className="float-left w-[50%] my-2">
            <span className="float-left">{Separate(props.purchaseProfit)} تومان</span>
          </div>
        </div>
        <button className="w-full py-3 transition-colors mb-4 ">
          <NavLink exact to="/factor">
            ادامه
          </NavLink>
        </button>
      </div>
    </>
  );
}

export default CartPayment;
