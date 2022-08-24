import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import Button from "../../../UI/Button/Button";
import {
  useFavorite,
  useFavoriteAction,
} from "../../../../context/FavoriteContext";
import { useCartAction } from "../../../../context/CartContext";
import Separate from "./../../../../Utilities/Separate";
import ProductsData from "../../ProductsData";
import chalk from "chalk";
import ProductPageToolbar from "./ProductPageToolbar/ProductPageToolbar";

function ProductPage(props) {
  const [plusAndMinusDisplay, setPlusAndMinusDisplay] = useState("none");
  const [btnAddToCartDisplay, setBtnAddToCartDisplay] =
    useState("displayInlineBlock");
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
  let favoriteIcon = "fa fa-heart-o";
  if (favorite.includes(parseInt(id))) {
    favoriteIcon = "fa fa-heart";
  } else {
    favoriteIcon = "fa fa-heart-o";
  }
  useEffect(() => {
    if (currentProductCount(parseInt(id)) >= 1) {
      setPlusAndMinusDisplay("block");
      setBtnAddToCartDisplay("displayNone");
    } else {
      setPlusAndMinusDisplay("none");
      setBtnAddToCartDisplay("displayInlineBlock");
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
      <div className={classes.ProductPage}>
        <div className={classes.ImageBox}>
          <img src={ProductsData[index].img} alt="" />
        </div>
        <div className={classes.DetailsBox}>
          <p className={classes.Title}>{ProductsData[index].title}</p>
          <hr />
          <p className={classes.Description}>
            <i className="fa fa-sticky-note-o"></i>{" "}
            {ProductsData[index].description}
          </p>
          <p className={classes.ShortDescription}>
            <i className={ProductsData[index].shortDescriptionIcon}></i>{" "}
            {ProductsData[index].shortDescription}
          </p>
          <p className="">
            <i className="fa fa-cart-arrow-down"></i>{" "}
            {ProductsData[index].sales}
          </p>
          <p className="">
            <i className="fa fa-star"></i> {ProductsData[index].rating}
          </p>
        </div>
        <div className={classes.PaymentBox}>
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
            onClick={() => toggleFavorite(parseInt(id))}
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
            <br />
            <p style={{ display: plusAndMinusDisplay }}>
              <button
                className={classes.btnDanger}
                onClick={() =>
                  currentProductCount(ProductsData[index].id) === 1
                    ? removeProduct(ProductsData[index].id)
                    : decrementProduct(ProductsData[index].id)
                }
              >
                -
              </button>

              <span>{currentProductCount(ProductsData[index].id)}</span>

              <button
                className={classes.btnSuccess}
                onClick={() => incrementProduct(ProductsData[index].id)}
              >
                +
              </button>
            </p>
            <Button
              btnType="Success"
              clicked={() => addProduct(ProductsData[index].id)}
              btnDisplay={btnAddToCartDisplay}
            >
              افزودن به سبد خرید
            </Button>
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
