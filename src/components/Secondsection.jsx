import React from "react";


const Secondsection = (props) => {
  return (
    <>
    <section id="header" className="d-flex aligm-items-center " style={{backgroundImage: 'linear-gradient(to top, rgba(59,130,246,.5) 77.9%,  #fff )'}}>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="homesechead">
                    <strong>{props.name}</strong>
                  </h1>
                  <p className="tagline"><strong><i>{props.tagline}</i><hr/></strong></p>
                  <p className="content my-3">
                    {props.content}
                  </p>
                  <div className="mt-3"></div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={props.imgsrc}
                    className="image-fluid animated"
                    alt="webimage"
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

export default Secondsection;