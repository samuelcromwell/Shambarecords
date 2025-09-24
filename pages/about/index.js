import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import FunFact from '../../components/FunFact/FunFact';
import FeaturesSectionS2 from '../../components/FeaturesSectionS2/FeaturesSectionS2';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/Logo/shamba.svg'

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Shamba Records'} pagesub={'About us'} />
            <About hclass={'wpo-about-section section-padding'} />
            <FunFactS2 hclass={'wpo-funfact-section-s3'} />
            <ServiceSectionS3 hclass={'wpo-service-section-s3 section-padding'}/>
            <FunFact hclass={'wpo-funfact-section section-padding'} />
            <FeaturesSectionS2 hclass={'wpo-features-section-s2'} />
            <Testimonial hclass={'wpo-testimonial-section section-padding'} />
            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            {/* <TeamSection hclass={'wpo-team-section-s2 section-padding'} /> */}
            <CtaSection hclass={'wpo-cta-section'} />
            <MapSection />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar /> 
        </Fragment>
    )
};
export default AboutPage;
