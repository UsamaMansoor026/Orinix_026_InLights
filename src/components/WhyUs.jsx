import React from "react";
import gallery1 from "../assets/gallery33.png";
import software1 from "../assets/softwareIcons/software1.png";
import software2 from "../assets/softwareIcons/software2.png";
import { features } from "../assets/constants";
import FeatureCard from "./FeatureCard";
import SectionHeading from "./SectionHeading";
import BlurCircles from "./BlurCircles";
import Star from "./Star";

const WhyUs = () => {
  return (
    <>
      <section className="whyus" id="whyus">
        <SectionHeading fontSize="60px">
          Why Orinix would be your best fit?
        </SectionHeading>
        {/* <h2 className="sectionHeading-60">Why Orinix would be your best fit?</h2> */}
        <p>Watch this 1 min video to learn about Orinix.</p>

        <div className="whyus_img relative flex_row_center">
          <img src={gallery1} alt="Gallery" loading="lazy" />
          <span className="playBtn flex_row_center">
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0226 10.5931L0.82526 0.770773C0.681342 0.688487 0.504797 0.689432 0.361758 0.773255C0.218718 0.857078 0.13077 1.01113 0.130859 1.1777V20.8224C0.13077 20.989 0.218718 21.143 0.361758 21.2268C0.504797 21.3106 0.681342 21.3116 0.82526 21.2293L18.0226 11.407C18.1682 11.3239 18.2582 11.1685 18.2582 11C18.2582 10.8316 18.1682 10.6762 18.0226 10.5931Z"
                fill="white"
              />
            </svg>
          </span>
        </div>

        {/* Parent Wrapper */}
        <div className="featureCard_wrapper">
          {features?.length > 0 &&
            features.map((feature) => {
              return <FeatureCard item={feature} />;
            })}
        </div>
      </section>

      {/* Useful Software */}
      <section className="usefulsoftware relative" id="usefulsoftware">
        <BlurCircles bgColor="bluish" left="-150px" top="80px" />
        <BlurCircles bgColor="pinkish" right="-110px" top="120px" />
        <Star left="262px" top="200px" />
        <Star left="1000px" top="150px" />
        <Star left="100px" top="450px" />
        <SectionHeading fontSize="65px">
          Useful software that We assist
        </SectionHeading>

        <div className="software_icons flex_row_center">
          <img src={software1} alt="List of softwares" />
          <img src={software2} alt="List of softwares" />
        </div>
      </section>
    </>
  );
};

export default WhyUs;
