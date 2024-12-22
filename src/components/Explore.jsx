import React from "react";
import workIng from "../assets/work.png";
import Button from "./Button";

const Explore = () => {
  return (
    <section className="explore" id="explore">
      <div className="explore_innerwrapper">
        <div className="explore_left">
          <h2>Explore Free Version now!</h2>
          <p>
            Search all the open positions on the web. Get your own personalized
            dashboard for lifetime
          </p>

          <div>
            <Button onClick={() => {}} btnType="white" padding="15px 22px">
              Join Waitlist
            </Button>
            <Button
              onClick={() => {}}
              btnType="transparent"
              padding="15px 22px"
            >
              Contact
            </Button>
          </div>
        </div>
        <div className="explore_right">
          <img src={workIng} alt="Person working" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
