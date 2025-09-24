import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Logo from '/public/Logo/shamba.svg';
import Testimonial from '../../components/Testimonial/Testimonial.js';
import PartnersSection from '../../components/PartnersSection/PartnersSection.js';
import CtaSection from '../../components/CtaSection/CtaSection.js';
import MapSection from '../../components/MapSection/MapSection.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import ImpactSection from '../../components/Impact/index.js';
export default function Impact() {
  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Shamba Records'} pagesub={'Impact & Benefits'} />
      <ImpactSection/>

      <PartnersSection CollClass={'wpo-partner-section section-padding'} />
      <CtaSection hclass={'wpo-cta-section'} />

      <MapSection />
      <Footer hclass={'wpo-site-footer'} />
      <Scrollbar />
    </Fragment>
  )
}
