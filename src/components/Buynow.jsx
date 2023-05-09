import React from "react";
import { motion } from "framer-motion";
import payu from '../images/payupayment.svg';
import qr from '../images/payusingQR.png';
const Buynow = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1 className=" paymentheader text-center mb-0" style={{marginTop:'10rem'}}  >
          <strong> Payment Options </strong>{" "}
          <hr className="container" style={{ width: "30%" }} />{" "}
        </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <div class="card paymentcard1 " >
                <img src={payu}class="card-img-top" alt="payU paymentlogo" />
                <div class="card-body">
                  <h5 class="card-title mb-4 "> <strong>  Pay via PayU payment GateWay (under maintenance) </strong> ✅</h5>
                  <p class="card-text">
                    Easiest Way to pay <br />
                    Pay using UPI, Net Banking, Debit/Credit Cards, Secured
                  </p>
                  <a href="#" class="btn btn-success disabled"  >
                    Pay Now
                  </a>
                </div>
              </div>
              <div class="card paymentcard2" >
                <img src={qr} class="card-img-top" alt="Pay Using QR " />
                <div class="card-body">
                  <h5 class="card-title mb-4 "> <strong>Pay by Scanning QR code (UPI)</strong>  ✅</h5>
                  <p class="card-text">
                    Simply fill up a form, scan the QR code provided, submit payment proof <br /> We will contact you soon
                  </p>
                  <a href="https://forms.gle/3FbS5c6vm5FnAjiA7" target="_blank" class="btn btn-success">
                   Pay Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Buynow;
