import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyParticles from "./components/MyParticles";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Loader from './components/Loader';
import demo from "./images/demo.jpeg";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Modal, Button } from 'react-bootstrap';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // Don't show the modal by default
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);

    ReactGA.initialize('UA-XXXXXXXXX-X'); // Replace 'UA-XXXXXXXXX-X' with your tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Delay showing the modal by 3 seconds
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, [location]);

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <>
      {isLoading && <Loader />}
      <MyParticles />
      <div className="bgback">
        <Navbar />
        <ScrollToTop>
          <AnimatedRoutes />
        </ScrollToTop>
        <Footer />
        <ScrollToTopButton />
      </div>

      {/* Modal */}
      <Modal className='demo-modal' show={showModal} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Demo Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={demo}alt="Demo Class Image" className="demo-modal-img img-fluid" />
          <p>In the digital age, mastering the art of digital marketing is your key to success. Our course equips 
            you with the skills to create strategies, engage your audience, and thrive in the ever-evolving digital
             landscape. <b> Join our Demo Class Today!</b>
</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScMyhG3b4CLyHqUTpIOytZ608ADsNppkXuNdNllt6OSfqcQGw/viewform?usp=sf_link">Register</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default App;
