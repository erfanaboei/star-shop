import React from "react";
import classes from "./SearchBox.module.css";
import { useSearchAction } from "../../../context/SearchContext";
function SearchBox(props) {
  const { setSearchValue } = useSearchAction();
  return (
    <>
      <div className="SearchBox">
        <input
          type="text"
          name="Search"
          className={classes.InputElement}
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
