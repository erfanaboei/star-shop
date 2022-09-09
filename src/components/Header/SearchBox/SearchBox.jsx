import React from "react";
// import classes from "./SearchBox.module.css";
import { useSearchAction } from "../../../context/SearchContext";
function SearchBox(props) {
  const { setSearchValue } = useSearchAction();
  return (
    <>
      <div className="">
        <input
          type="text"
          name="Search"
          className=" w-full py-2 pr-2 bg-slate-300  rounded-md transition-colors outline-none focus:bg-white"
          placeholder="کلمه مورد نظرتان را وارد کنید..."
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default SearchBox;
