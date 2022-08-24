import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button
      className={[
        classes.Button,
        classes[props.btnType],
        classes[props.btnClass],
        classes[props.btnDisplay],
      ].join(" ")}
      onClick={props.clicked}
      onMouseUp={props.mouseUp}
    >
      {props.children}
    </button>
  );
};

export default button;
