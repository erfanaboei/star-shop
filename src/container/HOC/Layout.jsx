import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Header from "../../components/Header/Header";
import StarLogo from "../../assets/logo/star-logo.png";
function Layout(props) {
  return (
    <>
      <div className={classes.Header}>
        {/* <Header productInCart={props.productInCartCount} /> */}
        <Header />
        <Toolbar />
      </div>
      <main className={classes.Content}>{props.children}</main>
      <footer>
        <div className={classes.TopFooter}>
          <div className={classes.ImageBox}>
            <img src={StarLogo} alt="" />
            <br />
            <span>
              تلفن پشتیبانی 61930000-035 | 7 روز هقته , 24 ساعته پاسخگوی شما
              هستیم
            </span>
          </div>
          <div className={classes.GoTopPageBox}>
            <button onClick={() => window.scrollTo(0, 0)}>
              برو به بالا
              <i className="fa fa-angle-up"></i>
            </button>
          </div>
        </div>
        <div className={classes.BottomFooter}>
          <div className={classes.WithStarshopBox}>
            <p>با فروشگاه ستاره</p>
            <a href="#">اتاق خبر</a>
            <a href="#">فروش در فروشگاه ستاره</a>
            <a href="#">فرصت های شغلی</a>
            <a href="#">درباره فروشگاه ستاره</a>
            <a href="#">گزارش تخلف</a>
          </div>
          <div className={classes.CustomerServicesBox}>
            <p>خدمات مشتریان</p>
            <a href="#">سوالات متداول</a>
            <a href="#">رویه های بازگرداندن کالا</a>
            <a href="#">شرایط استفاده</a>
            <a href="#">حریم خصوصی </a>
            <a href="#">گزارش باگ</a>
          </div>
          <div className={classes.ShoppingGuideBox}>
            <p>راهنمای خرید</p>
            <a href="#">نحوه ثبت سفارش</a>
            <a href="#">رویه ارسال سفارش</a>
            <a href="#">شیوه های پرداخت</a>
          </div>
          <div className={classes.ContactUsBox}>
            <p>با ما در تماس باشید!</p>
            <div className={classes.VirtualPages}>
              <a href="#">
                <i className="fa fa-instagram fa-3x"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin fa-3x"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter fa-3x"></i>
              </a>
              <a href="#">
                <i className="fa fa-telegram fa-3x"></i>
              </a>
            </div>
            <div className={classes.EmailBox}>
              <p>با ثبت ایمیل , از جدیدترین تخفیفات باخبر شوید !</p>
              <div className={classes.InputBox}>
                <input type="text" placeholder="لطفا ایمیل خود را وارد کنید" />
                <button>ثبت</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
