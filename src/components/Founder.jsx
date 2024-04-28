import React from "react";
import { NavLink } from "react-router-dom";
import { Text, Box } from "rebass";

// const Story = ({ url = "https://microlink.io", ...props }) => (
//   <Box key={JSON.stringify(props)} my={5} style={{ width: "100%" }}>
//     <Box mt={4} style={{ width: "100%" }}>
//       <Microlink url={url} {...props} style={{ width: "100%" }} />
//     </Box>
//   </Box>
// );

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

      <Box
        my={5}
        mx={"auto"}
        style={{ width: "100%", textAlign: "center", margin: "auto" }}
      >
        <iframe
          width="70%"
          height="400"
          src="https://www.youtube.com/embed/8gKexunEGMI?si=7jD39UChnPwkGb-O"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ maxWidth: "100%" }}
        ></iframe>
      </Box>
      {/* </div> */}
    </>
  );
};

export default Founder;
