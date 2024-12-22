import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <article key={item.id}>
      <div
        className="featureIcon flex_row_center"
        style={{ backgroundColor: item.iconBg }}
      >
        <img src={item.icon} alt={item.title} />
      </div>

      {/* Content */}
      <div className="featureCard_content">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
