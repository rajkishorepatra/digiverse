import React from 'react'
import {NavLink} from 'react-router-dom';
import blog from '../images/blog.svg'

const Blogs = () => {
  return (
    <>
         <section id="header" className="d-flex aligm-items-center my-5 ">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1 className="mainheader" >
                    Blogs-
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <p className="subheader my-3">
                   You Will See blogs here when posted by Admin
                  </p>
                  <div className="mt-3"></div>
                  <NavLink to="/"className="btn btn-outline-primary mb-5">
                   <strong> Back to Home </strong>
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img style={{scale:'0.8'}}
                    src={blog}
                    className="image-fluid animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs;
