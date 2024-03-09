import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { motion } from "framer-motion";

const Coursedetails = (props) => {
  const content = props.content.split("*");
  return (
    <>
      <Grid item xs={12} sm={6} md={3} className="m-3">
        <Card className="service-card">
          <CardActionArea>
            <div className="service-icon">
              <motion.div whileHover={{ scale: 1.2 }}>
                {/* <img className="icon-gif"
                    src={sl3}
                    alt="Search Engine Optimization"
                    width="55"
                    height="55"
                  /> */}
              </motion.div>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ⭐ {props.coursetopic}
              </Typography>
              <br />
              {content.map((item) => (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textAlign: "left", marginLeft: "1rem" }}
                >
                  {item}
                </Typography>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={3} className="m-3">
        <Card sx={{ maxWidth: 345 }} className="course-card ">
          <CardActionArea>
            <CardMedia component="img" height="auto" image={props.imgsrc} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ⭐ {props.coursetopic}
              </Typography>
              {content.map((item) => (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textAlign: "left" }}
                >
                  {item}
                </Typography>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid> */}
    </>
  );
};

export default Coursedetails;
