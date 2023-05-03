import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyParticles from "./components/MyParticles";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Loader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    const unlisten = history.listen(() => {
      setIsNavigating(true);
      setIsLoading(true);
      setTimeout(() => setIsNavigating(false), 2000);
    });
    return unlisten;
  }, [history]);

  return (
    <>
      <MyParticles />
      <div className="bgback">
        <Navbar />
        {isNavigating && <Loader />}
        <ScrollToTop>
          <AnimatedRoutes />
        </ScrollToTop>
        <Footer />
      </div>
    </>
  );
};
export default App;
