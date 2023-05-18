import React from 'react';
import { NavLink } from 'react-router-dom';

const Founder = (props) => {
  return (
    <>
     <section id="header" className="d-flex aligm-items-center foundersec ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="homesechead">
                    <strong>{props.name}</strong>
                  </h1>
                  <p className="tagline"><strong><i>{props.tagline}</i><hr/></strong></p>
                  <p className="content my-3"  >
                    {props.content}
                  </p> <br />
                  <NavLink to={props.visit} className="btn btn-outline-primary ceobtn ">
                   <strong> {props.btname} </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={props.imgsrc}
                    className="image-fluid animated ceoimg "
                    alt="Shubham Pani - CEO Digiverse360"
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

export default Founder
