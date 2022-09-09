import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Product from "./../Products/Product/Product";
import ProdutcsData from "./../Products/ProductsData";
import { useFavoriteAction } from "../../context/FavoriteContext";
import ProductsData from "../Products/ProductsData";
import ProductDetails from "../Products/ProductDetails/ProductDetails";
import Modal from "../UI/Modal/Modal";
import Category from "../Category/Category";

function Home(props) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(0);
  const toggleModalHandler = (id) => {
    setIsShowModal(!isShowModal);
    setCurrentProductId(id);
  };
  const { toggleFavorite } = useFavoriteAction();
  let Products = [];
  ProdutcsData.map((p, index) => {
    if (p.id <= 4) {
      Products.push(
        <Product
          key={index}
          imgSrc={p.img}
          loaded={true}
          id={p.id}
          imgClicked={() => toggleModalHandler(p.id)}
          productTitle={p.title}
          productRating={p.rating}
          productPrice={p.price}
          productDiscount={p.discount}
          productShortDescription={p.shortDescription}
          productShortDescriptionIcon={p.shortDescriptionIcon}
          toggleFavoritesList={() => toggleFavorite(p.id)}
        />
      );
    }
  });
  let currentProduct = null;
  for (let i = 0; i < ProductsData.length; i++) {
    if (ProductsData[i].id === currentProductId) {
      currentProduct = (
        <ProductDetails
          imgSrc={ProductsData[i].img}
          id={ProductsData[i].id}
          productTitle={ProductsData[i].title}
          productRating={ProductsData[i].rating}
          productPrice={ProductsData[i].price}
          productDiscount={ProductsData[i].discount}
          productShortDescription={ProductsData[i].shortDescription}
          productDescription={ProductsData[i].description}
          productShortDescriptionIcon={ProductsData[i].shortDescriptionIcon}
          productSales={ProductsData[i].sales}
          productStock={ProductsData[i].stock}
          toggleFavoritesList={() => toggleFavorite(ProductsData[i].id)}
          favoriteList={ProductsData[i].favoritesList}
          favoriteOn={ProductsData[i].favoriteIconOn}
          favoriteOff={ProductsData[i].favoriteIconOff}
        />
      );
    }
  }
  return (
    <>
      <Slider />

      <div className="">
        <Category/>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Products}
      </div>
      <Modal
        show={isShowModal}
        modalClose={toggleModalHandler}
        modalTitle="جزئیات محصول"
      >
        {currentProduct}
      </Modal>
    </>
  );
}

export default Home;
