import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
function toolbar(props) {
  return (
    <>
      <div className={classes.Toolbar}>
        <div>
          <nav className={classes.DesktopOnly}>
            <NavigationItems />
          </nav>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default toolbar;
