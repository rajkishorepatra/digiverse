import React from "react";
import testimonial from "../images/testimonial.png";
import Vid1 from "../videos/vid1.mp4";
import Vid2 from "../videos/vid2.mp4";
import Vid3 from "../videos/vid3.mp4";

import TestimonialContainer from "./TestimonialContainer";

const ClientTestimonial = () => {
  return (
    <div className="mt-n5">
      <TestimonialContainer
        name="Client Testimonials"
        imgsrc={testimonial}
        tagline=" “We're committed to delivering results for our clients - and their glowing testimonials speak to our success” - Mr. Shubham Pani - CEO, Digiverse360 "
        content="At Digiverse360, we're proud of the work we do and the results we deliver for our clients. But don't just take our word for it - here's what some of our clients have to say about working with us:"
      />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <div className="card testicard">
                <video src={Vid1} controls={true}></video>
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <strong>Sonal Sinha</strong>
                  </h5>
                  <p className="card-text">
                    CEO/Founder - Youthpreneurs, India
                  </p>
                </div>
              </div>

              <div className="card testicard">
                <video src={Vid2} controls={true}></video>
                <div className="card-body">
                  <h5 className="card-title text-primary ">
                    <strong>Siddharth Bohre</strong>
                  </h5>
                  <p className="card-text">
                    Founder: StockSchool Trading Academy - Youtube (150k+)
                  </p>
                </div>
              </div>

              <div className="card testicard mb-5">
                <video src={Vid3} controls={true}></video>
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <strong>Giriraj Lakhotia</strong>
                  </h5>
                  <p className="card-text">Co-Founder : RGL Groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientTestimonial;
