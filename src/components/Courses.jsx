import React from "react";
import Coursecontent from "./Coursecontent";
import flash from '../images/test1-1.gif';
// import flash from "../images/course_flashgif.gif"
import Coursedetails from "./Coursedetails";
import num1 from "../images/course-assets/1.png"
import num2 from "../images/course-assets/2.png"
import num3 from "../images/course-assets/3.png"
import num4 from "../images/course-assets/4.png"
import num5 from "../images/course-assets/5.png"
import num6 from "../images/course-assets/6.png"
import num7 from "../images/course-assets/7.png"
import num8 from "../images/course-assets/8.png"
import num9 from "../images/course-assets/9.png"
import num10 from "../images/course-assets/10.png"
import num11 from "../images/course-assets/11.png"
// import num12 from "../images/chatgpt.png"
// import num13 from "../images/youtubemar.png"
// import num14 from "../images/selfdevel.png";
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
        pagedesc="This comprehensive course will equip you with the latest digital marketing trends and strategies
        to take your brand to the next level. Through 10 engaging modules, you will gain valuable
        insights and practical skills across various digital channels, empowering you to effectively reach
        your target audience and drive results"
      />

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
      coursetopic ="Understanding Your Target Audience"
      imgsrc ={num2}
      content = "Learn to identify and connect with your target demographic, enhancing your marketing strategies and tailoring your content for maximum engagement and impact. Master the art of understanding your audience for business success."
    />
    <Coursedetails
      coursetopic ="Build a Strong Brand Identity"
      imgsrc ={num3}
      content = "Discover the foundations of brand building. Learn to craft a distinctive brand persona, incorporating visuals and messaging that resonate. Elevate your business with a unique identity that attracts, engages, and leaves a lasting impression on your audience. Master the art of brand strength."
    />
    <Coursedetails
      coursetopic ="Content Marketing Strategies"
      imgsrc ={num4}
      content = "Learn to create strategic, SEO-friendly content that resonates with your audience. Acquire techniques to enhance visibility, engagement, and conversion rates, ensuring your brand stands out in the digital landscape"
    />
    <Coursedetails
      coursetopic ="Search Engine Optimization (SEO)"
      imgsrc ={num5}
      content = "Learn the latest algorithms and techniques to optimize content, driving organic traffic and ensuring your business ranks high in search results. Elevate your online presence with SEO mastery"
    />
    <Coursedetails
      coursetopic ="Pay-Per-Click (PPC) Advertising"
      imgsrc ={num6}
      content = "Learn to create effective PPC campaigns, optimize ad spend, and maximize ROI. Gain insights into keyword strategies and compelling ad copy, ensuring your business captures attention and drives conversions through strategic PPC advertising. Elevate your marketing with precision."
    />
    <Coursedetails
      coursetopic ="Social Media Marketing"
      imgsrc ={num7}
      content = " Learn to create impactful campaigns, engage your audience, and build a loyal following. Discover strategies for leveraging various platforms, creating shareable content, and measuring success. Elevate your brand's presence and influence with effective social media marketing techniques."
    />
    <Coursedetails
      coursetopic ="Email Marketing"
      imgsrc ={num8}
      content = "Craft compelling email campaigns that resonate with your audience. Discover the art of effective segmentation, personalization, and automation to maximize engagement and conversion rates. Elevate your marketing strategy with powerful and targeted email communication."
    />
    <Coursedetails
      coursetopic ="Analytics and Reporting"
      imgsrc ={num9}
      content = "Learn to leverage analytics tools to measure campaign performance, track key metrics, and make informed decisions. Master the art of reporting to refine strategies and optimize results. Elevate your business with the transformative power of analytics"
    />
    <Coursedetails
      coursetopic ="Artificial Intelligence"
      imgsrc ={num10}
      content = " Learn to harness AI's power for automation and optimization, enhancing efficiency and staying ahead in the digital landscape. Elevate your marketing with the intelligence of the future."
    />
    <Coursedetails
      coursetopic ="Canva design"
      imgsrc ={num11}
      content = "Learn to craft visually stunning graphics with Canva. Master design principles, customize templates, and create eye-catching visuals for your brand"
    />
    {/* <Coursedetails
      coursetopic ="Chat GPT "
      imgsrc ={num12}
      content = "This Teach-Out introduces learners to artificial intelligence and explains how large language models and chatbots like ChatGPT work. You will better understand the ethical use of artificial intelligence, the implications of authorship, and how tools like ChatGPT might be utilized and regulated moving forward. "
    />
    <Coursedetails
      coursetopic ="YouTube Marketing"
      imgsrc ={num13}
      content = "YouTube marketing is the practice of using the video-sharing platform YouTube as a marketing tool to promote a product, service, or brand. It involves creating and publishing high-quality videos that are optimized for YouTube's search algorithms and designed to engage and convert viewers into customers."
    />
    <Coursedetails
      coursetopic ="Bonus : Self development"
      imgsrc ={num14}
      content = "Self-Development is crucial in the digital marketing field. The digital marketing landscape is constantly evolving, and staying up-to-date with the latest trends and technologies is essential to remain competitive"
    /> */}
    

    </motion.div>
  );
};
export default Courses;
