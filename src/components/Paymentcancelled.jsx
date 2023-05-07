import React from 'react'
import {NavLink} from 'react-router-dom';
import cancel from '../images/paymentcancelled.svg';
const Paymentcancelled = () => {
  return (
    <section id="header" className="d-flex aligm-items-center successcontainer ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-success ">
                  <h1 className="mainheader">
                    Payment Cancelled ! 😕
                  </h1>
                  <p className="subheader my-3">
                  We're sorry to see you go! Your payment has been cancelled, and your transaction has not been processed. If you need assistance or have any questions about your purchase or our Course, please don't hesitate to <NavLink className='text-primary' to='/contact' > contact us.</NavLink>
                We understand that circumstances may change, and we respect your decision. If you change your mind and would like to proceed with your purchase, <p className='text-warning'> please feel free to return to our payment page and try again.</p>
                 Thank you for considering our Course. We hope to see you with us in future.
                  </p>
                  <div className="mt-3"></div>
                  <NavLink to='/courses' className="btn btn-outline-primary">
                   <strong> Try Again </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={cancel}
                    className="image-fluid animated cancelimage " style={{scale: '0.8'}}
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

export default Paymentcancelled;
