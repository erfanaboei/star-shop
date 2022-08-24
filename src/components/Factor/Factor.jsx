import React from "react";
import classes from "./Factor.module.css";
import miladi_be_shamsi from "../../Utilities/DateConvertor";
import { useCart, useCartAction } from "../../context/CartContext";
import ProdutcsData from "./../Products/ProductsData";
import Separate from "./../../Utilities/Separate";
function Factor(props) {
  var date = new Date();
  const cart = useCart();
  const { currentProductCount } = useCartAction();
  const result = ProdutcsData.filter((item) => {
    return cart.some((c) => {
      return item.id === c.id;
    });
  });
  let table = null;
  let tableTR = [];
  let totalPrice = 0;
  if (result.length > 0) {
    result.map((p, index) => {
      let discountPrice = (p.price * p.discount) / 100;
      let totalDiscountPrice = discountPrice * currentProductCount(p.id);
      let currentProductTotalPrice =
        p.price * currentProductCount(p.id) - totalDiscountPrice;

      totalPrice += currentProductTotalPrice;
      tableTR.push(
        <tr key={index}>
          <td>{p.id}</td>
          <td>{p.title}</td>
          <td>{currentProductCount(p.id)}</td>
          <td>{Separate(p.price)}</td>
          <td>{Separate(discountPrice)}</td>
          <td>{Separate(totalDiscountPrice)}</td>
          <td>{Separate(currentProductTotalPrice)}</td>
        </tr>
      );
    });
    table = (
      <>
        <div className={classes.FactorHeader}>
          <div className={classes.SellerDetailsBox}>
            <p>فروشنده : فرشگاه ستاره</p>
            <p>آدرس فروشگاه : یزد خیابان کاشانی جنب پمپ بنزین</p>
          </div>
          <div className={classes.CustomerDetailsBox}>
            <p>مشتری : عرفان ابوئی مهریزی</p>
            <p>تلفن همراه مشتری : 09140743840</p>
          </div>
          <div className={classes.DateBox}>
            <p>
              تاریخ صدور فاکتور :{" "}
              {miladi_be_shamsi(
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
              )}
            </p>
            <p>شماره فاکتور : {252525}</p>
          </div>
        </div>
        <table className={classes.FactorTable}>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام کالا</th>
              <th>تعداد</th>
              <th>قیمت واحد</th>
              <th>تخفیف واحد</th>
              <th>تخفیف</th>
              <th>مبلغ</th>
            </tr>
          </thead>
          <tbody>
            {tableTR}
            {/* <tr>
            <td>1</td>
            <td>کیک ماربل</td>
            <td>5</td>
            <td>15000</td>
            <td>6000</td>
            <td>100000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>کیک شکلاتی</td>
            <td>8</td>
            <td>15000</td>
            <td>6000</td>
            <td>100000</td>
          </tr> */}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>جمع کل مبلغ</td>
              <td>{Separate(totalPrice)}</td>
            </tr>
          </tfoot>
        </table>
        <div className={classes.FactorFooter}>
          <button id={classes.btnPrint} onClick={() => window.print()}>
            چاپ فاکتور
          </button>
        </div>
      </>
    );
  } else {
    table = <p>فاکتوری برای صدور یافت نشد</p>;
  }

  return (
    <>
      <div className={classes.Factor}>{table}</div>
    </>
  );
}

export default Factor;
