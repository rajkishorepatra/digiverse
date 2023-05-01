import React from 'react'
import {NavLink} from 'react-router-dom';
import success from '../images/paymentsuccess.svg';

const Paymentsuccess = (props) => {
  return (
    <section id="header" className="d-flex aligm-items-center successcontainer ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-success ">
                  <h1 className="mainheader">
                    Payment Successful! ✅
                  </h1>
                  <p className="subheader my-3">
                  Thank you for your payment! Your transaction has been completed, and a receipt for your purchase has been emailed to you.
                  We appreciate your consideration and are thrilled to have you as a Student for this course. Our team will contact you as soon as possible regarding details of the course and will keep you updated on its progress.
                  If you have any questions or concerns about your purchase or our services, please don't hesitate to <NavLink to='/contact' > Contact us.</NavLink> We're always here to help.
                    Thank you again for choosing <div className='text-warning'>DigiVerse Digital Marketing Course.</div>  We look forward to seeing you here soon!
                  </p>
                  <div className="mt-3"></div>
                  <NavLink to='/' className="btn btn-outline-primary">
                   <strong> Back to Home </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={success}
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

export default Paymentsuccess
