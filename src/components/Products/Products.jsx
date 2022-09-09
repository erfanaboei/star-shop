import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductsData from "./ProductsData";
import Product from "./Product/Product";
import Modal from "../UI/Modal/Modal";
import ProductDetails from "./ProductDetails/ProductDetails";
import ReactPaginate from "react-paginate";
import { useSearchAction, useSearch } from "../../context/SearchContext";
import { useFavoriteAction } from "../../context/FavoriteContext";
function Products(props) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const perPage = 8;
  const [pageCount, setPageCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const searchParam = useSearch();
  const { searchProduct } = useSearchAction();

  const toggleModalHandler = (id) => {
    setIsShowModal(!isShowModal);
    setCurrentProductId(id);
  };
  const { toggleFavorite } = useFavoriteAction();
  // console.log("<Products/> rendered");

  const getData = () => {
    setIsLoaded(false);
    const data = ProductsData;

    setData(data);
    setTimeout(() => setIsLoaded(true), 3000);
    // setIsLoaded(true)
  };

  // let Products = [];
  // for (let i = 0; i < ProductsData.length; i++) {
  //   Products.push(
  //     <Product
  //       key={ProductsData[i].id}
  //       id={ProductsData[i].id}
  //       imgSrc={ProductsData[i].img}
  //       productTitle={ProductsData[i].title}
  //       productRating={ProductsData[i].rating}
  //       productPrice={ProductsData[i].price}
  //       productDiscount={ProductsData[i].discount}
  //       productShortDescription={ProductsData[i].shortDescription}
  //       productDescription={ProductsData[i].description}
  //       productShortDescriptionIcon={ProductsData[i].shortDescriptionIcon}
  //       productSales={ProductsData[i].sales}
  //       productStock={ProductsData[i].stock}
  //       productPlus={props.productPlus}
  //       productMinus={props.productMinus}
  //       toggleFavoritesList={() => toggleFavorite(ProductsData[i].id)}
  //     />
  //   );
  // }

  const pageClickHandler = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * perPage;

  let currentPageData = [];
  if (searchParam === "") {
    currentPageData.push(
      data.slice(offset, offset + perPage).map((p, index) => {
        return (
          <Product
            key={index}
            loaded={isLoaded}
            imgSrc={p.img}
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
      })
    );
  } else {
    currentPageData = searchProduct(data)
      .slice(offset, offset + perPage)
      .map((p, index) => {
        return (
          <Product
            key={index}
            loaded={isLoaded}
            imgSrc={p.img}
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
      });
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (searchParam === "") {
      setPageCount(Math.ceil(data.length / perPage));
    } else {
      setPageCount(Math.ceil(searchProduct(data).length / perPage));
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
      <div className="w-full m-auto mb-5">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{currentPageData}</div>
        <Modal
          show={isShowModal}
          modalClose={toggleModalHandler}
          modalTitle="جزئیات محصول"
        >
          {currentProduct}
        </Modal>
        <div className="paging ">
          {!isLoaded || pageCount === 0 ? null : (
            <ReactPaginate
              previousLabel={<i className="fa fa-angle-right"></i>}
              nextLabel={<i className="fa fa-angle-left"></i>}
              breakLabel={"..."}
              breakClassName={"breack-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={pageClickHandler}
              containerClassName={"pagination"}
              activeClassName={"bg-black rounded-lg text-zinc-50 dark:bg-zinc-50 dark:text-black"}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
