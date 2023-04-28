import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

export default function App() {
  return (
    <div className="footer">
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' style={{color : "turquoise"}}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div style={{color : "turquoise"}}>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className='' style={{color : "turquoise"}} >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="smile" className="me-3" />
                Digiverse360
              </h6>
              <p>
              Welcome to Digi Verse,where we help businesses achieve their online marketing goals with top-notch services that drive results. Our experienced team of marketers specializes in SEO, social media marketing, PPC advertising, email marketing, and more...
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' footer-top text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='/service' className='text-reset'>
                  Digital Marketing
                </a>
              </p>
              <p>
                <a href='/service' className='text-reset'>
                  Search Engine Optimization
                </a>
              </p>
              <p>
                <a href='/service' className='text-reset'>
                  Social Media Marketing
                </a>
              </p>
              <p>
                <a href='/service' className='text-reset'>
                  Content Strategy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' footer-top text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/service' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='/courses' className='text-reset'>
                  Courses
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Sadar Bazar, Raipur, Chattisgarh 492001
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                digiverse18@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 90 0995 77638
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color : "turquoise" }}>
        &copy; 2023 Copyright: 
        
          Digiverse360 | <NavLink className=' footer-link text-reset mx-2' to='/refundpolicy'> Refund Policy
        </NavLink>
      </div>
    </MDBFooter>
    </div>
  );
}