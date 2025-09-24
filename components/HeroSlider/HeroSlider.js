import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';

import Slider1 from '/public/images/hero/cashboost.jpg';
import Slider2 from '/public/images/hero/vet-care.jpg';
import Slider3 from '/public/images/hero/smart-season.png';
import Slider4 from '/public/images/hero/shamba-shield.jpg';
import Slider5 from '/public/images/hero/shamba-connect.jpg';

import Image from 'next/image';

const ClickHandler = () => {
  if (typeof window !== 'undefined') window.scrollTo(10, 0);
};

const HeroSlider = () => {
  const settings = {
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    // remove slick lazy loading completely so Next/Image can eagerly load
    // lazyLoad: 'progressive',
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
    <>
      {/* Preload ALL hero images so fetch starts before render */}
      <Head>
        <link rel="preload" as="image" href="/images/hero/smart-season.png" />
        <link rel="preload" as="image" href="/images/hero/cashboost.jpg" />
        <link rel="preload" as="image" href="/images/hero/vet-care.jpg" />
        <link rel="preload" as="image" href="/images/hero/shamba-shield.jpg" />
        <link rel="preload" as="image" href="/images/hero/shamba-connect.jpg" />
      </Head>

      <section className="hero-section">
        <Slider {...settings} className="hero-slider">
          {/* SLIDER 1 */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  className="animated"
                  src={Slider3}
                  alt="Shamba SmartSeason"
                  priority
                  loading="eager"
                  fetchPriority="high"
                  sizes="100vw"
                  placeholder="blur"
                  data-animation-in="zoomInImage"
                />
              </div>
              <div className="container">
                <div className="content">
                  <h1 className="bg-text">Shamba SmartSeason</h1>
                  <h2 className="animated" data-animation-in="fadeInUp">
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
              {/* down-shape svg unchanged */}
            </div>
          </div>

          {/* SLIDER 2 */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  className="animated"
                  src={Slider1}
                  alt="Shamba Cash Boost"
                  priority
                  loading="eager"
                  fetchPriority="high"
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
                    performance — not your bank history — to unlock fast, fair, and transparent microloans…
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
              {/* down-shape svg unchanged */}
            </div>
          </div>

          {/* SLIDER 3 */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  className="animated"
                  src={Slider2}
                  alt="Shamba VetCare+"
                  priority
                  loading="eager"
                  fetchPriority="high"
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
                    Stay ahead of disease with smart animal health solutions…
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
              {/* down-shape svg unchanged */}
            </div>
          </div>

          {/* SLIDER 4 */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  className="animated"
                  src={Slider4}
                  alt="Shamba Shield"
                  priority
                  loading="eager"
                  fetchPriority="high"
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
                    In a world of climate shocks, Shamba Shield offers powerful protection…
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
              {/* down-shape svg unchanged */}
            </div>
          </div>

          {/* SLIDER 5 */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  className="animated"
                  src={Slider5}
                  alt="Shamba Connect"
                  priority
                  loading="eager"
                  fetchPriority="high"
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
                    Digitize your entire value chain…
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
              {/* down-shape svg unchanged */}
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default HeroSlider;
