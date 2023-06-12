import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import web from "../images/thank-you.png";
import qr from "../images/digiqr.png";

const ServicePayment = () => {
  const [showModal, setShowModal] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);

  const handlePayNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVerifying(false);
    setPaymentVerified(false);
    setConfirmPayment(false);
  };

  const handleVerify = () => {
    setVerifying(true);

    // Simulating verification delay of 7 seconds
    setTimeout(() => {
      setVerifying(false);
      setPaymentVerified(true);
    }, 7000);
  };

  const handleCheckboxChange = (event) => {
    setConfirmPayment(event.target.checked);
  };

  return (
    <>
      <br /> <br /> <br /> <br />
      <section id="header" className="d-flex aligm-items-center header ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="mainheader">
                    Thank You for choosing
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <p className="subheader my-3" style={{ color: 'rgb(123, 120, 120)' }}>
                    Thank you for choosing Digiverse360! Please proceed to our secure payment 
                    page to finalize the discussed deal. We are grateful for the opportunity 
                    to exceed your expectations and deliver exceptional results. For any questions 
                    or assistance, feel free to contact us.
                  </p>
                  <button className="btn btn-outline-primary mb-5" onClick={handlePayNow}>
                    <strong> Pay Now </strong>
                  </button>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img src={web} className="image-fluid animated" alt="homeimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal className='service-payment-modal' show={showModal} size="lg" onHide={handleCloseModal}>
        <Modal.Header style={{ backgroundColor: '#02041d', color: '#fff' }} closeButton>
          <Modal.Title>Pay for Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {verifying ? (
            <div className="d-flex align-items-center">
              <div className="mr-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <p className="m-0" style={{ padding: '10px' }}>Verifying payment...</p>
            </div>
          ) : paymentVerified ? (
            <div className="text-center">
              <div className="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                  <path
                    fill="#28a745"
                    d="M21.707 5.293c-.39-.39-1.024-.39-1.414 0L9 16.586l-4.293-4.293c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414l5 5c.39.39 1.024.39 1.414 0l12-12c.39-.39.39-1.024 0-1.414z"
                  />
                </svg>
              </div>
              <p className="m-0"><strong>Payment verified!</strong></p>
              <p>Thank you for your payment!</p>
              <p>We appreciate your business.</p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-3">
                <img src={qr} alt="thank-you" style={{ width: '80%', maxWidth: '350px' }} />
              </div>
              <strong><p className="text-center">Kindly Scan the QR Code using any UPI Application</p></strong>
              <p className="text-center">Tap on "Verify" button after you have paid</p>

              <div className="form-check text-center mt-4">
                <input
                  type="checkbox"
                  className="form-check-input text-primary"
                  id="confirmPayment"
                  checked={confirmPayment}
                  onChange={handleCheckboxChange}
                  style={{ borderColor: 'black', marginRight: '8px' }}
                />
                <label className="form-check-label text-black" htmlFor="confirmPayment">
                  I confirm that I have paid the desired amount
                </label>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!paymentVerified && (
            <Button variant="success" onClick={handleVerify} disabled={verifying || !confirmPayment}>
              {verifying ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className="sr-only">Verifying...</span>
                </>
              ) : (
                'Verify'
              )}
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            {paymentVerified ? 'Close' : 'Cancel'}
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        @media (max-width: 991px) {
          /* Mobile mode styles */
          .header {
            padding-top: 60px;
          }

          .header .container-fluid {
            padding-top: 0;
          }

          .header .col-md-6 {
            order: 1;
          }

          .header .col-lg-6 {
            order: 2;
            margin-top: 20px;
            text-align: center;
          }

          .service-payment-modal .modal-body {
            padding: 0;
          }

          .form-check.text-center {
            text-align: center;
          }

          .form-check.text-center .form-check-input {
            margin-left: 0;
            margin-right: 0;
            margin-top: 5px;
          }

          .form-check.text-center .form-check-label {
            margin-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
    </>
  );
};

export default ServicePayment;
