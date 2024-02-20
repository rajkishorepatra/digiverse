import React from "react";

const Secondsection = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row flex-row-reverse sm:flex-row-reverse">
                <div className="col-lg-6 pt-n5 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="homesechead">
                    <strong>{props.name}</strong>
                  </h1>
                  <p className="tagline">
                    <strong>
                      <i>{props.tagline}</i>
                      <hr />
                    </strong>
                  </p>
                  <p className="content my-3">{props.content}</p>
                  <div className="mt-3"></div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image my-auto">
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
