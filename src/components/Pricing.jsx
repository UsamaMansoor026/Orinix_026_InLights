import React, { act, useState } from "react";
import SectionHeading from "./SectionHeading";
import { monthlyPricingPlans, yearlyPricingPlans } from "../assets/constants";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const [activeFilter, setActiveFilter] = useState("monthly");

  return (
    <section className="pricing" id="pricing">
      <SectionHeading fontSize="60px">Pricing Plans</SectionHeading>
      <p>
        Coca landing page UI Kit no credit card required. All plans come with a
        free, 14 day trial of our Premium features.
      </p>

      {/* Filter Buttons */}
      <div className="pricing_filters">
        <button
          type="button"
          className={`${activeFilter === "monthly" ? "active" : ""}`}
          onClick={() => setActiveFilter("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`${activeFilter === "yearly" ? "active" : ""}`}
          onClick={() => setActiveFilter("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards Wrapper */}
      <div className="pricingCards_wrapper">
        {activeFilter === "monthly"
          ? monthlyPricingPlans?.length > 0 &&
            monthlyPricingPlans.map((plan) => <PriceCard plan={plan} />)
          : yearlyPricingPlans?.length > 0 &&
            yearlyPricingPlans.map((plan) => <PriceCard plan={plan} />)}
      </div>
    </section>
  );
};

export default Pricing;
