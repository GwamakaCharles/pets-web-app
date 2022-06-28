/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import Buttons from "../Buttons";

const NextArrow = (props: { style: any; onClick: any; }) => {
  const { style, onClick } = props;
  return (
    <Buttons
      classes={{ btn: "bg-light-blue text-white w-8 h-8 absolute right-2 top-1/2 transform -translate-y-1/2" }}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="/icons/arrow-right.svg" alt="right-arrow" className="text-white h-4 w-4 mx-auto" />
    </Buttons>
  );
};

const PrevArrow = (props: { onClick: any; }) => {
  const { onClick } = props;
  return (
    <Buttons
      classes={{ btn: "bg-light-blue text-white w-24 py-2 my-2" }}
      onClick={onClick}
    >
      <img src="/icons/arrow-left.svg" alt="left-arrow" />
    </Buttons>
  );
};

export { NextArrow, PrevArrow };
