import React from "react";
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
      pagedesc="Digiverse360 provides digital marketing services, including SEO, social media,
       analytics, content, email, influencer, and video advertising. We work with businesses of 
       all sizes to achieve their goals. Lets get started.."
         visit="/contact"
         btname="Contact Us"
         imgsrc={serviceimg}
     />

     <div className="plansegment" >
     <h1 className=" text-light"><strong>Plans <hr style={{width: '100%'}} /> </strong></h1>
     <h4 className=" plandesc text-light"> <strong> Quarterly Plan:</strong></h4> <br />
     <img src={quarter} alt="quarterly plan" /> <br /> <br />

     <h4 className=" plandesc text-light"> <strong> Annual Plan:</strong></h4> <br />
     <img src={annual} alt="annual plan" /> <br /> <br /> <br /> <br />
     </div>
     
     </div>
      <PricingTable/>
    </motion.div>
  );
};
export default Service;
