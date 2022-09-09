import React from "react";
// import NavigationItem from "./NavigationItem/NavigationItem";
// import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";
function NavigationItems(props) {
  return (
    <ul className="m-0 p-0 w-full h-full flex flex-row cursor-pointer items-center ">
      <li className="my-3 mx-2">
        <NavLink className="text-zinc-600 block hover:text-black transition-all dark:text-zinc-50 dark:hover:text-zinc-500" exact to="/" activeClassName="text-black dark:text-zinc-500"  >
          صفحه اصلی
        </NavLink>
      </li>
      <li className="my-3 mx-2">
        <NavLink className="text-zinc-600 block hover:text-black transition-all dark:text-zinc-50 dark:hover:text-zinc-500" exact to="/favorite-products" activeClassName="text-black dark:text-zinc-500" >
          لیست علاقه مندی ها
        </NavLink>
      </li>
      <li className="my-3 mx-2">
        <NavLink className="text-zinc-600 block hover:text-black transition-all dark:text-zinc-50 dark:hover:text-zinc-500" exact to="/about-us" activeClassName="text-black dark:text-zinc-500"  >
          درباره ما
        </NavLink>
      </li>
      <li className="my-3 mx-2">
        <NavLink className="text-zinc-600 block hover:text-black transition-all dark:text-zinc-50 dark:hover:text-zinc-500" exact to="/product" activeClassName="text-black dark:text-zinc-500" >
          محصولات
        </NavLink>
      </li>
    </ul>
  );
}

export default NavigationItems;
