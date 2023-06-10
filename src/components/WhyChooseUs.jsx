import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FaCheck, FaChartLine, FaDollarSign, FaClock, FaCogs, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const points = [
    {
      heading: "We are a full-service Digital Marketing agency:",
      icon: FaChartLine,
      content:
        "We offer a wide range of services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, and email marketing. This gives us the ability to create a comprehensive marketing plan that meets the specific needs of your business.",
    },
    {
      heading: "We have a proven track record of success:",
      icon: FaCheck,
      content:
        "We have helped hundreds of businesses grow their businesses through digital marketing. We have a deep understanding of the latest trends and best practices in digital marketing, and we know how to use them to get results.",
    },
    {
      heading: "We are affordable:",
      icon: FaDollarSign,
      content:
        "We offer our services at a fraction of the cost of other agencies. This is because we believe that everyone should have access to high-quality digital marketing services, regardless of their budget.",
    },
    {
      heading: "We are responsive and reliable:",
      icon: FaClock,
      content:
        "We understand that time is money, and we are committed to meeting your deadlines and exceeding your expectations. We are always available to answer your questions and provide you with updates on your campaign.",
    },
    {
      heading: "We are experts in the latest digital marketing technologies:",
      icon: FaCogs,
      content:
        "We stay up-to-date on the latest trends in digital marketing, and we use the most effective tools and techniques to get results.",
    },
    {
      heading: "We have a team of experienced digital marketing professionals:",
      icon: FaUsers,
      content:
        "Our team has years of experience in digital marketing, and we are passionate about helping businesses succeed.",
    },
  ];

  return (
    <section>
      <Box sx={{ backgroundColor: "transparent", color: "#bbbbbb", py: { xs: 2, md: 4 }, px: { xs: 2, md: 5 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
          <Typography variant="h4" gutterBottom>
            <strong className="text-white">Why Choose Us?</strong>
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            We understand that every business is different, and we tailor our services to meet the specific needs of each client. We would be happy to discuss your specific needs and create a custom marketing plan that will help you reach your goals.
          </Typography> <br />
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {points.map((point, index) => (
            <Grid key={index} item xs={12} md={6} sx={{ p: { xs: 2, md: 3 }, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box sx={{ color: "#33b5e5", fontSize: { xs: 40, md: 45 }, mr: 3, flexShrink: 0 }}>
                  {<point.icon />}
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    <strong className="text-white">{point.heading}</strong>
                  </Typography>
                  <Typography variant="body1">{point.content}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default WhyChooseUs;
