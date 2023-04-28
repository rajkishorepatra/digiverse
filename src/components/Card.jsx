import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Card = (props) => {
  return (
    <>
                <div className="col-md-4 col-12 mx-auto" >
                  <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="Service_Image" />
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">{props.title}</h5>
                      <p className="card-text">{props.text}</p>
                      {/* <NavLink to="/" className="btn btn-primary">
                        See More
                      </NavLink> */}
                    </div>
                  </div>
                </div>
            
    </>
  );
};
export default Card;
