import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/Services/1.png";
import img2 from "../images/Services/2.png";
import img3 from "../images/Services/3.png";
import img4 from "../images/Services/4.png";
import content1 from "../images/Services/content1.svg";
import gif1 from "../images/homepage-gif.gif";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import TestimonialContainer from "./TestimonialContainer";
import MarketingComparison from "./MarketingComparison";

const Service = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="header-carousel p-3"
      >
        <Carousel controls={false} interval={4000} pause={true}>
          <Carousel.Item>
            <img className="carousel-image" src={img1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-image" src={img2} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-image" src={img3} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-image" src={img4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </motion.div>
      <MarketingComparison/>
      {/* <TestimonialContainer
        name="Digital Marketing vs Traditional Marketing"
        imgsrc={content1}
        tagline=" “How Growth has happened in both of these marketing methods ? "
        content={[ <h4 className="text-white"> <strong>Digital Marketing</strong> </h4>, <br/>, "Digital marketing has grown exponentially in recent years, as more and more people are",
        "spending time online. This growth has been driven by a number of factors, including:", <br />, <br />, 
        <span className="text-primary"> <strong> <li> The Rise of Social Media:</li></strong></span>, " Social media platforms like Facebook, Twitter, and Instagram have",
        "given businesses a new way to reach their target audience.", <br />, <br />,
        <span className="text-primary"> <strong> <li> The Growth of E-Commerce:</li></strong></span>, " E-commerce has made it easier for businesses to sell their products",
        "and services online, reaching a global audience.", <br />, <br />,
        <span className="text-primary"> <strong> <li>The Increasing use of Mobile Devices:</li></strong></span>, " More and more people are using their smartphones and",
        "tablets to access the internet, which has created new opportunities for businesses to reach their target audience." ]}
      />
      <br /> <br /> */}
    </>
  );
};

export default Service;
