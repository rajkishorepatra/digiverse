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
import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [location]);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (!isAuthLoading) {
      if (isAuthenticated && isLoggedIn !== 'true') {
        toast.success('Logged in Successfully');
        sessionStorage.setItem('isLoggedIn', 'true');
      } else if (!isAuthenticated && isLoggedIn === 'true') {
        toast.success('Logged out Successfully');
        sessionStorage.removeItem('isLoggedIn');
      }
    }
  }, [isAuthLoading, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated && isAuthLoading) {
      setIsAuthLoading(false);
    }
  }, [isAuthenticated, isAuthLoading]);

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
        <ToastContainer position="top-right" />
      </div>
    </>
  );
};

export default App;
