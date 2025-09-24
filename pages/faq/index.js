import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from '../../components/FaqSection/FaqSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/Logo/shamba.svg';
import MyForm from '../../components/GetTouchSection/MyForm';

const FaqPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={'Faq'} />
            <FaqSection hclass={'wpo-faq-section section-padding'} />
            <MapSection />
            {/* <CtaSection hclass={'wpo-cta-section-s2'} /> */}
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    );
};

export default FaqPage;
