import React from "react";
import classes from "./CartProduct.module.css";
import Separate from "./../../../../Utilities/Separate";
function CartProduct(props) {
  const productCount = props.currentProductCount(props.id);
  return (
    <>
      <div className={classes.CartProduct}>
        <div className={classes.ProductDetails}>
          <div className={classes.ProductDetailsItemTop}>
            <div className={classes.ImageBox}>
              <img src={props.img} alt="" />
            </div>
            <div className={classes.DetailsBox}>
              <span className={classes.Title}>{props.productTitle}</span>
              <br />
              <span className={classes.Description}>
                <i className="fa fa-sticky-note-o"></i>{" "}
                {props.productDescription}
              </span>
              <br />
              <span className={classes.ShortDescription}>
                <i className={props.productShortDescriptionIcon}></i>{" "}
                {props.productShortDescription}
              </span>
              <br />
              <span className="">
                <i className="fa fa-cart-arrow-down"></i> {props.productSales}
              </span>
              <br />
              <span className="">
                <i className="fa fa-star"></i> {props.productRating}
              </span>
              <br />
            </div>
            <div className={classes.DeleteBox}>
              <button
                id={classes.btnDelete}
                onClick={() => props.removeProduct(props.id)}
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div className={classes.ProductDetailsItemBottom}>
            <div className={classes.PlusAndMinusBox}>
              <div className={classes.Plus}>
                <button
                  id={classes.btnPlus}
                  onClick={() => props.incrementProduct(props.id)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
              <div className={classes.Count}>
                <span>{productCount}</span>
              </div>
              <div className={classes.Minus}>
                <button
                  id={classes.btnMinus}
                  onClick={() => props.decrementProduct(props.id)}
                  disabled={productCount < 2 ? true : false}
                >
                  <i className="fa fa-minus"></i>
                </button>
              </div>
            </div>
            <div className={classes.PriceBox}>
              <div className={classes.PriceDiscount}>
                {Separate(props.productDiscountPrice)} تومان
              </div>
              <div className={classes.Price}>
                {Separate(props.productPrice)} تومان
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ProductDetailsFotter}>
          <button>
            انتقال محصول به خرید بعدی <i className="fa fa-chevron-left"></i>
          </button>
        </div>
        <br />
      </div>
    </>
  );
}

export default CartProduct;
