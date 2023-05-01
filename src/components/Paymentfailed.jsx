import React from 'react'
import {NavLink} from 'react-router-dom';
import failed from '../images/paymentfailed.png'
const Paymentfailed = () => {
  return (
    <section id="header" className="d-flex aligm-items-center successcontainer ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-success ">
                  <h1 className="mainheader">
                    Payment Failed ! ❌
                  </h1>
                  <p className="subheader my-3">
                  We're sorry, but your payment has failed. It appears that there was an issue with your payment method, and we were unable to process your transaction.
                Please ensure that your payment information is correct and up-to-date, and <p className='text-primary'> Try Again.</p> If you continue to experience issues with your payment, please contact your payment provider or financial institution for assistance.
                If you have any questions or concerns about your purchase or our services, please don't hesitate to contact us. We're here to help and are committed to resolving any issues you may have.
                Thank you for considering our Course . We hope to see you soon during classes.
                  </p>
                  <div className="mt-3"></div>
                  <NavLink to='/courses' className="btn btn-outline-primary">
                   <strong> Try Again </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={failed}
                    className="image-fluid animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Paymentfailed;
