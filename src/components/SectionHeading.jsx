import React from "react";

const SectionHeading = ({ children, fontSize }) => {
  return (
    <h2 className="sectionHeading z-1" style={{ fontSize: fontSize }}>
      {children}
    </h2>
  );
};

export default SectionHeading;
