import React, { useState, useEffect } from "react";
// import classes from "./ProductDetails.module.css";
// import Button from "../../UI/Button/Button";
import { useFavorite } from "../../../context/FavoriteContext";
import { useCartAction } from "../../../context/CartContext";
import Separate from "./../../../Utilities/Separate";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillCartCheckFill, BsTruck } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import {
  MdOutlineStarRate,
  MdEventAvailable,
  MdSecurity,
} from "react-icons/md";
function ProductDetails(props) {
  const [showplusAndMinus, setShowPlusAndMinus] = useState(false);
  const [showBtnAddToCart, setShowBtnAddToCart] = useState(false);

  const {
    addProduct,
    incrementProduct,
    decrementProduct,
    removeProduct,
    currentProductCount,
  } = useCartAction();

  const favorite = useFavorite();
  let favoriteIcon = <AiOutlineHeart className="text-2xl ml-2" />;
  if (favorite.includes(props.id)) {
    favoriteIcon = <AiFillHeart className="text-2xl ml-2 text-red-500" />;
  } else {
    favoriteIcon = <AiOutlineHeart className="text-2xl ml-2" />;
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
        <span>{props.productDiscount}%</span>
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
      <div className="items-center p-0 grid grid-cols-3 text-white">
        <div className="inline-block mx-1 h-full mr-0 border-l border-gray-400 mt-1 pl-2">
          <img src={props.imgSrc} alt="" className="rounded-lg m-2" />
        </div>
        <div className="inline-block mx-1 h-full m-2">
          <p className="font-bold text-3xl py-3">{props.productTitle}</p>
          <hr />
          <p className="text-lg flex py-2">
            <BiNotepad className="text-2xl ml-2" /> {props.productDescription}
          </p>
          <p className="text-lg flex py-2">
            <BsTruck className="text-2xl ml-2" />
            {props.productShortDescription}
          </p>
          <p className="text-lg flex py-2">
            <BsFillCartCheckFill className="text-2xl ml-2" />{" "}
            {props.productSales}
          </p>
          <p className="text-lg flex py-2">
            <MdOutlineStarRate className="text-2xl ml-2" />{" "}
            {props.productRating}
          </p>
          <br />
        </div>
        <div className="inline-block mr-1 pr-2 h-full item-center border-r border-gray-400">
          <p className="text-lg flex py-3">
            <MdSecurity className="text-2xl ml-2" /> تصمین کیفیت محصول
          </p>
          <hr />
          <p className="text-lg flex py-3">
            <MdEventAvailable className="text-2xl ml-2" /> موجود در انبار
            فروشگاه ستاره
          </p>
          <hr />
          <p
            className="text-lg flex cursor-pointer py-3"
            onClick={props.toggleFavoritesList}
          >
            {favoriteIcon} افزودن به لیست علاقه مندی ها
          </p>
          <hr />
          <div className="flex">
            <div className="block mt-5 w-[65%]">
              <div className={showplusAndMinus?"block":"hidden"}>
                <div className="w-full text-center py-3">
                  <button
                    className="text-red-700 bg-transparent float-right border-none text-3xl font-bold"
                    onClick={() =>
                      currentProductCount(props.id) === 1
                        ? removeProduct(props.id)
                        : decrementProduct(props.id)
                    }
                  >
                    -
                  </button>

                  <span className="py-3">{currentProductCount(props.id)}</span>

                  <button
                    className="text-green-600 bg-transparent float-left border-none text-3xl font-bold hover:text-green-800"
                    onClick={() => incrementProduct(props.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="">
                <button
                  className={[
                    showBtnAddToCart ? "block" : "hidden",
                    "bg-green-500 mx-auto border border-green-500 p-3  hover:text-green-500 hover:border-green-500",
                  ].join(" ")}
                  onClick={() => addProduct(props.id)}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
            <div className="float-left w-[35%] mx-2">
              <p className="bg-red-600 px-2 inline-block rounded-xl">
                {discount}
              </p>
              <p className="inline-block mx-1">{oldPrice}</p>
              <p className="mx-1">{Separate(price)} تومان</p>
            </div>
          </div>

          <br />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
