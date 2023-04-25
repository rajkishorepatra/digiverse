import React from "react";
const Coursedetails = (props) => {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-5">
            <h5 className="coursetopic"> ⭐ <strong>{props.coursetopic}</strong></h5>
            <img className="courseimg" src={props.imgsrc} alt="intro" />
            <p className="coursecontent" style={{ margin: 0 }}>
              {props.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetails;
