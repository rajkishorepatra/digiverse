import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyParticles from "./components/MyParticles";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";


const App = () => {

  return (
    <>
    <MyParticles/>
      <div className="bgback">
        <Navbar />
        <ScrollToTop>
        <AnimatedRoutes/>
        </ScrollToTop>
        <Footer />
      </div>
    </>
  );
};
export default App;
