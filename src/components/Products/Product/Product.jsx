import React, { useState, useEffect } from "react";
import classes from "./Product.module.css";
// import Button from "../../UI/Button/Button";
import { useFavorite } from "../../../context/FavoriteContext";
import { useCartAction } from "../../../context/CartContext";
import Separate from "./../../../Utilities/Separate";
import LoadingSpinner from "./../../UI/LoadingSpinner/LoadingSpinner";
import { NavLink } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineStarRate } from "react-icons/md";
function Product(props) {
  const [showplusAndMinus, setShowPlusAndMinus] = useState(false);
  const [showBtnAddToCart, setShowBtnAddToCart] = useState(false);

  // console.log("<Product/> rendered"  );

  const {
    addProduct,
    decrementProduct,
    removeProduct,
    incrementProduct,
    currentProductCount,
  } = useCartAction();

  const favorite = useFavorite();
  let favoriteIcon = (
    <AiOutlineHeart className="text-2xl ml-2 cursor-pointer" />
  );
  if (favorite.includes(props.id)) {
    favoriteIcon = (
      <AiFillHeart className="text-2xl ml-2 text-red-600 cursor-pointer" />
    );
  } else {
    favoriteIcon = <AiOutlineHeart className="text-2xl ml-2 cursor-pointer" />;
  }

  useEffect(() => {
    if (currentProductCount(props.id) >= 1) {
      setShowPlusAndMinus(true);
      setShowBtnAddToCart(false);
    } else {
      setShowPlusAndMinus(false);
      setShowBtnAddToCart(true);
    }
  });

  let discount = 0;
  let oldPrice = null;
  let price = props.productPrice;

  if (props.productDiscount !== 0) {
    discount = (
      <>
        <p className="bg-red-500 inline-block rounded-xl px-2 float-right">
          {props.productDiscount}%
        </p>
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
        <div
          className={[
            "mb-4 pb-2 mx-1 rounded-md transition-all shadow-lg hover:shadow-zinc-400",
          ].join(" ")}
          onClick={props.clicked}
        >
          <img
            className="w-full rounded-t-md cursor-pointer"
            src={props.imgSrc}
            alt=""
            onClick={props.imgClicked}
          />
          <div className="px-5 py-4">
            <div className="">
              <NavLink className="" to={`product-page/${props.id}`}>
                <p className="my-2 text-lg font-bold">{props.productTitle}</p>
              </NavLink>
            </div>
            <div className="my-4">
              <span className="float-left flex">
                {props.productRating}
                <MdOutlineStarRate className="text-2xl mr-1" />
              </span>

              <span className="" onClick={props.toggleFavoritesList}>
                {favoriteIcon}
              </span>
            </div>
            <div className="">
              <p className="float-left">
                {Separate(price)} تومان {oldPrice}
              </p>
              <p className="float-right text-white">{discount}</p>
            </div>
            <div className="mt-24">
              <div
                className={[
                  showplusAndMinus ? "block" : "hidden",
                  "w-full text-center shadow-md shadow-slate-400 border rounded-xl",
                ].join(" ")}
              >
                <button
                  className="float-right transition-all mx-3 mt-[-5px] text-3xl bg-transparent border-none text-red-600 hover:text-red-600"
                  onClick={() =>
                    currentProductCount(props.id) === 1
                      ? removeProduct(props.id)
                      : decrementProduct(props.id)
                  }
                >
                  -
                </button>

                <span className="text-2xl mt-1">
                  {currentProductCount(props.id)}
                </span>

                <button
                  className="float-left transition-all mx-3 mt-[-5px] text-3xl bg-transparent text-green-600 border-none hover:text-green-700"
                  onClick={() => incrementProduct(props.id)}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className={[
                    showBtnAddToCart ? "block" : "hidden",
                    "mx-auto px-6 py-2 transition-all bg-green-600 border-green-600 hover:text-green-700 hover:border-green-700",
                  ].join(" ")}
                  onClick={() => addProduct(props.id)}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
