import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";
function navigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <li className={classes.NavigationItem}>
        <NavLink exact to="/" activeClassName={classes.active}>
          صفحه اصلی
        </NavLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavLink exact to="/favorite-products" activeClassName={classes.active}>
          لیست علاقه مندی ها
        </NavLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavLink exact to="/about-us" activeClassName={classes.active}>
          درباره ما
        </NavLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavLink exact to="/product" activeClassName={classes.active}>
          محصولات
        </NavLink>
      </li>
      {/* <NavigationItem Link="/">صفحه اصلی</NavigationItem>
      <NavigationItem Link="/favorite-products">
        لیست علاقه مندی ها
      </NavigationItem>
      <NavigationItem Link="/about-us">درباره ما</NavigationItem>
      <NavigationItem Link="/product">محصولات</NavigationItem> */}
    </ul>
  );
}

export default navigationItems;
