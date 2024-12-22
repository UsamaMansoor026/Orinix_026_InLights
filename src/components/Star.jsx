import React from "react";
import star from "../assets/star.svg";

const Star = ({ left, top }) => {
  return (
    <div className="star flex_row_center" style={{ left: left, top: top }}>
      <img src={star} alt="star" />
    </div>
  );
};

export default Star;
