import React, { useState, useEffect } from "react";
// import classes from "./CartAndAccountIcon.module.css";
import { NavLink } from "react-router-dom";
import { useCartAction } from "../../../context/CartContext";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";
import { BsSun } from "react-icons/bs";
function CartAndAccountIcon(props) {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const { allProductCount } = useCartAction();
  return (
    <>
      <div className="float-left flex mt-2">
        <button
          className="bg-transparent border-none text-slate-900 hover:text-slate-900 dark:text-slate-50"
          onClick={() => {
            if (localStorage.getItem("theme")) {
              if (localStorage.getItem("theme") === "light") {
                document.documentElement.classList.add("dark");
                setDarkMode(true);
                localStorage.setItem("theme", "dark");
              } else {
                document.documentElement.classList.remove("dark");
                setDarkMode(false);
                localStorage.setItem("theme", "light");
              }
            }
          }}
        >
          {darkMode ? (
            <BsSun className="text-3xl mx-1 mt-[-8px] " />
          ) : (
            <MdOutlineNightlight className="text-3xl mx-1 mt-[-8px]" />
          )}
        </button>
        <span className="text-3xl">|</span>

        <NavLink to="/profile">
          <FiUser className="text-3xl mx-2" />
        </NavLink>
        <span className="text-3xl">|</span>
        <NavLink to="/cart">
          <BsCart2 className="text-3xl mx-2" />
          <div className="mt-[-10px]">
            <small className="bg-red-400 px-1 rounded-md text-white">
              {allProductCount}
            </small>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default CartAndAccountIcon;
