import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import PartnersSection from '../../components/PartnersSection/PartnersSection.js';
import CtaSection from '../../components/CtaSection/CtaSection.js';
import MapSection from '../../components/MapSection/MapSection.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import Logo from '/public/Logo/shamba.svg'
import PageTitle from '../../components/pagetitle/PageTitle.js';
import Articles from '../../components/Articles/index.js';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Shamba Records'} pagesub={'Blogs'} />
            
            <Articles/>
            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            <CtaSection hclass={'wpo-cta-section'} />
            <MapSection/>
            <Footer hclass={'wpo-site-footer'}  />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;