/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Header from "../../components/Header/Header";
import StarLogo from "../../assets/logo/star-logo.png";
import {
  FaArrowUp,
  FaInstagram,
  FaTelegram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
function Layout(props) {
  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme:dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <>
      <div>
        {/* <Header productInCart={props.productInCartCount} /> */}
        <Header />
        <Toolbar />
      </div>
      <main>{props.children}</main>
      <footer className="border-t mt-4">
        <div className="flex">
          <div className="w-[50%] mt-3">
            <img src={StarLogo} alt="" className="h-[35px] w-[100px]" />
            <br />
            <span>
              تلفن پشتیبانی 61930000-035 | 7 روز هقته , 24 ساعته پاسخگوی شما
              هستیم
            </span>
          </div>
          <div className="w-[50%] mt-3">
            <button
              className="flex text-zinc-600 float-left bg-transparent border border-zinc-600 
              rounded-[15px] p-4 cursor-pointer hover:border-zinc-900 hover:text-zinc-900 
              dark:text-zinc-50 dark:border-zinc-50 dark:hover:text-zinc-500 dark:hover:border-zinc-500"
              onClick={() => window.scrollTo(0, 0)}
            >
              برو به بالا
              <FaArrowUp className="mr-3 mt-1" />
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-2">
          <div>
            <p className="my-4">با فروشگاه ستاره</p>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              اتاق خبر
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              فروش در فروشگاه ستاره
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              فرصت های شغلی
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              درباره فروشگاه ستاره
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              گزارش تخلف
            </a>
          </div>
          <div>
            <p className="my-4">با فروشگاه ستاره</p>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              اتاق خبر
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              فروش در فروشگاه ستاره
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              فرصت های شغلی
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              درباره فروشگاه ستاره
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              گزارش تخلف
            </a>
          </div>
          <div>
            <p className="my-4">خدمات مشتریان</p>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              سوالات متداول
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              رویه های بازگرداندن کالا
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              شرایط استفاده
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              حریم خصوصی{" "}
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              گزارش باگ
            </a>
          </div>
          <div>
            <p className="my-4">راهنمای خرید</p>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              نحوه ثبت سفارش
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              رویه ارسال سفارش
            </a>
            <a
              href="#"
              className="text-zinc-500 block my-3 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500"
            >
              شیوه های پرداخت
            </a>
          </div>
          <div className="col-span-2">
            <p className="my-4">با ما در تماس باشید!</p>
            <div className="flex w-full">
              <a href="#">
                <FaInstagram className="text-5xl my-4 mx-8 text-zinc-500 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500" />
              </a>
              <a href="#">
                <FaLinkedinIn className="text-5xl my-4 mx-8 text-zinc-500 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500" />
              </a>
              <a href="#">
                <FaTwitter className="text-5xl my-4 mx-8 text-zinc-500 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500" />
              </a>
              <a href="#">
                <FaTelegram className="text-5xl my-4 mx-8 text-zinc-500 hover:text-zinc-800 transition-all dark:text-zinc-50 dark:hover:text-zinc-500" />
              </a>
            </div>
            <div>
              <p className="my-4">
                با ثبت ایمیل , از جدیدترین تخفیفات باخبر شوید !
              </p>
              <div className="w-full flex flex-col lg:flex-row">
                <input
                  className="text-slate-800 w-full h-[40px] rounded-md ml-3 border border-gray-300 focus:bg-gray-300 transition-colors outline-none"
                  type="text"
                  placeholder="لطفا ایمیل خود را وارد کنید"
                />
                <button className="px-4 ">ثبت</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
