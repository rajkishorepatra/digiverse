import React from 'react'
import Home from "../components/Home";
import About from "../components/About";
import RefundPolicy from "../components/Refundpolicy";
import Service from "../components/Service";
import Contact from "../components/Contact";
import { Switch, Route, useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Courses from "../components/Courses";
import { AnimatePresence } from 'framer-motion';
import Paymentsuccess from './Paymentsuccess';
import Paymentfailed from './Paymentfailed';
import Paymentcancelled from './Paymentcancelled';
import Buynow from './Buynow';
import Privacypolicy from './Privacypolicy';
const AnimatedRoutes = () => {
    const location = useLocation();



    return (
        <AnimatePresence>
    <Switch location ={location} key={location.pathname} >
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/refundpolicy" component={RefundPolicy} />
          <Route exact path="/paymentsuccess" component={Paymentsuccess} />
          <Route exact path="/paymentfailed" component={Paymentfailed} />
          <Route exact path="/paymentcancelled" component={Paymentcancelled} />
          <Route exact path="/payments" component={Buynow} />
          <Route exact path="/privacypolicy" component={Privacypolicy} />

          <Redirect to="/" />
        </Switch>
        </AnimatePresence>
  )
}

export default AnimatedRoutes;
