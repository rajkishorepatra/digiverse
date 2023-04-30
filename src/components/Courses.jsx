import React from "react";
import Coursecontent from "./Coursecontent";
import flash from "../images/course_flashgif.gif"
import Coursedetails from "./Coursedetails";
import num1 from "../images/Course images/1.png"
import num2 from "../images/Course images/2.png"
import num3 from "../images/Course images/3.png"
import num4 from "../images/Course images/4.png"
import num5 from "../images/Course images/5.png"
import num6 from "../images/Course images/6.png"
import num7 from "../images/Course images/7.png"
import num8 from "../images/Course images/8.png"
import num9 from "../images/Course images/9.png"
import num10 from "../images/Course images/10.png"
import num11 from "../images/Course images/11.png"
import num12 from "../images/Course images/12.png"
import num13 from "../images/Course images/13.png"
import num14 from "../images/Course images/14.png"
const Courses = (props) => {
  return (
    <>
     <div className="herocontainer">
      <Coursecontent
        name="We Offer Digital Marketing Courses at"
        imgsrc={flash}
        visit="/home"
        btname="Buy Now"
        pagedesc="DIGIVERSE360 provides digital marketing courses on a variety of topics to students of all ability levels. The courses teach significant digital marketing skills and knowledge, with the potential of certification upon completion. Beginners to expert learners who desire to broaden their knowledge and abilities are among our target students. Our courses are distinguished by their distinct and valuable approach to digital marketing education."
      />
        <h1 className="text-center text-white"><strong>Coming <span className="blink text-warning"> Soon!</span></strong></h1>
    
      <h1 className="courseheader container-fluid text-white">
      <strong>Course Modules :</strong> <hr />
          </h1>
    </div>
    <Coursedetails
      coursetopic ="Module 1: Introduction to Digital Marketing"
      imgsrc ={num1}
      content = "The first module focuses on delivering advertising through digital channels. The course offers an overview of how it equips students with the necessary skill sets to create a successful online marketing strategy. "
    />
    <Coursedetails
      coursetopic ="Module 2: Website Planning & Analysis"
      imgsrc ={num2}
      content = "The module will guide how to plan the website creation process to avoid problems such as low speed and poor navigation. The focus is on creating an intuitive and user-friendly website."
    />
    <Coursedetails
      coursetopic ="Module 3: Search Engine Optimization"
      imgsrc ={num3}
      content = "In this module, participants will be exposed to various forms of SEO, including on-page and off-page SEO. The module will also cover creating a link tree to improve website ranking. "
    />
    <Coursedetails
      coursetopic ="Module 4: Social Media Marketing"
      imgsrc ={num4}
      content = "The module will provide instruction on utilizing social media platforms’ data analytics tools to track ad campaign performance. It will also cover techniques for communicating with existing and potential customers through promotional efforts."
    />
    <Coursedetails
      coursetopic ="Module 5: Web Analytics"
      imgsrc ={num5}
      content = "The module will provide instructions on measuring website activity and behavior, such as the number of visitors, time spent on the website, popular web pages, and other relevant metrics."
    />
    <Coursedetails
      coursetopic ="Module 6 : Video Advertising"
      imgsrc ={num6}
      content = "In this module, you will receive training on how video advertising operates and how to target a specific audience niche to achieve a high click-through rate. Additionally, you will learn how to create engaging and visually appealing videos that will resonate with your audience."
    />
    <Coursedetails
      coursetopic ="Module 7 : Content marketing"
      imgsrc ={num7}
      content = "Content Marketing is the comprehensive strategy to attract or retain a target audience by creating and sharing relevant and valuable content; eventually to impel a profitable action. This module comprises exhaustive training sessions that delve into content marketing and its importance."
    />
    <Coursedetails
      coursetopic ="Module 8 : Email Marketing"
      imgsrc ={num8}
      content = "This module aims to instruct students about the advantages of email marketing and the diverse strategies that can be utilized to succeed in their email marketing campaigns."
    />
    <Coursedetails
      coursetopic ="Module 9 : Influencer Marketing"
      imgsrc ={num9}
      content = "This module will equip you with the essential skills to successfully manage and execute an influencer marketing campaign. Additionally, you will be taught the necessary steps to become a prosperous influencer marketer yourself."
    />
    <Coursedetails
      coursetopic ="Module 10 :- Digital Marketing Strategy and Planning"
      imgsrc ={num10}
      content = "Digital marketing strategy and planning involve developing a roadmap that outlines the steps you will take to achieve your marketing goals using digital channels. A comprehensive digital marketing plan should include the following elements:"
    />
    <Coursedetails
      coursetopic ="Module 11 : Canva design"
      imgsrc ={num11}
      content = "Canva design is a part of digital marketing. Canva is a popular graphic design tool that allows users to create professional-looking designs without needing advanced design skills or expensive software. Canva can be used for a wide range of digital marketing activities, such as creating social media posts, blog graphics, infographics, e-book covers, and more."
    />
    <Coursedetails
      coursetopic ="Module 12 :- Chat GPT "
      imgsrc ={num12}
      content = "The first module focuses on delivering advertising through digital channels. The course offers an overview of how it equips students with the necessary skill sets to create a successful online marketing strategy"
    />
    <Coursedetails
      coursetopic ="Module 13 : YouTube Marketing"
      imgsrc ={num13}
      content = "YouTube marketing is the practice of using the video-sharing platform YouTube as a marketing tool to promote a product, service, or brand. It involves creating and publishing high-quality videos that are optimized for YouTube's search algorithms and designed to engage and convert viewers into customers."
    />
    <Coursedetails
      coursetopic ="Bonus : Self development"
      imgsrc ={num14}
      content = "self-development is crucial in the digital marketing field. The digital marketing landscape is constantly evolving, and staying up-to-date with the latest trends and technologies is essential to remain competitive"
    />
    

    </>
  );
};
export default Courses;
