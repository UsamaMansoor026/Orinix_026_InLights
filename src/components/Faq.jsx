import React from "react";
import SectionHeading from "./SectionHeading";
import { faqs } from "../assets/constants";

const Faq = () => {
  return (
    <section className="faq" id="faq">
      <SectionHeading fontSize="60px">
        Frequently Asked Questions
      </SectionHeading>
      <p>Create custom landing pages with Omega that converts.</p>

      {/* Faq's wrapper */}
      <div className="faq_wrapper">
        {faqs?.length > 0 &&
          faqs.map((faq) => (
            <article key={faq.id}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
      </div>

      <p className="last_text">
        Didn't find your answer? <span>Contact us here</span>
      </p>
    </section>
  );
};

export default Faq;
