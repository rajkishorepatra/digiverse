import React from "react";
import web from "../images/aboutus.svg";
import Common from "./Common";
import wedo from "../images/whatwedo.png";
import ceo from '../images/ceo.png';
import Secondsection from "./Secondsection";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Founder from "./Founder";


const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className="herocontainer">
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link></>
      <Common
        name="About ?"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        pagedesc={["Digiverse 360, Your Go-to Destination for All Your Digital Marketing Needs. Our Company",
        "Was Founded by Shubham Pani, a Seasoned Digital Marketer With Years of Experience in the",
        "Industry. Our Goal Is to Help Businesses of All Sizes and Industries Grow and Thrive in the Digital ",
        "World by Providing Top-Notch Digital Marketing Services" ,
         <br /> ,<br /> , "At Digiverse 360, We Offer a Wide Range of Services, Including Search Engine Optimization (SEO)",
         " Pay-Per-Click (PPC) Advertising, Social Media Marketing (SMM), Content Strategy, and YouTube ",
         "Management", <br />, <br />, "Our Team of Experts Is Dedicated to Delivering Customized Solutions Tailored to Meet the Unique ",
         "Needs of Each Client. We Use the Latest Tools and Techniques to Ensure That Your Business",
        " Reaches Its Full Potential in the Digital Landscape.", <br />, <br />, 
        "Our Office Is Located in Sadar Bazar, Raipur, Chattisgarh 492001, and We Are Always Available to ",
        "Discuss Your Digital Marketing Needs. You Can Reach Us at ", <strong className="text-primary" >digiverse18@gmail.com </strong>, "or by Phone ",
        "at +91 90 0995 77638. We Pride Ourselves on Providing Excellent Customer Service and Building ",
        "Lasting Relationships With Our Clients",<br /> ,<br />,
        "At Digiverse 360, We Believe That Every Business Deserves a Strong Digital Presence, and We Are ",
       " Committed to Helping Our Clients Achieve Their Goals. Contact Us Today to Learn More About Our ",
        "Services and How We Can Help Your Business Grow in the Digital World."
              
      ]}
      />
      </div>
      <Secondsection 
        name ="What we do"
        imgsrc = {wedo}
        tagline ="“Content is fire, social media is gasoline” ~ Jay Baer"
        content ={["At Digiverse 360, We Specialize in Digital Marketing Services That Help Businesses Succeed in the ",
                  "Digital World. Our Services Include SEO, PPC Advertising, SMM, Content Strategy, and YouTube Management ",
                  <br/>, <br />, "We Use the Latest Tools and Techniques to Deliver Customized Solutions Tailored to Meet Your ",
                  "Unique Business Needs. We Work Closely With You to Understand Your Goals, Identify Your Target ",
                  "Audience, and Create a Comprehensive Digital Marketing Strategy That Delivers Results ",
                  <br />, <br />, "Our Mission Is to Help Businesses of All Sizes and Industries Grow and Thrive in the Digital World. ",
                  <NavLink style={{textDecoration:'none'}} to="/contact"> <strong> Contact Us </strong> </NavLink> ,"Today to Learn More About How We Can Help Your Business Achieve Success "
                ]}
      />
      <>
      <Founder 
        name = "Our Founder"
        imgsrc= {ceo}
        tagline={["Shubham Pani","ㅤ-ㅤㅤ", 
        <a style={{textDecoration:'none'}} href="https://www.facebook.com/shubham.pani.79?mibextid=ZbWKwL" target="_blank" className=" socialicons fa fa-facebook"></a>, "ㅤ",
        <a style={{textDecoration:'none'}} href="https://twitter.com/Shubhampani2" target="_blank" className="fa fa-twitter socialicons"></a>, "ㅤ",
        <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/shubham-pani-2b67b4112/" target="_blank" className="fa fa-linkedin socialicons"></a>, "ㅤ", 
        <a style={{textDecoration:'none'}} href="https://instagram.com/mrshubhampani" target="_blank" className="fa fa-instagram socialicons" ></a>]}
        content= "❝ As the CEO of Digiverse 360, a Digital Marketing Firm, I have witnessed firsthand the transformative potential of digital marketing in India. Despite facing
        numerous challenges, I am determined to showcase the immense opportunities and career
        prospects that this field holds. This note aims to shed light on the future of digital marketing in
        India and emphasize its relevance in today's ever-evolving landscape."
        btname ="Read More"
        visit="/journey"
      />
</>
    </motion.div>
  );
};
export default About;
