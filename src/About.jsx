import React from "react";
import web from "../src/images/aboutus.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Who Are We ?"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        pagedesc="DigiVerse specializes in providing top-notch services that help businesses increase their online presence and attract more customers. With years of experience in SEO, social media marketing, PPC advertising, email marketing, and more, our team of experts uses the latest tools and techniques to help clients achieve their goals. We value transparency, honesty, and integrity, and work closely with clients to build long-term relationships based on mutual success. Contact us today to learn how we can help your business succeed online."
      />
    </>
  );
};
export default About;
