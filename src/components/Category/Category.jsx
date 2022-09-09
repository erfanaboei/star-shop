import React from "react";
import Categories from "./Categories";
import img from "../../assets/CategoryBackground/Category-Background.jpg";
function Category() {
  let element = [];
  Categories.map((c, index) => {
    element.push(
      <div key={index} className="w-full h-full flex flex-col mt-4">
        <div className="mx-5">
          <img className="w-full h-[250px] rounded-lg cursor-pointer" src={c.img} alt="" />
        </div>
        <div>
          <p className="text-lg font-bold py-4 cursor-pointer">{c.title}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="w-full">
        <div className="w-full h-[500px] bg-slate-700/60 absolute right-0">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl text-slate-900 pt-4">دسته بندی ها</h1>
        </div>
        <div className="grid grid-cols-2 mb-10 text-center relative md:grid-cols-3 lg:grid-cols-4  ">
          {element}
        </div>
      </div>
    </>
  );
}

export default Category;
