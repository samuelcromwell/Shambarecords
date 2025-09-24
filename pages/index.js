import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import About from '../components/about/about';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import FunFact from '../components/FunFact/FunFact';
import Testimonial from '../components/Testimonial/Testimonial';
import PartnersSection from '../components/PartnersSection/PartnersSection';
import CtaSection from '../components/CtaSection/CtaSection';
import MapSection from '../components/MapSection/MapSection.js';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '/public/Logo/shamba.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <HeroSlider />
            <About hclass={'wpo-about-section'} />
            <ServiceSection hclass={"wpo-service-section section-padding"} SectionTitleShow={true} ServiceBtn={false}  style={{border: "2px solid red"}}/>
            <FunFact hclass={'wpo-funfact-section section-padding'} />
            <Testimonial hclass={'wpo-testimonial-section section-padding'} />
            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            <CtaSection hclass={'wpo-cta-section'} />
            <MapSection/>
            <Footer hclass={'wpo-site-footer'}  />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;