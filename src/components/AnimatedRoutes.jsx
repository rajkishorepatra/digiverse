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
import Terms from './Terms';
import Blogs from './Blogs';
import Login from './Login';
import BlogPost from './BlogPost';
import EditBlogPost from './EditBlogPost';
import Journey from './Journey';
import Videoediting from './Videoediting';
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
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/journey" component={Journey} />
          <Route exact path="/videoediting" component={Videoediting} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/edit-blog/:id" component={EditBlogPost} />


          <Redirect to="/" />
        </Switch>
        </AnimatePresence>
  )
}

export default AnimatedRoutes;
