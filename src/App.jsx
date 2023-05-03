import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyParticles from "./components/MyParticles";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Loader from './components/Loader';
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); 
  }, []);

  return (
    <>
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
