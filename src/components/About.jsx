import React from "react";
import web from "../images/aboutus.svg";
import Common from "./Common";
import wedo from "../images/whatwedo.png";
import Secondsection from "./Secondsection";
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className="herocontainer">
      <Common
        name="About ?"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        pagedesc="In 2020, Digiverse360 was born with a mission to cultivate a digital universe, igniting growth for
        industries through our personalized approach to digital marketing. From captivating content
        marketing to engaging Instagram reels and YouTube shorts, we offer a comprehensive suite of
        services that elevate your online presence and fuel your business. Let us help you pave the way
        to digital success, one pixel at a time."
      />
      </div>
      <Secondsection 
        name ="What we do"
        imgsrc = {wedo}
        tagline ="“Content is fire, social media is gasoline” ~ Jay Baer"
        content ="We specialise in content marketing, video editing, and YouTube optimisation and many more services to assist small and mid-sized businesses in boosting their online presence and igniting growth. Our customised strategies address our clients' pain points and assist them in succeeding in the digital world."   
      />
    </motion.div>
  );
};
export default About;
