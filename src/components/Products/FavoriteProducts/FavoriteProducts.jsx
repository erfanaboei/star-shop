import React, { useState, useEffect } from "react";
import classes from "./FavoriteProducts.module.css";
import Product from "../Product/Product";
import ProductsData from "../ProductsData";
import Modal from "../../UI/Modal/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";
import LoadingSpinner from "./../../UI/LoadingSpinner/LoadingSpinner";
import {
  useFavorite,
  useFavoriteAction,
} from "../../../context/FavoriteContext";
function FavoriteProducts(props) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const favorite = useFavorite();
  const { toggleFavorite } = useFavoriteAction();
  function toggleModalHandler(id) {
    setIsShowModal(!isShowModal);
    setCurrentProductId(id);
  }
  // console.log("<FavoriteProduts/> rendered");

  let favoriteProduct = [];
  const getData = () => {
    setTimeout(() => setIsLoaded(true), 3000);
    setData(ProductsData.filter((item) => favorite.includes(item.id)));
    setIsLoaded(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (data.length > 0) {
    data.map((p, index) => {
      favoriteProduct.push(
        <Product
          key={index}
          imgSrc={p.img}
          loaded={isLoaded}
          id={p.id}
          imgClicked={() => toggleModalHandler(p.id)}
          productTitle={p.title}
          productRating={p.rating}
          productPrice={p.price}
          productDiscount={p.discount}
          productShortDescription={p.shortDescription}
          productShortDescriptionIcon={p.shortDescriptionIcon}
          productPlus={props.productPlus}
          productMinus={props.productMinus}
          toggleFavoritesList={() => toggleFavorite(p.id)}
          favoriteList={favorite}
        />
      );
    });
  } else {
    favoriteProduct = (
      <p className={classes.FavoriteIsNull}>
        لیست علاقه مندی های شما خالی است!
      </p>
    );
  }

  let currentProduct = null;
  for (let i = 0; i < ProductsData.length; i++) {
    if (ProductsData[i].id === currentProductId) {
      currentProduct = (
        <ProductDetails
          imgSrc={ProductsData[i].img}
          productTitle={ProductsData[i].title}
          productRating={ProductsData[i].rating}
          productPrice={ProductsData[i].price}
          productDiscount={ProductsData[i].discount}
          productShortDescription={ProductsData[i].shortDescription}
          productDescription={ProductsData[i].description}
          productShortDescriptionIcon={ProductsData[i].shortDescriptionIcon}
          productSales={ProductsData[i].sales}
          productStock={ProductsData[i].stock}
          productPlus={props.productPlus}
          productMinus={props.productMinus}
          // toggleFavoritesList={() =>
          //   toggleFavoritesListHandler(ProductsData[i].id)
          // }
        />
      );
    }
  }
  return (
    <>
      <div className="FavoriteProducts">
        {favoriteProduct}
        <Modal
          show={isShowModal}
          modalClose={toggleModalHandler}
          modalTitle="جزئیات محصول مورد علاقه شما"
        >
          {currentProduct}
        </Modal>
      </div>
    </>
  );
}

export default FavoriteProducts;
