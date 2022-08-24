import React from "react";
import classes from "./Paging.module.css";
import Button from "../Button/Button";
function Paging(props) {
  const btnPagingClickedHandler = (PNumber) => {
    props.updatePageNumber(PNumber);
  };
  const btnFirstPageClickedHandler = () => {
    // this.props.updatePageNumber(this.props.currentPage == 1);
    // console.log(this.props.currentPage);
  };
  const btnLastPageClickedHandler = () => {
    // this.props.updatePageNumber(this.props.currentPage == this.props.totalPage);
    // console.log(this.props.currentPage);
  };
  const btnPreviousClickedHandler = () => {
    if (props.currentPage !== 1) {
      props.updatePageNumber(props.currentPage - 1);
    }
  };
  const btnNextClickedHandler = () => {
    if (props.currentPage !== props.pageNumbers.length) {
      props.updatePageNumber(props.currentPage + 1);
    }
  };
  var pageNumber = [];
  for (let p = 0; p < props.pageNumbers.length; p++) {
    pageNumber.push(
      <Button
        btnType="btnPaging"
        clicked={() => btnPagingClickedHandler(props.pageNumbers[p])}
      >
        <a>{props.pageNumbers[p]}</a>
      </Button>
    );
  }

  return (
    <>
      <div className={classes.Paging}>
        <div className={classes.FirstPage}>
          <Button btnType="btnPaging" clicked={btnFirstPageClickedHandler}>
            <a>اولین صفحه</a>
          </Button>
        </div>
        <div className={classes.PageNumber}>
          <Button btnType="btnPaging" clicked={btnPreviousClickedHandler}>
            <a className={classes.Previous}>
              <i className="fa fa-arrow-right"></i>
              قبلی
            </a>
          </Button>
          {pageNumber}
          <Button btnType="btnPaging" clicked={btnNextClickedHandler}>
            <a className={classes.Next}>
              بعدی <i className="fa fa-arrow-left"></i>
            </a>
          </Button>
        </div>
        <div className={classes.LastPage}>
          <Button btnType="btnPaging" clicked={btnLastPageClickedHandler}>
            <a>آخرین صفحه</a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Paging;
