import React from "react";
import dots from "../assets/dots.svg";
import code from "../assets/code.svg";
import PhoneImg from "../assets/missionImg.svg";
import { ourMission } from "../assets/constants";

const OurMission = () => {
  return (
    <section className="ourmission relative" id="ourmission">
      <div className="ourmission_left">
        <img className="dots" src={dots} alt="Decoration dots" />
        <img className="phoneImg" src={PhoneImg} alt="" />

        {/* Small Floating Card */}
        <div className="small_floating_card">
          <div className="small_floating_content">
            <img src={code} alt="" />
            <div>
              <h5>Food Utilization</h5>
              <p>24 Data Available</p>
            </div>
          </div>

          <button type="button">Analysis Now</button>
        </div>
      </div>
      <div className="ourmission_right">
        <h2>Help you find the best analysis for your business</h2>
        <div className="ourmission_list">
          {ourMission.map((item) => (
            <article key={item.id}>
              {/* Icon */}
              <div className="mission_card_icon flex_row_center">
                <img src={item.icon} alt="Tick" />
              </div>

              {/* Content */}
              <div className="ourmission_card_content flex_row_center">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
