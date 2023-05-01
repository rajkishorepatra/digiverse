import React from "react";
import Secondsection from "./Secondsection";
import testimonial from "../images/testimonial.png";
import Vid1 from "../videos/vid1.mp4";

const ClientTestimonial = () => {
  // const videoProperties = [
  //     {
  //     id: 1,
  //     title: "Sonal Singh",
  //     src: Vid1,
  //     credit: "Founder/CEO - Youthpreneur, India"
  // },
  // {
  //     id: 2,
  //     title: "Person 2",
  //     src: Vid1,
  //     credit: "Some Designation"
  // },
  // {
  //     id: 3,
  //     title: "Person 3",
  //     src: Vid1,
  //     credit: "Some Designation"
  // }
  // ]
  return (
    <>
      <Secondsection
        name="Client Testimonials"
        imgsrc={testimonial}
        tagline=" “We're committed to delivering results for our clients - and their glowing testimonials speak to our success” - Mr. Shubham Pani - CEO, Digiverse360 "
        content="At Digiverse360, we're proud of the work we do and the results we deliver for our clients. But don't just take our word for it - here's what some of our clients have to say about working with us:"
      />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
            <div className="card testicard" >
              <video src={Vid1} controls={true}></video>
              <div className="card-body">
                <h5 className="card-title"><strong>Sonal Singh</strong></h5>
                <p className="card-text">
                  CEO/Founder - Youthpreneurs, India
                </p>
                </div>
              </div>

              <div className="card testicard">
              <video src={Vid1} controls={true}></video>
              <div className="card-body">
                <h5 className="card-title"><strong>Sonal Singh</strong></h5>
                <p className="card-text">
                  CEO/Founder - Youthpreneurs, India
                </p>
                </div>
              </div>

              <div className="card testicard mb-5">
              <video src={Vid1} controls={true}></video>
              <div className="card-body">
                <h5 className="card-title"><strong>Sonal Singh</strong></h5>
                <p className="card-text">
                  CEO/Founder - Youthpreneurs, India
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Carousel>
        {videoProperties.map((videoObj)=>{
            return(
                <Carousel.Item key={videoObj.id}>
                    <ReactPlayer
                        url={videoObj.src}
                        pip={true}
                        controls={true}
                        playing={false}
                    />
                    <Carousel.Caption>
                        <h3>{videoObj.title}</h3>
                        <p>{videoObj.credit}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })}
    </Carousel> */}
    </>
  );
};
export default ClientTestimonial;
