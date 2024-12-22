import React from "react";

const BlurCircles = ({ bgColor, ...positions }) => {
  const getBgColor = (bgColor) => {
    if (bgColor === "bluish") {
      return "bluish_blur";
    } else if (bgColor === "pinkish") {
      return "purplish_blur";
    } else {
      return "white_blur";
    }
  };

  return (
    <div
      className={`blur_circle ${getBgColor(bgColor)}`}
      style={{ ...positions }}
    ></div>
  );
};

export default BlurCircles;
