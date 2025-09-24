import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Error from '../../components/404/404'
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/Logo/shamba.svg'
// 

const ErrorPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Shamba Records'} pagesub={'404'} />
            <Error/>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar /> 
        </Fragment>
    )
};
export default ErrorPage;

