import React from "react";
import Coursecontent from "./Coursecontent";
import flash from "../images/course_flashgif.gif"
import Coursedetails from "./Coursedetails";
import num1 from "../images/digital.png"
import num2 from "../images/plan.png"
import num3 from "../images/search.png"
import num4 from "../images/social.png"
import num5 from "../images/webanal.png"
import num6 from "../images/Course/nothing.png"
import num7 from "../images/contentmar.png"
import num8 from "../images/email.png"
import num9 from "../images/influencermar.png"
import num10 from "../images/dmsmr.png"
import num11 from "../images/canvaDe.png"
import num12 from "../images/chatgpt.png"
import num13 from "../images/youtubemar.png"
import num14 from "../images/selfdevel.png";
import { motion } from "framer-motion";
const Courses = (props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
     <div className="herocontainer">
      <Coursecontent
        name="We Offer Digital Marketing Courses at"
        imgsrc={flash}
        visit="/payments"
        btname="Buy Now"
        pagedesc="At Digiverse360, we offer digital marketing courses for all levels, from beginners to experts. Our courses provide valuable skills and knowledge with certification upon completion. Join us to broaden your abilities and receive a distinct approach to digital marketing education."
      />
        <h1 className="soon"><strong className="text-primary" >Coming <span className="blink text-warning"> Soon!</span></strong></h1>

      <h1 className="courseheader container-fluid text-center">
      <strong>Course Modules :</strong> <hr />
          </h1>
    </div>
    <Coursedetails
      coursetopic ="Introduction to Digital Marketing"
      imgsrc ={num1}
      content = "The first module focuses on delivering advertising through digital channels. The course offers an overview of how it equips students with the necessary skill sets to create a successful online marketing strategy. "
    />
    <Coursedetails
      coursetopic ="Website Planning & Analysis"
      imgsrc ={num2}
      content = "The module will guide how to plan the website creation process to avoid problems such as low speed and poor navigation. The focus is on creating an intuitive and user-friendly website."
    />
    <Coursedetails
      coursetopic ="Search Engine Optimization"
      imgsrc ={num3}
      content = "In this module, participants will be exposed to various forms of SEO, including on-page and off-page SEO. The module will also cover creating a link tree to improve website ranking. "
    />
    <Coursedetails
      coursetopic ="Social Media Marketing"
      imgsrc ={num4}
      content = "The module will provide instruction on utilizing social media platforms’ data analytics tools to track ad campaign performance. It will also cover techniques for communicating with existing and potential customers through promotional efforts."
    />
    <Coursedetails
      coursetopic ="Web Analytics"
      imgsrc ={num5}
      content = "The module will provide instructions on measuring website activity and behavior, such as the number of visitors, time spent on the website, popular web pages, and other relevant metrics."
    />
    <Coursedetails
      coursetopic ="Video Advertising"
      imgsrc ={num6}
      content = "In this module, you will receive training on how video advertising operates and how to target a specific audience niche to achieve a high click-through rate. Additionally, you will learn how to create engaging and visually appealing videos that will resonate with your audience."
    />
    <Coursedetails
      coursetopic ="Content marketing"
      imgsrc ={num7}
      content = "Content Marketing is the comprehensive strategy to attract or retain a target audience by creating and sharing relevant and valuable content; eventually to impel a profitable action. This module comprises exhaustive training sessions that delve into content marketing and its importance."
    />
    <Coursedetails
      coursetopic ="Email Marketing"
      imgsrc ={num8}
      content = "This module aims to instruct students about the advantages of email marketing and the diverse strategies that can be utilized to succeed in their email marketing campaigns."
    />
    <Coursedetails
      coursetopic ="Influencer Marketing"
      imgsrc ={num9}
      content = "This module will equip you with the essential skills to successfully manage and execute an influencer marketing campaign. Additionally, you will be taught the necessary steps to become a prosperous influencer marketer yourself."
    />
    <Coursedetails
      coursetopic ="Digital Marketing Strategy and Planning"
      imgsrc ={num10}
      content = "Digital marketing strategy and planning involve developing a roadmap that outlines the steps you will take to achieve your marketing goals using digital channels. A comprehensive digital marketing plan should include the following elements:"
    />
    <Coursedetails
      coursetopic ="Canva design"
      imgsrc ={num11}
      content = "Canva design is a part of digital marketing. Canva is a popular graphic design tool that allows users to create professional-looking designs without needing advanced design skills or expensive software. Canva can be used for a wide range of digital marketing activities, such as creating social media posts, blog graphics, infographics, e-book covers, and more."
    />
    <Coursedetails
      coursetopic ="Chat GPT "
      imgsrc ={num12}
      content = "The first module focuses on delivering advertising through digital channels. The course offers an overview of how it equips students with the necessary skill sets to create a successful online marketing strategy"
    />
    <Coursedetails
      coursetopic ="YouTube Marketing"
      imgsrc ={num13}
      content = "YouTube marketing is the practice of using the video-sharing platform YouTube as a marketing tool to promote a product, service, or brand. It involves creating and publishing high-quality videos that are optimized for YouTube's search algorithms and designed to engage and convert viewers into customers."
    />
    <Coursedetails
      coursetopic ="Bonus : Self development"
      imgsrc ={num14}
      content = "self-development is crucial in the digital marketing field. The digital marketing landscape is constantly evolving, and staying up-to-date with the latest trends and technologies is essential to remain competitive"
    />
    

    </motion.div>
  );
};
export default Courses;
