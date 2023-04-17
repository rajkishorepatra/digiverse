import React, { useState } from "react";


const Contact = () => {
    const[data,setData] =useState({
        fullname:'',
        email:'',
        phone:'',
        msg: ''
    });

    const InputEvent = (event) =>{
        const{name, value}= event.target;
        setData((preVal)=> {
            return{
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit =(e)=>{
        e.preventDefault();
            alert(`My name is${data.fullname}. My Mobile Number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`)
        
    };
    return (
        <>
            <div className="my-5">
                <h1 className="contatheader text-center">Contact Uss </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit} >
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    <strong> Full Name </strong>
                                </label>
                                <input required="required"
                                    type="text"
                                    class="form-control"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Name"
                                    id="exampleInputEmail1"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                               <strong>Email address</strong>
                                </label>
                                <input required="required"
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Email ID"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" class="form-text">
                                    We'll never share your email with anyone else!
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                <strong>Phone No. </strong>
                                </label>
                                <input required="required"
                                    type="tel"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter Mobile No."
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">
                                    Your Message
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    placeholder="Message"
                                    rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary ">
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
