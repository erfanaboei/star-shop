import React from "react";
import classes from "./ProductPageToolbar.module.css";
import { NavLink } from "react-router-dom";
import chalk from "chalk";
function ProductPageToolbar(props) {
  return (
    <>
      <div className={classes.ProductPageToolbar}>
        <div className={classes.Toolbar}>
          <NavLink
            to="#"
            onClick={() => {
              props.showTypeChange("description");
              console.log(props.showType);
            }}
            activeClassName={classes.active}
          >
            توضیحات
          </NavLink>
          <NavLink
            to="#"
            onClick={() => {
              props.showTypeChange("description2");
              console.log(props.showType);
            }}
            activeClassName={classes.active}
          >
            توضیحات 2
          </NavLink>
        </div>
        <div className={classes.Content}>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
}

export default ProductPageToolbar;
