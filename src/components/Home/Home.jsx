import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Product from "./../Products/Product/Product";
import ProdutcsData from "./../Products/ProductsData";
import { useFavoriteAction } from "../../context/FavoriteContext";
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
  return (
    <>
      <Slider />
      {Products}
    </>
  );
}

export default Home;
