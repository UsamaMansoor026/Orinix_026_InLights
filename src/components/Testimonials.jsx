import React from "react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../assets/constants";
import RatingStar from "./RatingStar";
import BlurCircles from "./BlurCircles";

const Testimonials = () => {
  return (
    <section className="testimonial relative" id="testimonial">
      <BlurCircles bgColor="white" left="1000px" top="100px" />
      <SectionHeading fontSize="48px">
        What people are saying about Circle
      </SectionHeading>

      <div className="testimonial_slider">
        {testimonials?.length > 0 &&
          testimonials.map((testimonial) => (
            <article key={testimonial.id}>
              <div className="testimonial_header">
                <img src={testimonial.avatar} alt="" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.platform}</p>
                </div>
              </div>

              <div className="testimonial_body">
                <p>{testimonial.comment}</p>

                <RatingStar rating={testimonial.rating} />
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
