import React from "react";
import { motion } from "framer-motion";
import sl1 from "../images/Services/content-marketing.gif";
import sl2 from "../images/Services/social-media-marketing.gif";
import sl3 from "../images/Services/search-engine-optimization.gif";
import sl4 from "../images/Services/web-design-and-development.gif";
import sl5 from "../images/Services/ads.gif";
import sl6 from "../images/Services/video-editing.gif";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import WhyChooseUs from "./WhyChooseUs";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Service = () => {
  return (
    <div className="service">
      <div className="text-center text-white my-5">
        <h1 style={{ fontSize: '55px' }}>
          <strong>Our Services</strong>
        </h1>

        <p className="text-secondary p-3">
          DigiVerse360 provides a comprehensive suite of services to help
          businesses grow your online presence. Our services include:
        </p>
      </div>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card className="service-card">
            <CardActionArea>
              <div className="service-icon">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <img className="icon-gif"
                    src={sl1}
                    alt="Content Marketing"
                    width="55"
                    height="55"
                  />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Content Marketing
                </Typography>
                <Typography className="text-secondary" variant="body2" component="p">
                  DigiVerse360 creates high-quality content that engages and
                  informs your target audience. This content can be used to
                  attract new customers, build relationships with existing
                  customers, and boost your website's search engine ranking.
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
                  <img className="icon-gif"
                    src={sl2}
                    alt="Social Media Marketing"
                    width="55"
                    height="55"
                  />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Social Media Marketing
                </Typography>
                <Typography className="text-secondary" variant="body2" component="p">
                  DigiVerse360 helps you manage your social media accounts,
                  create engaging content, and measure your results. They can
                  also help you develop social media advertising campaigns that
                  reach your target audience and drive traffic to your website.
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
                  <img className="icon-gif"
                    src={sl3}
                    alt="Search Engine Optimization"
                    width="55"
                    height="55"
                  />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Search Engine Optimization (SEO)
                </Typography>
                <Typography className="text-secondary" variant="body2" component="p">
                  DigiVerse360 helps you improve your website's ranking in
                  search engine results pages (SERPs). This can help you attract
                  more visitors to your website, which can lead to increased
                  sales and revenue.
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
                  <img className="icon-gif"
                    src={sl4}
                    alt="Web Design and Development"
                    width="55"
                    height="55"
                  />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Web Design and Development
                </Typography>
                <Typography className="text-secondary" variant="body2" component="p">
                  DigiVerse360 can help you design and develop a website that
                  meets your business needs. They can also help you with website
                  maintenance and updates.
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
                  <img className="icon-gif"
                    src={sl5}
                    alt="Paid Advertising"
                    width="55"
                    height="55"
                  />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Paid Advertising
                </Typography>
                <Typography className="text-secondary" variant="body2" component="p">
                  Boost your business visibility with our expert
                  Paid Advertising services. From strategic PPC
                  campaigns to compelling display ads, we drive targeted traffic
                  and maximize your online presence.
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
                  <img className="icon-gif"
                    src={sl6}
                    alt="Video Editing"
                    width="55"
                    height="55"
                  />
                </motion.div>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Video Editing
                </Typography>
                <Typography className="text-secondary" variant="body2" component="p">
                  Elevate your content with our professional Video Editing services.
                  Transform raw footage into captivating stories,
                  enhance visuals, and leave a lasting impression on your audience.
                  Let your story shine
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </Grid>
      </Grid>
      <br /> <br /> <br />
      <WhyChooseUs /> <br />
      <div className="service-btn d-flex flex-row align-items-center justify-content-center">
        <NavLink to="/contact" style={{ padding: '15px', scale: '0.9' }} className="btn btn-outline-primary my-5 get-started-btn">
          <strong>Get Started ✈</strong>
        </NavLink>
        <NavLink to="/servicepayment" style={{ padding: '4px', scale: '0.9' }} className="btn btn-outline-primary">
          <strong> Proceed to Payments </strong>
        </NavLink>
      </div>{" "}
      <br /> <br />
    </div>
  );
};

export default Service;
