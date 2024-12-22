import React from "react";
import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import WhyUs from "../components/WhyUs";
import Faq from "../components/Faq";
import Explore from "../components/Explore";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <OurMission />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <Faq />
      <Explore />
    </>
  );
};

export default Home;
