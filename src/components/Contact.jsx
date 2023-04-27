import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Alert } from 'react-bootstrap';
import Common from './Common';

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
        <>
        
            <div className="my-5">
                <h2 className="contactheader"><strong>Contact Us</strong> <hr className="container" style={{width:'20%',height:'1px' }}/> </h2>
            </div>
            
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <div className="conatctpara">
                <p className="text-white mb-5">We're always here to help. Whether you have a question about our services, 
                    want to schedule a consultation, or just want to say hello, we'd love to hear
                     from you. You can reach out to us by filling out the form on this page, or by 
                     sending an email to <span className="text-warning">digiverse18@gmail.com</span>. Our team will get back to you as soon
                      as possible to assist you with whatever you need. We're committed to providing
                      our clients with exceptional customer service, so please don't hesitate to get in touch with us!</p>
                     <h4 className="text-white text-uppercase"> <strong>📍 Address :</strong></h4> <p className="text-light mb-5"> Sadar Bazar, Raipur, Chattisgarh 492001</p>
                     <h4 className="text-white text-uppercase"> <strong>☎ Phone :</strong></h4> <p className="text-light mb-5">  +91 90 0995 77638</p>
                     <h4 className="text-white text-uppercase"> <strong>📧 Mail :</strong></h4> <p className="text-light mb-5">  digiverse18@gmail.com</p>                    
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
        </>
    );
};

export default Contact;
