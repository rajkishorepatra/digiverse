import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Alert } from 'react-bootstrap';
import { motion } from "framer-motion";

const Contact = () => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
      
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xiom4mc', 'template_t7pcg1h', form.current, 'NKaITqcfVHy29WfOh')
            .then((result) => {
                console.log(result.text);
                setShowAlert(true);  // show alert
                form.current.reset(); // reset form
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <div >
            <div className="my-5" >
                <h2 className="contactheader"><strong>Contact Us</strong> <hr className="container" style={{width:'20%',height:'1px' }}/> </h2>
            </div>
            
            <div className="container contact_div" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <div className="conatctpara">
                <p className="mb-5" style={{color:'#ffffffa3 '}} >We Value Our Customers and Always Strive to Provide the Best Possible Service. If You Have Any
                Questions or Inquiries, Please Don’t Hesitate to Contact Us Using the Following Information:
                                                                                                            </p>
                     <h4 className="text-light text-uppercase"> <strong>📍 Address :</strong></h4> <p className="text-light mb-5">Digiverse360, <br /> Sadar Bazar, Raipur, Chattisgarh 492001</p>
                     <h4 className="text-light text-uppercase"> <strong>☎ Phone :</strong></h4> <p className="text-light mb-5">  +91 90 0995 77638</p>
                     <h4 className="text-light text-uppercase"> <strong>📧 Mail :</strong></h4> <p className="text-light mb-4">  digiverse18@gmail.com</p>   

                     <p style={{  color: '#ffffffa3' }} >Our Team Is Available to Answer Your Queries and Provide Assistance During Our Business Hours,
                        Which Are Monday to Friday From 9:00 Am to 6:00 PM Ist. You Can Expect a Prompt Response From
                        Us, and We’ll Do Our Best to Address Your Concerns and Provide You With the Support You Need.</p>

<p style={{color:'#ffffffa3'}} >Alternatively, You Can Also Reach Us by Filling Out the Contact Form below. We Appreciate
Your Interest in Our Services and Look Forward to Hearing From You Soon</p> <br />
            </div>

                        {showAlert && 
                            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                                Your message was sent!
                            </Alert>
                        }
                        <form ref={form} onSubmit={sendEmail}>
                            {/* <h4 className="text-center mb-4"><strong>Lets Connect!</strong></h4> */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1">
                                    <strong> Full Name </strong>
                                </label>
                                <input required="required"
                                    type="text"
                                    className="form-control"
                                    name="user_name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" >
                               <strong>Email address</strong>
                                </label>
                                <input required="required"
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="user_email"
                                    placeholder="Enter Your Email ID"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1">
                                  <strong>  Your Message</strong>
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="message"
                                    placeholder="Have any Projects in Mind ?"
                                    rows="3"></textarea>
                            </div>
                            <button type="submit" value="Send" className=" submitbtn btn btn-outline-primary ">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
        
    );
};

export default Contact;
