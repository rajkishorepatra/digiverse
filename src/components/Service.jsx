import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import { motion } from "framer-motion";
const Service = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    
      <div className="my-5">
        <h1 className="serviceheader text-center" ><strong>Our Services </strong>  <hr className="container" style={{width:'30%', }}/> </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
                {
                    Sdata.map((val, ind)=>{
                        return <Card 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        />
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Service;
