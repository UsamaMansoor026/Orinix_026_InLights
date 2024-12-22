import React, { useState } from "react";

const Button = ({ children, onClick, padding, btnType, color }) => {
  const getBtnBgColor = (btnType) => {
    if (btnType === "primary") {
      return "primary_btn";
    } else if (btnType === "transparent") {
      return "transparent_btn";
    } else if (btnType === "white") {
      return "white_btn";
    } else {
      return "default_btn";
    }
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={`call_to_action z-1 ${getBtnBgColor(btnType)}`}
      style={{ padding, color }}
    >
      {children}
    </button>
  );
};

export default Button;
