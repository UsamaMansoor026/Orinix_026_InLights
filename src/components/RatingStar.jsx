import React from "react";
import star from "../assets/users/ratingStar.svg";

const RatingStar = ({ rating }) => {
  return (
    <div className="ratingStar">
      {Array.from({ length: rating }).map((_, index) => (
        <img
          key={index}
          src={star} // Use the same golden star image
          alt="Rating Star"
        />
      ))}
    </div>
  );
};

export default RatingStar;
