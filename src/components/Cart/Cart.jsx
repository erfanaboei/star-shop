import React from "react";
import classes from "./Cart.module.css";
import CartToolbar from "./CartToolbar/CartToolbar";
import CartPayment from "./CartPayment/CartPayment";
import CartProducts from "./CartProducts/CartProducts";
import ProdutcsData from "../Products/ProductsData";
import { useCart, useCartAction } from "../../context/CartContext";
function Cart(props) {
  const cart = useCart();
  const {
    allProductCount,
    currentProductCount,
    incrementProduct,
    decrementProduct,
    removeProduct,
  } = useCartAction();
  let payment = null;
  let product = null;
  let cartNull = null;
  const result = ProdutcsData.filter((item) => {
    return cart.some((c) => {
      return item.id === c.id;
    });
  });
  console.log(result);
  let totalPrice = 0;
  let cartPrice = 0;
  let purchaseProfit = 0;
  if (result.length > 0) {
    result.map((p, index) => {
      totalPrice = totalPrice + p.price * currentProductCount(p.id);
      let discountPrice = (p.price * p.discount) / 100;
      let price = p.price - discountPrice;
      cartPrice += price * currentProductCount(p.id);
      purchaseProfit += discountPrice * currentProductCount(p.id);
      payment = (
        <div className={classes.CartPayment}>
          <CartPayment
            key={index}
            totalPrice={totalPrice}
            totalCartPrice={cartPrice}
            productCount={allProductCount}
            purchaseProfit={purchaseProfit}
          />
        </div>
      );

      product = (
        <div className={classes.CartDetails}>
          <CartProducts
            key={index}
            productCount={allProductCount}
            products={result}
            currentProductCount={currentProductCount}
            incrementProduct={incrementProduct}
            decrementProduct={decrementProduct}
            removeProduct={removeProduct}
          />
        </div>
      );
    });
    cartNull = null;
  } else {
    payment = null;
    product = null;
    cartNull = (
      <div className={classes.cartNull}>
        <p>سبد خرید شما خالی است</p>
        <p>از طریق لینک زیر میتوانید محصولات مورد نظرتان را انتخاب کنید</p>
        <div>
          <div>
            <a href="/">تمام محصولات</a>
          </div>
          <div>
            <a href="/">محصولات تخفیف دار</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={classes.Cart}>
        {product}
        {payment}
        {cartNull}
      </div>
    </>
  );
}

export default Cart;
