import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import SearchBox from "../../Header/SearchBox/SearchBox";
function Toolbar(props) {
  return (
    <>
      <div className={["mt-14 h-14 w-full fixed top-0 left-0 items-center px-5 z-[90]  dark:bg-slate-900 " , classes.Toolbar].join(" ")}>
        <div>
          <nav className="hidden md:block">
            <NavigationItems />
          </nav>
        </div>
        <div className="flex my-2 md:hidden">
            <div className="w-full col-span-2"><SearchBox/></div>
        </div>
        
      </div>
    </>
  );
}

export default Toolbar;
