import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import PartnersSection from '../../components/PartnersSection/PartnersSection.js';
import Contactpage from '../../components/Contactpage/Contactpage';
import CtaSection from '../../components/CtaSection/CtaSection.js';
import MapSection from '../../components/MapSection/MapSection.js';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import Logo from '/public/Logo/shamba.svg';


const ContactPage = () => {
    return (
        <Fragment>
          <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Rech out to us today'} pagesub={'Contact Us'} />
            <Contactpage />
            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            <CtaSection hclass={'wpo-cta-section'} />
            <MapSection />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;