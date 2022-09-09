import React from "react";
// import classes from "./Factor.module.css";
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
        <tr className="border-b border-slate-400" key={index}>
          <td className="p-3">{p.id}</td>
          <td className="p-3">{p.title}</td>
          <td className="p-3">{currentProductCount(p.id)}</td>
          <td className="p-3">{Separate(p.price)}</td>
          <td className="p-3">{Separate(discountPrice)}</td>
          <td className="p-3">{Separate(totalDiscountPrice)}</td>
          <td className="p-3">{Separate(currentProductTotalPrice)}</td>
        </tr>
      );
    });
    table = (
      <>
        <div className="grid grid-cols-1 justify-between md:grid-cols-3 md:items-start">
          <div className="text-start md:mx-auto">
            <p className="text-lg text-slate-400">فروشنده : فرشگاه ستاره</p>
            <p className="text-lg text-slate-400">آدرس فروشگاه : یزد خیابان کاشانی جنب پمپ بنزین</p>
          </div>
          <div className="text-start md:mx-auto">
            <p className="text-lg text-slate-400">مشتری : عرفان ابوئی مهریزی</p>
            <p className="text-lg text-slate-400">تلفن همراه مشتری : 09140743840</p>
          </div>
          <div className="text-start md:mx-auto">
            <p className="text-lg text-slate-400">
              تاریخ صدور فاکتور :{" "}
              {miladi_be_shamsi(
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
              )}
            </p>
            <p className="text-lg text-slate-400">شماره فاکتور : {252525}</p>
          </div>
        </div>
        <table className="text-slate-300 w-full shadow-lg border-collapse my-6 text-[1rem]">
          <thead className="bg-zinc-900">
            <tr className="border-b border-slate-400">
              <th className="p-3">ردیف</th>
              <th className="p-3">نام کالا</th>
              <th className="p-3">تعداد</th>
              <th className="p-3">قیمت واحد</th>
              <th className="p-3">تخفیف واحد</th>
              <th className="p-3">تخفیف</th>
              <th className="p-3">مبلغ</th>
            </tr>
          </thead>
          <tbody>
            {tableTR}
          </tbody>
          <tfoot>
            <tr className="border-b border-slate-400">
              <td className="p-3" colSpan={6}>جمع کل مبلغ</td>
              <td className="p-3">{Separate(totalPrice)}</td>
            </tr>
          </tfoot>
        </table>
        <div className="">
          <button className="p-2" onClick={() => window.print()}>
            چاپ فاکتور
          </button>
        </div>
      </>
    );
  } else {
    table = <p className="text-3xl font-bold">فاکتوری برای صدور یافت نشد</p>;
  }

  return (
    <>
      <div className="m-auto text-center">{table}</div>
    </>
  );
}

export default Factor;
