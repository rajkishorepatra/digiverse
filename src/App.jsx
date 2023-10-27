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
      
    </>
  );
};

export default App;
