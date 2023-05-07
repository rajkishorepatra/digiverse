import React from 'react'
import terms from "../images/terms.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Terms = () => {
  return (
    <>
    <section id="refundheader" className="d-flex aligm-items-center ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="refundheader">
                    Terms and Conditions
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <p className="subheader my-3">
                   Welcome to DigiVerse360 We provide a range of digital marketing
                   services and courses to help you achieve your business goals. Before using our 
                   website and services, please read our terms and conditions carefully. By accessing
                    our website and using our services, you agree to our terms and conditions. <br /> <br />


                    ➣ <b className='text-warning' > Intellectual Property </b>: <br /> <br /> All content, including text, graphics, logos,
                     and images, on our website is protected by copyright and intellectual 
                     property laws. You may not use, copy, or reproduce any content from our
                      website without our express permission. <br /> <br /> 
                      
                      ➣ <b className='text-warning'> Use of Our Services:</b> <br /> <br /> Our services are intended for your personal
                       or business use only. You may not use our services for any illegal
                        or unauthorized purpose.<br /> <br />
                    
                    
                     ➣ <b className='text-warning'> Payment and Refunds:</b> <br /> <br /> We offer digital marketing services and courses for a fee.
                      Payment is required in full before services are rendered. We offer refunds in accordance
                       with our <NavLink to="/refundpolicy"> refund policy.</NavLink> <br /> <br />
                    
                    
                     ➣ <b className='text-warning'> Disclaimer:</b> <br /> <br /> While we make every effort to provide accurate and up-to-date 
                     information, our website and services may contain errors or inaccuracies. We make no
                      guarantees or warranties as to the accuracy or completeness of the information provided 
                      on our website or through our services. <br /> <br />


                      ➣<b className='text-warning'> Limitation of Liability:</b> <br /> <br /> We shall not be liable for any direct, indirect, incidental, 
                      special, or consequential damages arising out of or in connection with the use of our 
                      website or services <br /> <br />


                      ➣ <b className='text-warning' > Termination:</b> <br /> <br /> We reserve the right to terminate your access to our website 
                      and services at any time, for any reason. <br /> <br />

                      ➣ <b className='text-warning'> Changes to Terms and Conditions: </b> <br /> <br /> We reserve the right to make changes to our terms and conditions at any time. 
                      Your continued
                       use of our website and services after any such changes constitutes your acceptance of the revised terms and conditions.<br /> <br />

                      ➣ <b className='text-warning'> Contact Us: </b> <br /> <br /> If you have any questions or concerns about our terms and conditions, please don't hesitate to contact us. 
                      We're here to help and are committed to providing you with the best possible service.

                      
                  </p>
                  <div className="mt-3"></div>
                  <NavLink to="/home" className="btn btn-outline-primary mb-5 ">
                    <strong> Back to home </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={terms}
                    className="image-fluid animated"
                    alt="terms_img"
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

export default Terms
