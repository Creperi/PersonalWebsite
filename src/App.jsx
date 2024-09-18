import React from "react";
import 'bootstrap';
import '@popperjs/core';
import Header from "./Header";
import AboutMe  from "./AboutMe";
import Technologies from './Technologies';
import Projects from "./Projects";
import ContactUs from "./ContactUs"
import Footer from "./Footer";
import Services from './Services';
const App = () => {
  return (
    <div>
        <Header/>
        <AboutMe classname="AboutMe" title="Welcome"/>
        <Technologies/>
        <Projects/>
        <Services/>
        <ContactUs/>
        <Footer/>
    </div>);
};

export default App;