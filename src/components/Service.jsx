import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/Services/1.png";
import img2 from "../images/Services/2.png";
import img3 from "../images/Services/3.png";
import img4 from "../images/Services/4.png";
import sl1 from "../images/Services/content-marketing.gif";
import sl2 from "../images/Services/social-media-marketing.gif";
import sl3 from "../images/Services/search-engine-optimization.gif";
import sl4 from "../images/Services/web-design-and-development.gif";
import MarketingComparison from "./MarketingComparison";
import { Card, CardActionArea, CardContent, Typography, Grid } from "@material-ui/core";

const Service = () => {
  return (
    <div className="service">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="header-carousel"
      >
        <Carousel controls={false} interval={4000} pause={true}>
          <Carousel.Item>
            <img className="carousel-image" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src={img4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </motion.div>
      <MarketingComparison />
      <div className="text-center text-white my-5">
        <h1>
          <strong>Our Services</strong>
        </h1>
        <hr />
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
        {/* Repeat the same structure for the remaining service cards */}
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
      <br />
      <br />
    </div>
  );
};

export default Service;
