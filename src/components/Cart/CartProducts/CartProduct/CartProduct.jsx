import React from "react";
// import classes from "./CartProduct.module.css";
import Separate from "./../../../../Utilities/Separate";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillCartCheckFill, BsTruck} from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineStarRate } from "react-icons/md";
import {FaMinus , FaPlus} from "react-icons/fa";
function CartProduct(props) {
  const productCount = props.currentProductCount(props.id);
  return (
    <>
      <div className="border-t border-slate-400 mt-2">
        <div className="">
          <div className="grid grid-cols-3 mt-2">
            <div className="my-2 ml-2">
              <img src={props.img} alt="" className="rounded-lg h-full" />
            </div>
            <div className="w-full">
              <p className="my-auto">{props.productTitle}</p>
              <br />
              <p className="my-auto flex">
                <BiNotepad className="text-2xl ml-2" />
                {props.productDescription}
              </p>
              <br />
              <p className="my-auto flex">
                <BsTruck className="text-2xl ml-2" />
                {props.productShortDescription}
              </p>
              <br />
              <p className="my-auto flex">
                <BsFillCartCheckFill className="text-2xl ml-2" />
                {props.productSales}
              </p>
              <br />
              <p className="my-auto flex">
                <MdOutlineStarRate className="text-2xl ml-2" />
                {props.productRating}
              </p>
              <br />
            </div>
            <div className="w-full">
              <button
                className="float-left bg-transparent border-none transition-colors text-black dark:text-white dark:hover:text-red-600"
                onClick={() => props.removeProduct(props.id)}
              >
                <AiOutlineCloseCircle className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="flex border border-slate-400 rounded-lg pt-2 px-2 ml-10">
              <div className="m-auto mx-2">
                <button
                  className="cursor-pointer bg-transparent border-none text-red-500"
                  onClick={() => props.incrementProduct(props.id)}
                >
                  <FaPlus  className="text-2xl"/>
                </button>
              </div>
              <div className="mx-3">
                <span className="">{productCount}</span>
              </div>
              <div className="m-auto mx-2">
                <button
                  className="cursor-pointer bg-transparent border-none text-red-500"
                  onClick={() => props.decrementProduct(props.id)}
                  disabled={productCount < 2 ? true : false}
                >
                  <FaMinus  className="text-2xl"/>
                </button>
              </div>
            </div>
            <div className="text-red-500">
              <div className="flex">
                <TbDiscount2 className="text-lg ml-1" />
                <p className="text-[12px]">
                  {Separate(props.productDiscountPrice)} تومان
                </p>
              </div>
              <div className="">{Separate(props.productPrice)} تومان</div>
            </div>
          </div>
        </div>
        <div className="float-left">
          <button className="bg-transparent border-none text-red-400 transition-colors">
            انتقال محصول به خرید بعدی <i className="fa fa-chevron-left"></i>
          </button>
        </div>
        <br />
      </div>
    </>
  );
}

export default CartProduct;
