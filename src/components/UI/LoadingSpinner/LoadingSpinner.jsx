import React from "react";
import classes from "./LoadingSpinner.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingSpinner() {
  return (
    <>
      <div className={classes.Main}>
        <Skeleton height="220px" baseColor="black" highlightColor="red" />
        <div className={classes.DetailsBox}>
          <div className={classes.TitleBox}>
            <Skeleton height="30px" baseColor="black" highlightColor="red" />
          </div>
          <div className={classes.RatingBox}>
            <Skeleton height="30px" baseColor="black" highlightColor="red" />
          </div>
          <div className={classes.PriceBox}>
            <Skeleton height="30px" baseColor="black" highlightColor="red" />
          </div>
          <div className={classes.ButtonBox}>
            <Skeleton
              height="30px"
              width="80%"
              baseColor="black"
              highlightColor="red"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingSpinner;
