import React from "react";
// import web from "../images/headerimg.svg";
import web from "../images/homepage-gif.gif";
import Common from "./Common";
import Secondsection from "./Secondsection";
import Experience from "./Experience";
// import msn from "../images/msn2.svg";
import msn from "../images/null.gif";
// import msn from "../images/mission.png";
import ClientTestimonial from "./ClientTestimonial";
import {motion} from 'framer-motion';

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
      imgsrc = {msn}
      tagline=" “Fueling growth and igniting online presence for small and mid-scale industries through
      personalized digital marketing strategies.” "
      content="Our Mission at Digiverse 360 Is Simple: To Help Businesses Conquer the Digital World. We’re
      Passionate About Delivering Customized Solutions That Help Our Clients Achieve Success Online.
      Our Team of Experts Is Dedicated to Staying Ahead of the Curve and Delivering Exceptional Services
      That Exceed Our Clients’ Expectations. Contact Us Today and Let’s Start Your Digital Marketing
      Journey Together!"
     />
    <ClientTestimonial/>
     <Experience 
     exphead ="Experience Certificates"
     content ="At Digiverse360, we take pride in our expertise and experience in the field of digital marketing. To showcase our skills and credentials, we've created a section where you can view our experience certificates from some of the top industry organizations and training programs."
     />
     {/* <Thirdsection
       homebanner={homebanner}
        /> */}
    </motion.div>
  );
};
export default Home;
