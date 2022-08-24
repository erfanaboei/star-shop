import React, { useState, useEffect } from "react";
import classes from "./Product.module.css";
import Button from "../../UI/Button/Button";
import { useFavorite } from "../../../context/FavoriteContext";
import { useCartAction } from "../../../context/CartContext";
import Separate from "./../../../Utilities/Separate";
import LoadingSpinner from "./../../UI/LoadingSpinner/LoadingSpinner";
import { NavLink } from "react-router-dom";
function Product(props) {
  const [plusAndMinusDisplay, setPlusAndMinusDisplay] = useState("none");
  const [btnAddToCartDisplay, setBtnAddToCartDisplay] =
    useState("displayInlineBlock");

  // console.log("<Product/> rendered"  );

  const {
    addProduct,
    decrementProduct,
    removeProduct,
    incrementProduct,
    currentProductCount,
  } = useCartAction();

  const favorite = useFavorite();
  let favoriteIcon = "fa fa-heart-o";
  if (favorite.includes(props.id)) {
    favoriteIcon = "fa fa-heart";
  } else {
    favoriteIcon = "fa fa-heart-o";
  }

  useEffect(() => {
    if (currentProductCount(props.id) >= 1) {
      setPlusAndMinusDisplay("block");
      setBtnAddToCartDisplay("displayNone");
    } else {
      setPlusAndMinusDisplay("none");
      setBtnAddToCartDisplay("displayInlineBlock");
    }
  });

  let discount = 0;
  let oldPrice = null;
  let price = props.productPrice;

  if (props.productDiscount !== 0) {
    discount = (
      <>
        <p className={classes.ProductDiscount}>{props.productDiscount}%</p>
      </>
    );
    let discountPrice = (props.productPrice * props.productDiscount) / 100;
    price = props.productPrice - discountPrice;
    oldPrice = (
      <>
        <br />
        <del>{Separate(props.productPrice)}</del>
      </>
    );
  } else {
    discount = null;
  }

  return (
    <>
      {!props.loaded ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.ProductCard} onClick={props.clicked}>
          <img src={props.imgSrc} alt="" onClick={props.imgClicked} />
          <div className={classes.ProductDetails}>
            <div className={classes.ProductTitle}>
              <NavLink to={`product-page/${props.id}`}>
                <p>{props.productTitle}</p>
              </NavLink>
            </div>
            <div className={classes.ProductRating}>
              <span className={classes.Left}>
                {props.productRating}
                <i className="fa fa-star"></i>
              </span>

              <span className={classes.Right}>
                <i
                  className={favoriteIcon}
                  onClick={props.toggleFavoritesList}
                ></i>
              </span>
            </div>
            <div className={classes.PriceBox}>
              <p className={classes.ProductPrice}>
                {Separate(price)} تومان {oldPrice}
              </p>
              {discount}
            </div>
            <div className={classes.PlusAndMinus}>
              <br />
              <br />
              <br />
              <br />
              <p style={{ display: plusAndMinusDisplay }}>
                <button
                  className={classes.btnDanger}
                  onClick={() =>
                    currentProductCount(props.id) === 1
                      ? removeProduct(props.id)
                      : decrementProduct(props.id)
                  }
                >
                  -
                </button>

                <span>{currentProductCount(props.id)}</span>

                <button
                  className={classes.btnSuccess}
                  onClick={() => incrementProduct(props.id)}
                >
                  +
                </button>
              </p>
              <Button
                btnClass="btnAddToCart"
                btnType="Success"
                clicked={() => addProduct(props.id)}
                btnDisplay={btnAddToCartDisplay}
              >
                افزودن به سبد خرید
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
