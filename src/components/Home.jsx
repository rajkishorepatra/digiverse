import React from "react";
import web from "../images/headerimg.svg";
import Common from "./Common";
import Secondsection from "./Secondsection";
import Experience from "./Experience";
import mission from "../images/mission.svg";
import ClientTestimonial from "./ClientTestimonial";
import homebanner from "../images/homebg.png";
import Thirdsection from "./Thirdsection";

const Home = () => {
  return (
    <>
      <div className="herocontainer">
      <Common
        name="Creating a Digital Universe - "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        pagedesc="Welcome to Digi Verse,where we help businesses achieve their online marketing goals with top-notch services that drive results. Our experienced team of marketers specializes in SEO, social media marketing, PPC advertising, email marketing, and more, using the latest tools and techniques to help clients stay ahead of the competition. Whether you're looking to increase your online presence, attract more customers, or grow your business, we can help. Contact us today to learn how we can help you succeed online."
      />
      </div>
     <Secondsection
      name = "Our Mission"
      imgsrc = {mission}
      tagline=" “Fueling growth and igniting online presence for small and mid-scale industries through
      personalized digital marketing strategies.” "
      content="At DigiVerse, our mission is to help businesses of all sizes succeed in the digital age. We believe that every business has the potential to thrive online, and we're passionate about helping our clients achieve their goals. Whether you're looking to increase your website traffic, boost your social media engagement, or generate more leads and sales, we have the expertise and resources to help you succeed. Our team of experienced professionals is dedicated to providing top-notch digital marketing services and training that are tailored to your specific needs and goals."
     />
    <ClientTestimonial/>
     <Experience 
     exphead ="Experience Certificates"
     content ="At DigiVerse, we take pride in our expertise and experience in the field of digital marketing. To showcase our skills and credentials, we've created a section where you can view our experience certificates from some of the top industry organizations and training programs."
     />
     <Thirdsection
       homebanner={homebanner}
        />
    </>
  );
};
export default Home;
