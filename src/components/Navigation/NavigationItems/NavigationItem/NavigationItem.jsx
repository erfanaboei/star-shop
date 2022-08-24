import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
function navigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        exact
        className={props.active ? classes.active : null}
        to={props.Link}
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default navigationItem;
