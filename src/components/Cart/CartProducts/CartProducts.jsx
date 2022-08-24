import React from "react";
import CartProduct from "./CartProduct/CartProduct";
import classes from "./CartProducts.module.css";
function CartProducts(props) {
  let product = [];
  for (let p = 0; p < props.products.length; p++) {
    let discountPrice =
      (props.products[p].price * props.products[p].discount) / 100;
    let price = props.products[p].price - discountPrice;
    product.push(
      <div key={props.products[p].id}>
        <CartProduct
          id={props.products[p].id}
          img={props.products[p].img}
          incrementProduct={props.incrementProduct}
          decrementProduct={props.decrementProduct}
          removeProduct={props.removeProduct}
          currentProductCount={props.currentProductCount}
          productDiscountPrice={discountPrice}
          productPrice={price}
          productTitle={props.products[p].title}
          productDescription={props.products[p].description}
          productShortDescription={props.products[p].shortDescription}
          productShortDescriptionIcon={props.products[p].shortDescriptionIcon}
          productSales={props.products[p].sales}
          productRating={props.products[p].rating}
        />
      </div>
    );
  }
  return (
    <>
      <div className={classes.CartProducts}>
        <div className={classes.CartProductsHeader}>
          <div className={classes.Right}>
            <h3>سبد خرید شما</h3>
            <span>تعداد کالاها {props.productCount}</span>
          </div>
          <div className={classes.Left}></div>
        </div>
        {product}
      </div>
    </>
  );
}

export default CartProducts;
