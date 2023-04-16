import React from "react";
import web from "../src/images/headerimg.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        pagedesc="Welcome to Digi Verse,where we help businesses achieve their online marketing goals with top-notch services that drive results. Our experienced team of marketers specializes in SEO, social media marketing, PPC advertising, email marketing, and more, using the latest tools and techniques to help clients stay ahead of the competition. Whether you're looking to increase your online presence, attract more customers, or grow your business, we can help. Contact us today to learn how we can help you succeed online."
      />
    </>
  );
};
export default Home;
