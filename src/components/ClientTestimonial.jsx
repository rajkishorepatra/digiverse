import React from 'react'
import Secondsection from './Secondsection';
import testimonial from "../images/testimonial.png";
const ClientTestimonial =()=>{
    return(
        <>
        <Secondsection
      name = "Client Testimonials"
      imgsrc = {testimonial}
      tagline=" “We're committed to delivering results for our clients - and their glowing testimonials speak to our success” - Mr. Shubham Pani - CEO, Digiverse360 "
      content="At Digiverse360, we're proud of the work we do and the results we deliver for our clients. But don't just take our word for it - here's what some of our clients have to say about working with us:"
     />
        </>
    );
};
export default ClientTestimonial;