import React from "react";


const Contact = () => {
    // const[data,setData] =useState({
    //     fullname:'',
    //     email:'',
    //     phone:'',
    //     msg: ''
    // });

    // const InputEvent = (event) =>{
    //     const{name, value}= event.target;
    //     setData((preVal)=> {
    //         return{
    //             ...preVal,
    //             [name]: value,
    //         }
    //     })
    // }
    // const formSubmit =(e)=>{
    //     e.preventDefault();
    //         alert(`My name is${data.fullname}. My Mobile Number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`)
        
    // };
    return (
        <>
            <div className="my-5">
                <h2 className="contactheader"><strong>Contact Us</strong> <hr className="container" style={{width:'20%',height:'1px' }}/> </h2>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    <strong> Full Name </strong>
                                </label>
                                <input required="required"
                                    type="text"
                                    className="form-control"
                                    name="fullname"
                                    
                                    
                                    placeholder="Enter Your Name"
                                    id="exampleInputEmail1"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                               <strong>Email address</strong>
                                </label>
                                <input required="required"
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    
                                    
                                    placeholder="Enter Your Email ID"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Phone No. </strong>
                                </label>
                                <input required="required"
                                    type="tel"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="phone"
                                    
                                    
                                    placeholder="Enter Mobile No."
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Your Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="msg"
                                    
                                    
                                    placeholder="Message"
                                    rows="3"></textarea>
                            </div>
                            <button type="submit" className=" submitbtn btn btn-outline-primary ">
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
