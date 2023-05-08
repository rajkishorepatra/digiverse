import React from "react";
import web from "../images/refundpolicy.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const RefundPolicy = () => {
  return (
    <>
      <section id="refundheader" className="d-flex aligm-items-center ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="refundheader">
                    Refund Policy
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <p className="subheader my-3">
                    ➣ We are dedicated to providing our clients with great
                    service and outcomes at DigiVerse360. If you are
                    dissatisfied with our digital marketing services for any
                    reason, we have a refund policy that allows you to request a
                    refund within 10 days of your purchase. <br /> <br /> ➣ To be eligible for
                    a refund, you must provide a thorough explanation of why you
                    are unhappy with our services and give us the opportunity to
                    resolve the problem. If we are unable to address the issue
                    to your satisfaction, we will return your purchase price in
                    full. <br /> <br /> ➣ Please keep in mind that we do not accept refunds
                    for services already provided or completed. Furthermore, no
                    refunds will be issued for any third-party fees or expenses
                    made on your behalf. <br /> <br /> ➣ If you want to seek a refund, please
                    contact us at <span className="text-primary" >digiverse18@gmail.com</span> and provide us with
                    the specifics of your purchase as well as the reason for
                    your request. Our staff will analyse your inquiry and get
                    back to you as soon as possible. We have the right to change
                    or modify our refund policy at any time. Please contact us
                    if you have any questions or complaints regarding our return
                    policy
                  </p>
                  <div className="mt-3"></div>
                  <NavLink to="/home" className="btn btn-outline-primary mb-5">
                    <strong> Back to home </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={web}
                    className="image-fluid animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
