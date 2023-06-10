import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/Services/1.png";
import img2 from "../images/Services/2.png";
import img3 from "../images/Services/3.png";
import sl1 from "../images/Services/content-marketing.gif";
import sl2 from "../images/Services/social-media-marketing.gif";
import sl3 from "../images/Services/search-engine-optimization.gif";
import sl4 from "../images/Services/web-design-and-development.gif";
import msn from "../images/Services/video-editing.png"
import MarketingComparison from "./MarketingComparison";
import Secondsection from "./Secondsection";
import { Card, CardActionArea, CardContent, Typography, Grid } from "@material-ui/core";
import WhyChooseUs from "./WhyChooseUs";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Service = () => {
  return (
    <div className="service">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="header-carousel"
      >
        <Carousel controls={false} interval={4000} pause={true} aspectRatio={16 / 9}>
          <Carousel.Item>
            <img className="carousel-image" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </motion.div>
      <MarketingComparison />
      <div className="text-center text-white my-5">
        <h1>
          <strong>Our Services</strong>
        </h1>
        <hr />
        <p className="text-secondary p-3">DigiVerse360 provides a comprehensive suite of services to help businesses grow your online presence. Our services include:</p>
      </div>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card className="service-card">
            <CardActionArea>
              <div className="service-icon">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sl1} alt="Content Marketing" width="55" height="55" />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Content Marketing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  DigiVerse360 creates high-quality content that engages and informs your target audience. This content can be used to attract new customers, build relationships with existing customers, and boost your website's search engine ranking.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="service-card">
            <CardActionArea>
              <div className="service-icon">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sl2} alt="Social Media Marketing" width="55" height="55" />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Social Media Marketing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  DigiVerse360 helps you manage your social media accounts, create engaging content, and measure your results. They can also help you develop social media advertising campaigns that reach your target audience and drive traffic to your website.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="service-card">
            <CardActionArea>
              <div className="service-icon">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sl3} alt="Search Engine Optimization" width="55" height="55" />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Search Engine Optimization (SEO)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  DigiVerse360 helps you improve your website's ranking in search engine results pages (SERPs). This can help you attract more visitors to your website, which can lead to increased sales and revenue.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="service-card">
            <CardActionArea>
              <div className="service-icon">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img src={sl4} alt="Web Design and Development" width="55" height="55" />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Web Design and Development
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  DigiVerse360 can help you design and develop a website that meets your business needs. They can also help you with website maintenance and updates.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Secondsection
      name = "Additional Services"
      imgsrc = {msn}
      tagline={[ <h3><strong>Video Editing Service </strong></h3> ]}
      content="Video editing is a powerful tool that can be used to create engaging and persuasive video
      marketing content for digital marketing firms. By using video editing techniques, digital
      marketing firms can create videos that are more likely to capture and hold viewers' attention,
      and that effectively communicate the firm's message."
     />
     <WhyChooseUs/> <br />
      <div className="service-btn d-flex aligm-items-center justify-content-center">
     <NavLink to="/contact" className="btn btn-outline-primary"><strong>Contact Us</strong></NavLink>
     </div> <br /> <br />
    </div>
  );
};

export default Service;
