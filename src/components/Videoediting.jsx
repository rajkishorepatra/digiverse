import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import img1 from '../images/about-banner.png';
import img2 from '../images/homebg.png';
import img3 from '../images/home-banner.png';
import { NavLink } from 'react-router-dom';

const VideoEditing = () => {
  return (
    <div className='videoservice'>
      <Carousel controls={false} interval={4000} pause={true}>
        <Carousel.Item>
          <img
          style={{scale:'0.95'}}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item> */}
      </Carousel>

      <div className=" text-white videoeditingcontent d-flex justify-content-center align-items-left flex-column p-4 ">

        <h1 className='my-5'> <strong>Video Editing Service </strong> </h1>
        <hr className='text-primary' style={{height:'5px'}} />


        <p className='content' >We offer professional video editing solutions to enhance your visual 
            content and bring your creative vision to life. Our experienced team combines
             technical expertise with artistic flair to deliver captivating videos that engage
              and resonate with your audience. Whether you need editing for promotional videos,
               social media content, corporate presentations, or any other project, we tailor our
                services to meet your specific requirements. From trimming and sequencing to color
                 correction and special effects, we ensure seamless transitions, polished visuals,
                  and a compelling storytelling experience. Trust us to handle your video editing needs
                   and let us elevate your content to new heights. <br /> <br /> <span className='text-primary'>For Pricing Contact Us</span>
        </p> <br />
        <NavLink className="btn btn-outline-primary" to='/contact'> Contact Us </NavLink>
      </div>
    </div>
  );
}

export default VideoEditing;
