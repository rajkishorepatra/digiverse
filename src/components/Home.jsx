import React from "react";
import web from "../images/headerimg.svg";
import Common from "./Common";
import Secondsection from "./Secondsection";
import Experience from "./Experience";
import mission from "../images/mission.svg";
import ClientTestimonial from "./ClientTestimonial";
import homebanner from "../images/homebg.png";
import Thirdsection from "./Thirdsection";
import {easeOut, motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="herocontainer">
      <Common
        name="Creating a Digital Universe - "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        pagedesc="Welcome to Digiverse360, where we specialize in providing top-notch digital marketing services to help businesses succeed online. Our experienced team of professionals offers a comprehensive range of services, including SEO, social media marketing, email marketing, and more. Let us help you achieve your digital marketing goals today."
      />
      </div>
     <Secondsection
      name = "Our Mission"
      imgsrc = {mission}
      tagline=" “Fueling growth and igniting online presence for small and mid-scale industries through
      personalized digital marketing strategies.” "
      content="At Digiverse360, we're on a mission to help businesses of all sizes thrive in 
      the digital world. Our team of experts provides tailored digital marketing services and
       training to help you achieve your goals, whether it's increasing website traffic, boosting social media
        engagement, or generating more leads and sales.
       Let us help you 
         unlock your full potential online."
     />
    <ClientTestimonial/>
     <Experience 
     exphead ="Experience Certificates"
     content ="At Digiverse360, we take pride in our expertise and experience in the field of digital marketing. To showcase our skills and credentials, we've created a section where you can view our experience certificates from some of the top industry organizations and training programs."
     />
     <Thirdsection
       homebanner={homebanner}
        />
    </motion.div>
  );
};
export default Home;
