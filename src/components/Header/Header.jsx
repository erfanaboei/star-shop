import React, { useState } from "react";
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import SearchBox from "./SearchBox/SearchBox";
import CartAndAccountIcon from "./CartAndAccountIcon/CartAndAccountIcon";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header(props) {
  const [show, setShow] = useState(false);
  const ShowChangeHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full h-[56px] fixed top-0 left-0 flex justify-between items-center py-5 z-[90] bg-white dark:bg-slate-900 dark:text-white">
        <div className="mr-3 md:hidden" onClick={ShowChangeHandler}>
          {!show ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <div className="w-[20%] mx-auto">
          <Logo />
        </div>
        <div className="hidden md:block w-full mx-4 ml-52 float-right">
          <SearchBox />
        </div>
        <div className="w-auto">
          {/* <CartAndAccountIcon productInCart={props.productInCart} /> */}
          <CartAndAccountIcon />
        </div>
      </div>
      {show ? (
        <div className="flex flex-row">
          <div
            className={[
              classes.Menu,
              "w-[60%] h-screen z-10 fixed shadow-5xl shadow-red-500 mt-[-20px] right-0 md:hidden",
            ].join(" ")}
          >
            <ul className="flex flex-col">
              <li className="my-3 mx-2 border-b border-red-700 pb-4">
                <NavLink
                  className="text-red-600 block hover:text-red-600 transition-all"
                  exact
                  to="/"
                  activeClassName="text-red-600"
                >
                  صفحه اصلی
                </NavLink>
              </li>
              <li className="my-3 mx-2 border-b border-red-700 pb-4">
                <NavLink
                  className="text-red-600 block hover:text-red-700 transition-all"
                  exact
                  to="/favorite-products"
                  activeClassName="text-red-700"
                >
                  لیست علاقه مندی ها
                </NavLink>
              </li>
              <li className="my-3 mx-2 border-b border-red-700 pb-4">
                <NavLink
                  className="text-red-600 block hover:text-red-700 transition-all"
                  exact
                  to="/about-us"
                  activeClassName="text-red-700"
                >
                  درباره ما
                </NavLink>
              </li>
              <li className="my-3 mx-2 border-b border-red-700 pb-4">
                <NavLink
                  className="text-red-600 block hover:text-red-700 transition-all"
                  exact
                  to="/product"
                  activeClassName="text-red-700"
                >
                  محصولات
                </NavLink>
              </li>
            </ul>
            <div className="flex flex-col">
              <button className="w-[90%] mx-auto py-2">ثبت نام</button>
              <button className="w-[90%] mx-auto mt-1 py-2 bg-transparent text-red-600 hover:border-red-700">
                ورود
              </button>
            </div>
          </div>
          <div
            className="bg-zinc-900/80 w-[40%] h-screen z-10 fixed mt-[-20px] left-0 md:hidden"
            onClick={ShowChangeHandler}
          ></div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
