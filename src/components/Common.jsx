import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex aligm-items-center ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="mainheader" >
                    {props.name}
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <p className="subheader my-3" style={{color: 'rgb(123, 120, 120)'}}>
                    {props.pagedesc}
                  </p>
                  <div className="mt-3"></div>
                  <NavLink to={props.visit} className="btn btn-outline-primary mb-5">
                   <strong> {props.btname} </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={props.imgsrc}
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
  );
};
export default Common;
