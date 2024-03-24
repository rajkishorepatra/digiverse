import React from "react";
import { NavLink } from "react-router-dom";
import Microlink from "@microlink/react";
import { Text, Box } from "rebass";

const Story = ({ url = "https://microlink.io", ...props }) => (
  <Box key={JSON.stringify(props)} my={5} style={{ width: "100%" }}>
    <Box mt={4} style={{ width: "100%" }}>
      <Microlink url={url} {...props} style={{ width: "100%" }} />
    </Box>
  </Box>
);

const Founder = (props) => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center foundersec my-0"
      >
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column !mx-auto">
                  <h1 className="homesechead">
                    <strong>{props.name}</strong>
                  </h1>
                  <p className="tagline">
                    <strong>
                      <i>{props.tagline}</i>
                      <hr />
                    </strong>
                  </p>
                  <p className="content my-3">{props.content}</p> <br />
                  <NavLink
                    to={props.visit}
                    className="btn btn-outline-primary ceobtn "
                  >
                    <strong> {props.btname} </strong>
                  </NavLink>{" "}
                  <br />
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
      <div style={{ width: "100%" }} className="link-preview px-3">
        <Story
          url="https://pratidinrajdhani.in/shubham-pani-a-photographers-journey-full-of-passion-and-suppo"
          media="audio"
          style={{ width: "100%" }}
          className="mx-auto h-[100vh]"
        />
      </div>
    </>
  );
};

export default Founder;
