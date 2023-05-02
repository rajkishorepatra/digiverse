import React from 'react'
import {NavLink} from 'react-router-dom';
import privacy from '../images/privacy.png';

const Privacypolicy = () => {
  return (
   <>
    <section id="refundheader" className="d-flex aligm-items-center ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="refundheader">
                    Privacy Policy
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <p className="subheader my-3">
                    ➣ We take your privacy seriously at DigiVerse360. We are committed to safeguarding 
                    your personal information and ensuring the safety and security of your data.
                    
                     <br /> <br /> ➣ Our privacy policy explains what information we collect from users, 
                        how we use it, and how we protect it. You agree to our privacy policy 
                        by using our website and services.
                        
                        <br /> <br /> ➣ In order to provide our services to you, we collect personal information 
                        such as your name, email address, and payment information. This information 
                        may also be used to communicate with you about your account and our services,
                         as well as to send you promotional materials and special offers.
                         
                         
                          <br /> <br /> ➣ 
                             We do not sell, rent, or lease your personal information to third parties
                            for marketing purposes. However, in order to provide you with our services,
                            we may share your information with our trusted partners and service providers.
                  </p>
                  <div className="mt-3"></div>
                  <NavLink to="/home" className="btn btn-outline-primary">
                    <strong> Back to home </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={privacy}
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

export default Privacypolicy;
