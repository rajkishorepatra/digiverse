import React from "react";
import Coursecontent from "./Coursecontent";
import flash from "../images/test1-1.gif";
// import flash from "../images/course_flashgif.gif"
import Coursedetails from "./Coursedetails";
import num1 from "../images/course-assets/1.png";
import num2 from "../images/course-assets/2.png";
import num3 from "../images/course-assets/3.png";
import num4 from "../images/course-assets/4.png";
import num5 from "../images/course-assets/5.png";
import num6 from "../images/course-assets/6.png";
import num7 from "../images/course-assets/7.png";
import num8 from "../images/course-assets/8.png";
// import num9 from "../images/course-assets/9.png";
import num10 from "../images/course-assets/10.png";
import num11 from "../images/course-assets/11.png";
// import num12 from "../images/chatgpt.png"
// import num13 from "../images/youtubemar.png"
// import num14 from "../images/selfdevel.png";
import { motion } from "framer-motion";
import StudentTestimonial from "./StudentTestimonial";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Courses = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="herocontainer">
        <Coursecontent
          name="Digiverse 360: Digital Marketing Masterclass"
          imgsrc={flash}
          visit="/payments"
          btname="Buy Now"
          pagedesc="This comprehensive course will equip you with the latest digital marketing trends and 
          strategies to take your brand to the next level. Through 10 engaging modules, you will gain valuable 
          insights and practical skills across various digital channels, empowering you to effectively reach 
          your target audience and drive results."
        />
      </div>
      <h1 className="courseheader container-fluid text-center">
        <strong>Course Modules :</strong> <hr />
      </h1>
      <br />
      <br />
      <div className="d-flex flex-wrap align-self-stretch justify-content-center mb-5">
        <Coursedetails
          coursetopic="Introduction to Digital Marketing"
          imgsrc={num1}
          content="*✦ Defining the digital marketing landscape
          *✦ Understanding the marketing funnel
          *✦ Setting measurable goals and objectives
          *✦ Key digital marketing channels and technologies"
        />
        <Coursedetails
          coursetopic="Understanding Your Target Audience"
          imgsrc={num2}
          content="*✦ Identifying your ideal customer personas
          *✦ Conducting market research and analysis
          *✦ Building buyer personas and customer journeys *✦ Targeting your messaging and content effectively"
        />
        <Coursedetails
          coursetopic="Build a Strong Brand Identity"
          imgsrc={num3}
          content="*✦ Defining your brand voice and personality
          *✦ Creating a consistent brand image across channels *✦ Storytelling and brand communication strategies
          *✦ Establishing brand loyalty and advocacy
          "
        />
        <Coursedetails
          coursetopic="Content Marketing Strategies"
          imgsrc={num4}
          content="*✦ Developing valuable and engaging content
          *✦ Creating different content formats (blogs, videos, infographics, etc.) *✦ Content distribution and promotion strategies
          *✦ Measuring content performance and optimizing results"
        />
        <Coursedetails
          coursetopic="Search Engine Optimization (SEO)"
          imgsrc={num5}
          content="*✦ Understanding the basics of SEO
          *✦ On-page and off-page optimization techniques
          *✦ Keyword research and targeting
          *✦ Building backlinks and improving website authority *✦ Local SEO strategies for businesses"
        />
        <Coursedetails
          coursetopic="Pay-Per-Click (PPC) Advertising"
          imgsrc={num6}
          content="*✦ Introduction to PPC advertising platforms like Google Ads and Facebook Ads
          *✦ Campaign structure and bidding strategies
          *✦ Creating compelling ad copy and landing pages 
          *✦ Tracking and analyzing PPC campaigns"
        />
        <Coursedetails
          coursetopic="Social Media Marketing"
          imgsrc={num7}
          content="*✦ Leveraging different social media platforms for marketing *✦ Creating engaging social media content
          *✦ Building and managing online communities
          *✦ Data analysis and predictive modeling
          *✦ Content creation and optimization
          *✦ Automated marketing campaign"
        />
        <Coursedetails
          coursetopic="Email Marketing"
          imgsrc={num8}
          content="*✦ Building an email list and segmenting subscribers *✦ Designing effective email campaigns
          *✦ Automation and personalization strategies
          *✦ Measuring email marketing performance"
        />
        <Coursedetails
          coursetopic="AI (Artificial intelligence)"
          imgsrc={num10}
          content="*✦ Introduction to AI
          *✦ Prompt engineering
          *✦ The future of ai in digital marketing Content creation
          *✦ Social media management
          "
        />
        <Coursedetails
          coursetopic="Canva design"
          imgsrc={num11}
          content="*✦ Create Eye-Catching Visuals
          *✦ Maintain Brand Consistency
          *✦ Increase Engagement and Click-Through Rate Affordable & Scalable Solution
          *✦ Save Time and Resources"
        />
      </div>

      <div className="mx-auto my-5" style={{ width: "80%" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <b>By the end of this course, you will be able to:</b>
          </AccordionSummary>
          <AccordionDetails>
            * Develop and implement a comprehensive digital marketing strategy.
            <br />* Create engaging and effective content across various
            channels. <br />* Optimize your website and online presence for
            search engines. <br />* Leverage social media effectively for brand
            awareness and engagement. <br />* Utilize email marketing strategies
            to nurture leads and convert customers. <br />* Analyze and measure
            your digital marketing performance. <br />* Stay ahead of the curve
            with emerging trends and technologies.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <b>Who Should Take This Course?</b>
          </AccordionSummary>
          <AccordionDetails>
            * Business owners and entrepreneurs <br />* Marketing professionals
            and aspiring marketers * Sales and customer service representatives{" "}
            <br />* Anyone who wants to boost their digital marketing skills and
            knowledge
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b>Ready to Take Your Digital Marketing to the Next Level? </b>
          </AccordionSummary>
          <AccordionDetails>
            Enroll in the Digiverse 360: Digital Marketing Masterclass today and
            unlock the power of the latest trends and strategies to achieve your
            marketing goals!
          </AccordionDetails>
        </Accordion>
      </div>

      <StudentTestimonial />
    </motion.div>
  );
};
export default Courses;
