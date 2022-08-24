import React, { useState, useEffect } from "react";
import classes from "./ProductDetails.module.css";
import Button from "../../UI/Button/Button";
import { useFavorite } from "../../../context/FavoriteContext";
import { useCartAction } from "../../../context/CartContext";
import Separate from "./../../../Utilities/Separate";
function ProductDetails(props) {
  // const [currentProductCount, setCurrentProductCount] = useState(0);
  const [plusAndMinusDisplay, setPlusAndMinusDisplay] = useState("none");
  const [btnAddToCartDisplay, setBtnAddToCartDisplay] =
    useState("displayInlineBlock");

  const {
    addProduct,
    incrementProduct,
    decrementProduct,
    removeProduct,
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
        <span className={classes.ProductDiscount}>
          {props.productDiscount}%
        </span>
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
      <div className={classes.ProductDetails}>
        <div className={(classes.Box, classes.ImageBox)}>
          <img src={props.imgSrc} alt="" />
        </div>
        <div className={(classes.Box, classes.DetailsBox)}>
          <p className={classes.Title}>{props.productTitle}</p>
          <hr />
          <p className={classes.Description}>
            <i className="fa fa-sticky-note-o"></i> {props.productDescription}
          </p>
          <p className={classes.ShortDescription}>
            <i className={props.productShortDescriptionIcon}></i>{" "}
            {props.productShortDescription}
          </p>
          <p className="">
            <i className="fa fa-cart-arrow-down"></i> {props.productSales}
          </p>
          <p className="">
            <i className="fa fa-star"></i> {props.productRating}
          </p>
          <br />
        </div>
        <div className={(classes.Box, classes.PaymentBox)}>
          <p className={classes.PaymentBoxDetails}>
            <i className="fa fa-shield"></i> تصمین کیفیت محصول
          </p>
          <hr />
          <p className={classes.PaymentBoxDetails}>
            <i className="fa fa-archive"></i> موجود در انبار فروشگاه ستاره
          </p>
          <hr />
          <p
            className={[classes.PaymentBoxDetails, classes.AddToFavorites].join(
              " "
            )}
            onClick={props.toggleFavoritesList}
          >
            <i className={favoriteIcon}></i> افزودن به لیست علاقه مندی ها
          </p>
          <hr />

          <div className={classes.TotalPrice}>
            <p className={classes.Discount}>{discount}</p>
            <p className={classes.OldPrice}>{oldPrice}</p>
            <p className={classes.ProductPrice}>{Separate(price)} تومان</p>
          </div>
          <div className={classes.PlusAndMinus}>
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
              btnType="Success"
              clicked={() => addProduct(props.id)}
              btnDisplay={btnAddToCartDisplay}
            >
              افزودن به سبد خرید
            </Button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
