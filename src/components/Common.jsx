import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Aos from "aos";
import "aos/dist/aos.css";

const Common = (props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section id="header" className="d-flex aligm-items-center header">
        <div className="container-fluid mt-0 mt-lg-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row sm:flex-row-reverse">
                <div className="mx-auto col-lg-6 pt-lg-0 order-1 mt-5 mt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="mainheader">
                    {props.name}
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <p
                    className="subheader my-3"
                    style={{ color: "rgb(123, 120, 120)" }}
                  >
                    {props.pagedesc}
                  </p>
                  {/* <NavLink to={props.visit} className="btn btn-outline-primary mb-5">
                   <strong> {props.btname} </strong>
                  </NavLink> */}
                </div>
                <div className="col-lg-6 order-2 mt-n5 mt-lg-0 mb-5 order-lg-2 header-image">
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
