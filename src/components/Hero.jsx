import React from "react";
import Button from "./Button";
import HeroImg from "../assets/monitor.svg";
import InfiniteScroll from "./InfiniteScroll";
import BlurCircles from "./BlurCircles";

const Hero = () => {
  return (
    <section className="home relative" id="home">
      <BlurCircles bgColor="bluish" left="-139px" top="179px" />
      <BlurCircles bgColor="pinkish" left="370px" top="357px" />
      <BlurCircles bgColor="bluish" right="-90px" top="377px" />
      <h1 className="hero_heading z-1">
        Integrate AI for a competitive analysis for your business ⭐️
      </h1>
      <p className="hero_subtext z-1">
        Elevate your advertising game with creatives that consistently
        outperform your competitors, setting your brand apart.
      </p>

      {/* Call to action Buttons */}
      <div className="flex_row_center gap-20 z-1">
        <Button
          onClick={() => {}}
          padding="10px 40px"
          btnType="primary"
          color="var(--white)"
        >
          Join The Waitlist
        </Button>
        <Button
          onClick={() => {}}
          padding="10px 40px"
          btnType="transparent"
          color="var(--white)"
        >
          Know More
        </Button>
      </div>

      {/* Hero Image */}
      <div className="flex_row_center relative">
        <img
          className="hero_img"
          src={HeroImg}
          alt="Dashboard data"
          loading="lazy"
        />
      </div>

      {/* Horizontal Scroll */}
      <InfiniteScroll />
    </section>
  );
};

export default Hero;
