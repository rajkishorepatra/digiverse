import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className="footer">
      <MDBFooter
        bgColor="black"
        className="text-center text-lg-start text-muted"
        style={{ color: "rgb(219, 219, 219)" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div
            className="me-5 d-none d-lg-block"
            style={{ color: "rgba(143, 141, 141, 1)" }}
          >
            <span>Get connected with us on social networks:</span>
          </div>

          <div style={{ color: "rgba(143, 141, 141, 1)" }}>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/digi-verse-18/"
              target="_blank"  rel="noreferrer"
              className="me-4 text-reset"
            >
              <MDBIcon fab icon="linkedin" />
            </a>
          </div>
        </section>

        <section className="" style={{ color: "rgba(143, 141, 141, 1)" }}>
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="smile" className="me-3" />
                  Digiverse360
                </h6>
                <p>
                  Welcome to Digi Verse,where we help businesses achieve their
                  online marketing goals with top-notch services that drive
                  results. Our experienced team of marketers specializes in SEO,
                  social media marketing, PPC advertising, email marketing, and
                  more...
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className=" footer-top text-uppercase fw-bold mb-4">
                  Services
                </h6>
                <p>
                  <NavLink to="/service" className="text-reset">
                    Digital Marketing
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/service" className="text-reset">
                    Search Engine Optimization
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/service" className="text-reset">
                    Social Media Marketing
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/service" className="text-reset">
                    Content Strategy
                  </NavLink>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className=" footer-top text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <NavLink to="/" className="text-reset">
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/service" className="text-reset">
                    Services
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/about" className="text-reset">
                    About
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/courses" className="text-reset">
                    Courses
                  </NavLink>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
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
              {isAuthenticated && (
                <p className="container user text-primary ">
                  Welcome! {user.name}
                </p>
              )}
              {isAuthenticated ? (
                <button
                  type="button"
                  className="btn-primary loginbtn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button
                  type="button"
                  className="btn-primary loginbtn"
                  onClick={() => loginWithRedirect()}
                >
                  Admin Log In
                </button>
              )}
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            color: "rgba(143, 141, 141, 1)",
          }}
        >
          &copy; 2023 Copyright: Digiverse360 <br />{" "}
          <NavLink className=" footer-link text-reset mx-2" to="/refundpolicy">
            {" "}
            Refund Policy
          </NavLink>{" "}
          |{" "}
          <NavLink className=" footer-link text-reset mx-2" to="/terms">
            {" "}
            Terms & Conditions
          </NavLink>
          |{" "}
          <NavLink className=" footer-link text-reset mx-2" to="/privacypolicy">
            {" "}
            Privacy Policy
          </NavLink>
        </div>
      </MDBFooter>
    </div>
  );
}
