import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider1 from '/public/images/hero/cashboost.jpg'
import Slider2 from '/public/images/hero/vet-care.jpg'
import Slider3 from '/public/images/hero/smart-season.png'
import Slider4 from '/public/images/hero/shamba-shield.jpg'
import Slider5 from '/public/images/hero/shamba-connect.jpg'

import Image from 'next/image';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const HeroSlider = () => {
  const settings = {
    autoplay: true,
    speed: 600,
    lazyLoad: 'progressive',
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="hero-section">
      <Slider {...settings} className="hero-slider">
        {/* SLIDER 1 (priority) */}
        <div>
          <div className="slider-item">
            <div className="bg-image">
              <Image
                className="animated"
                src={Slider3}
                alt=""
                priority
                sizes="100vw"
                placeholder="blur"
                data-animation-in="zoomInImage"
              />
            </div>
            <div className="container">
              <div className="content">
                <h1 className="bg-text">Shamba SmartSeason</h1>
                <h2 className="animated" data-animation-in="fadeInUp">
                  {' '}
                  Grow with Intelligence. Harvest with Power.
                </h2>
                <h3 className="animated" data-animation-in="fadeInUp">Shamba SmartSeason</h3>
                <p className="animated" data-animation-in="fadeInUp">
                  AI meets agronomy. Shamba SmartSeason gives farmers hyper-personalized insights — when to
                  plant, irrigate, fertilize, and harvest — based on real-time weather, soil, and satellite
                  data.
                </p>
                <div className="hero-btn animated" data-animation-in="fadeInUp">
                  <div className="btn-1">
                    <a
                      href="https://smartseason.shambarecords.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn"
                      onClick={ClickHandler}
                    >
                      Shamba Smart Season
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="down-shape">
              <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                <path d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z" fill="white" fillOpacity="0.2" />
                <path d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z" fill="white" />
                <path d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z" fill="white" fillOpacity="0.2" />
                <path d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z" fill="white" fillOpacity="0.2" />
                <path d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z" fill="white" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>

        {/* SLIDER 2 (priority for seamless first transition) */}
        <div>
          <div className="slider-item">
            <div className="bg-image">
              <Image
                className="animated"
                src={Slider1}
                alt=""
                priority
                sizes="100vw"
                placeholder="blur"
                data-animation-in="zoomInImage"
              />
            </div>
            <div className="container">
              <div className="content">
                <h1 className="bg-text">Cash Boost</h1>
                <h2 className="animated" data-animation-in="fadeInUp">AI-Powered Microfinance for the Modern Farmer</h2>
                <h3 className="animated" data-animation-in="fadeInUp">Shamba Cash Boost</h3>
                <p className="animated" data-animation-in="fadeInUp">
                  Say goodbye to paperwork and hello to data-driven credit. Shamba Cash Boost uses your actual farm
                  performance — not your bank history — to unlock fast, fair, and transparent microloans. Powered by
                  intelligent credit scoring and real-time analytics, we empower farmers to invest, grow, and bounce
                  back stronger.
                </p>
                <div className="hero-btn animated" data-animation-in="fadeInUp">
                  <div className="btn-1">
                    <a
                      href="https://cashboost.shambarecords.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn"
                      onClick={ClickHandler}
                    >
                      Shamba Cash Boost
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="down-shape">
              <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                <path d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z" fill="white" fillOpacity="0.2" />
                <path d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z" fill="white" />
                <path d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z" fill="white" fillOpacity="0.2" />
                <path d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z" fill="white" fillOpacity="0.2" />
                <path d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z" fill="white" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>

        {/* SLIDER 3 (lazy) */}
        <div>
          <div className="slider-item">
            <div className="bg-image">
              <Image
                className="animated"
                src={Slider2}
                alt=""
                sizes="100vw"
                placeholder="blur"
                data-animation-in="zoomInImage"
              />
            </div>
            <div className="container">
              <div className="content">
                <h1 className="bg-text">Shamba VetCare+</h1>
                <h2 className="animated" data-animation-in="fadeInUp">AI-Driven Animal Health for Thriving Farms</h2>
                <h3 className="animated" data-animation-in="fadeInUp">Shamba VetCare+</h3>
                <p className="animated" data-animation-in="fadeInUp">
                  Stay ahead of disease with smart animal health solutions. VetCare+ uses AI to monitor livestock
                  health, detect early risks, and connect farmers to instant veterinary support. Better care, lower
                  mortality, higher profits.
                </p>
                <div className="hero-btn animated" data-animation-in="fadeInUp">
                  <div className="btn-1">
                    <a
                      href="https://vetcare.shambarecords.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn"
                      onClick={ClickHandler}
                    >
                      Shamba Vet Care
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="down-shape">
              <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                <path d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z" fill="white" fillOpacity="0.2" />
                <path d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z" fill="white" />
                <path d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z" fill="white" fillOpacity="0.2" />
                <path d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z" fill="white" fillOpacity="0.2" />
                <path d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z" fill="white" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>

        {/* SLIDER 4 (lazy) */}
        <div>
          <div className="slider-item">
            <div className="bg-image">
              <Image
                className="animated"
                src={Slider4}
                alt=""
                sizes="100vw"
                placeholder="blur"
                data-animation-in="zoomInImage"
              />
            </div>
            <div className="container">
              <div className="content">
                <h1 className="bg-text">Shamba Shield</h1>
                <h2 className="animated" data-animation-in="fadeInUp">Protect Your Harvest. Empower Your Future.</h2>
                <h3 className="animated" data-animation-in="fadeInUp">Shamba Shield</h3>
                <p className="animated" data-animation-in="fadeInUp">
                  In a world of climate shocks, Shamba Shield offers powerful protection. Our digital insurance
                  platform covers crops, livestock, equipment, and income — backed by verified farm records. Claims are
                  processed quickly, transparently, and fairly.
                </p>
                <div className="hero-btn animated" data-animation-in="fadeInUp">
                  <div className="btn-1">
                    <a
                      href="https://insurance.shambarecords.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn"
                      onClick={ClickHandler}
                    >
                      Shamba Shield
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="down-shape">
              <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                <path d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z" fill="white" fillOpacity="0.2" />
                <path d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z" fill="white" />
                <path d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z" fill="white" fillOpacity="0.2" />
                <path d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z" fill="white" fillOpacity="0.2" />
                <path d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z" fill="white" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>

        {/* SLIDER 5 (lazy) */}
        <div>
          <div className="slider-item">
            <div className="bg-image">
              <Image
                className="animated"
                src={Slider5}
                alt=""
                sizes="100vw"
                placeholder="blur"
                data-animation-in="zoomInImage"
              />
            </div>
            <div className="container">
              <div className="content">
                <h1 className="bg-text">Shamba Connect</h1>
                <h2 className="animated" data-animation-in="fadeInUp">Seamless Integration from Farmer to Market</h2>
                <h3 className="animated" data-animation-in="fadeInUp">Shamba Connect</h3>
                <p className="animated" data-animation-in="fadeInUp">
                  Digitize your entire value chain. Shamba Connect is the CRM engine for cooperatives, aggregators, and
                  agribusinesses, streamlining farmer onboarding, performance tracking, payment integration, and more.
                  It connects every actor in agriculture — smallholders, processors, exporters — into a single
                  data-powered ecosystem.
                </p>
                <div className="hero-btn animated" data-animation-in="fadeInUp">
                  <div className="btn-1">
                    <a
                      href="https://connect.shambarecords.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn"
                      onClick={ClickHandler}
                    >
                      Shamba Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="down-shape">
              <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                <path d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z" fill="white" fillOpacity="0.2" />
                <path d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z" fill="white" />
                <path d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z" fill="white" fillOpacity="0.2" />
                <path d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z" fill="white" fillOpacity="0.2" />
                <path d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z" fill="white" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSlider;
