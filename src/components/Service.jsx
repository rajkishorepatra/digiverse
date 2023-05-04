import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import { motion } from "framer-motion";
import PricingTable from "./PricingTable";
import Common from "./Common";
import serviceimg from '../images/serviceheaderimg.png'
import quarter from '../images/quarterly.jpg';
import annual from '../images/annual.jpg';


const Service = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className="service">
     <Common
      name="Services at -"
      pagedesc="At Digiverse360, we offer a comprehensive range of digital marketing services
       to help businesses of all sizes achieve their goals. Our services include search engine optimization
        (SEO), social media marketing, web analytics, content marketing, email marketing, influencer marketing,
         video advertising, and digital marketing strategy and planning. Whether you're looking to increase your 
         website traffic, generate leads, or boost your online visibility, our team of experts can help. We work 
         closely with our clients to understand their unique needs and goals, and tailor our services to deliver 
         the best possible results. Contact us today to learn more about how we can help your business grow and succeed online."
         visit="/contact"
         btname="Contact Us"
         imgsrc={serviceimg}
     />
     <div className="plansegment">
     <h1 className=" text-white"><strong>Plans <hr style={{width: '30%'}} /> </strong></h1>
     <h4 className=" text-white"> <strong> Quarterly Plan:</strong></h4> <br />
     <img src={quarter} alt="quarterly plan" /> <br /> <br />

     <h4 className=" text-white"> <strong> Annual Plan:</strong></h4> <br />
     <img src={annual} alt="annual plan" /> <br /> <br /> <br /> <br />
     <h1 className="text-white"><strong>Pricing : <hr style={{width: '30%'}}/> </strong></h1>
     </div>
     </div>
      <PricingTable/>
    </motion.div>
  );
};
export default Service;
