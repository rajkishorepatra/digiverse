import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const PricingTable = () => {
  return (
    <div className="container pricingcont mt-5" >
      <div className="row justify-content-center">
      <h1 className="text-dark" style={{fontSize: '40px'}}><strong>Pricing : <hr style={{width: '30%'}}/> </strong></h1>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="pricingcard">
          <div className="card mb-4 shadow-sm" >
            <div className="card-header">
              <h1 className="my-0 font-weight-normal"> <strong> Quarterly Segment</strong></h1>
            </div>
            <div className="card-body">
              <h4 className="card-title pricing-card-title text-black p-2" style={{textShadow: ' 3px 3px 5px rgba(0, 0, 0, 0.518)'}} >₹25000 <small className="text-black" >/ quarter</small></h4> <br />
              <ul className="list-unstyled mt-3 mb-4">
                <li>➢ Strategy and Planning</li> <br />
                <li>➢ Social Media Advertising</li> <br />
                <li>➢ Daily Post and AD Campaign</li> <br />
                <li>➢ Creative Design</li> <br />
                <li>➢ Reel as Per Your Requirement</li> <br /> <br />
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary ">Buy Now</button>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="pricingcard">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h1 className="my-0 font-weight-normal"><strong> Annual Segment</strong></h1>
            </div>
            <div className="card-body">
              <h4 className="card-title pricing-card-title"> <small className="text-black"style={{textShadow: ' 3px 3px 5px rgba(0, 0, 0, 0.518)'}}>negotiable</small></h4> <br />
              <ul className="list-unstyled mt-3 mb-4">
                <li>➢ Strategy Planning</li> <br />
                <li>➢ Posting and Advertising</li> <br />
                <li>➢ Profile Optimization ✔</li> <br />
                <li>➢ Creative Design</li> <br />
                <li>➢ Engaging Content ✔</li> <br />
                <li>➢ Reels as Per Your Requirement</li>
              </ul>
              <NavLink to='/contact' type="button" className="btn btn-lg btn-block btn-primary ">Contact Us</NavLink>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
