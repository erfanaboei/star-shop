import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import {
  useFavorite,
  useFavoriteAction,
} from "../../../../context/FavoriteContext";
import { useCartAction } from "../../../../context/CartContext";
import Separate from "./../../../../Utilities/Separate";
import ProductsData from "../../ProductsData";
import chalk from "chalk";
import ProductPageToolbar from "./ProductPageToolbar/ProductPageToolbar";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillCartCheckFill, BsTruck } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import {
  MdOutlineStarRate,
  MdEventAvailable,
  MdSecurity,
} from "react-icons/md";
function ProductPage(props) {
  const [showplusAndMinus, setShowPlusAndMinus] = useState(false);
  const [showBtnAddToCart, setShowBtnAddToCart] = useState(false);

  const [showType, setShowType] = useState("");
  const [toolbarContent, setToolbarContent] = useState("");

  const { toggleFavorite } = useFavoriteAction();
  const { id } = useParams();
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
    favoriteIcon = <AiFillHeart className="text-2xl ml-2" />;
  } else {
    favoriteIcon = <AiOutlineHeart className="text-2xl ml-2" />;
  }

  useEffect(() => {
    if (currentProductCount(parseInt(id)) >= 1) {
      setShowPlusAndMinus(true);
      setShowBtnAddToCart(false);
    } else {
      setShowPlusAndMinus(false);
      setShowBtnAddToCart(true);
    }
    showTypeChangeHandler();
    console.log(chalk.red.bold(id));
  });

  let index = ProductsData.findIndex((p) => p.id === parseInt(id));
  let discount = 0;
  let oldPrice = null;

  let result;
  let completeDescription = null;

  const showTypeChangeHandler = (newShowType) => {
    setShowType(newShowType);

    if (showType === "description") {
      setToolbarContent(ProductsData[index].completeDescription);
      console.log(toolbarContent);
    }
    if (showType === "description2") {
      setToolbarContent(
        ProductsData[index].completeDescription +
          " " +
          ProductsData[index].completeDescription
      );
      console.log(toolbarContent);
    }
  };

  if (index === -1) {
    result = <p>محصول مورد نظر یافت نشد</p>;
  } else {
    completeDescription = ProductsData[index].completeDescription;
    let price = ProductsData[index].price;
    if (ProductsData[index].discount !== 0) {
      discount = (
        <>
          <span className={classes.ProductDiscount}>
            {ProductsData[index].discount}%
          </span>
        </>
      );
      let discountPrice =
        (ProductsData[index].price * ProductsData[index].discount) / 100;
      price = ProductsData[index].price - discountPrice;
      oldPrice = (
        <>
          <br />
          <del>{Separate(ProductsData[index].price)}</del>
        </>
      );
    } else {
      discount = null;
    }
    result = (
      <div className="items-center p-0 grid grid-cols-3">
        <div className="inline-block mx-1 h-full mr-0 border-l border-gray-400 mt-1 pl-2">
          <img src={ProductsData[index].img} alt="" className="rounded-lg m-2" />
        </div>
        <div className="inline-block mx-1 h-full m-2">
          <p className="font-bold text-3xl py-3">{ProductsData[index].title}</p>
          <hr />
          <p className="text-lg flex py-2">
            <BiNotepad className="text-2xl ml-2" /> {ProductsData[index].description}
          </p>
          <p className="text-lg flex py-2">
            <BsTruck className="text-2xl ml-2" />
            {ProductsData[index].shortDescription}
          </p>
          <p className="text-lg flex py-2">
            <BsFillCartCheckFill className="text-2xl ml-2" />{" "}
            {ProductsData[index].sales}
          </p>
          <p className="text-lg flex py-2">
            <MdOutlineStarRate className="text-2xl ml-2" />{" "}
            {ProductsData[index].rating}
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
            onClick={toggleFavorite}
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
    );
  }

  return (
    <>
      {result}
      <ProductPageToolbar
        description={completeDescription}
        showTypeChange={showTypeChangeHandler}
        showType={showType}
        content={toolbarContent}
      />
    </>
  );
}

export default ProductPage;
