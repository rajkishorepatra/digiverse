import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Courses from "./components/Courses";
import MyParticles from "./components/MyParticles";


const App = () => {
  return (
    <>
    <MyParticles/>
      <div className="bgback">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/courses" component={Courses} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
};
export default App;
