import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../images/thank-you.png";
const ServicePayment = () => {
  return (
    <>
    <br /> <br /> <br /> <br /> <br /> <br />
    <section id="header" className="d-flex aligm-items-center header ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                  <h1 className="mainheader" >
                    Thank You for choosing
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <p className="subheader my-3" style={{color: 'rgb(123, 120, 120)'}} >
                  Thank you for choosing Digiverse360! We appreciate your trust in our services.
                   To complete the payment for the discussed deal, please proceed to our secure
                    payments page. Your transaction will be processed seamlessly, ensuring a hassle-free
                     experience. We are grateful for the opportunity to work with you and look forward to
                      delivering exceptional results that meet and exceed your expectations. Should you have 
                      any questions or need further assistance, please don't hesitate to reach out. Thank you
                       again for doing business with us.
                  </p>
                  <NavLink to="#" className="btn btn-outline-primary mb-5">
                   <strong> Pay Now </strong>
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
  )
}

export default ServicePayment;
