import React from "react";
import check from "../assets/check-blue.svg";
import checkPopular from "../assets/check-popular.svg";
const PriceCard = ({ plan }) => {
  return (
    <article
      className={`priceCard relative ${plan.popular ? "popularCard" : ""}`}
      key={plan.id}
    >
      {/* Popular */}
      {plan.popular && <div className="popular_priceCard">Most Popular</div>}
      {plan.popular && <div className="spacing"></div>}
      <p>{plan.type}</p>
      <div className="priceCard_heading">
        <h2>${plan.price}</h2>
        <span>/{plan.duration}</span>
      </div>
      <hr />
      <ul className="priceCard_features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            <img src={plan.popular ? checkPopular : check} alt="Check Icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="priceCard_btn">
        <button type="button">Choose Plan</button>
      </div>
    </article>
  );
};

export default PriceCard;
