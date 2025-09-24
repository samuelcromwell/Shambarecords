import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';
import Image from 'next/image';

const ClickHandler = () => {
  if (typeof window !== 'undefined') window.scrollTo(10, 0);
};

/**
 * Cloudinary public IDs (no domain, just the path after /upload/)
 */
const CLD_SMART_SEASON = 'v1758711560/smart-season_hv2xwd.jpg';
const CLD_CASHBOOST    = 'v1758711560/cashboost_umchtl.jpg';
const CLD_VETCARE      = 'v1758711561/vet-care_z9x2fl.jpg';
const CLD_SHIELD       = 'v1758711560/shamba-shield_is5dnc.jpg';
const CLD_CONNECT      = 'v1758711559/shamba-connect_u5vh0m.jpg';

// Tiny blur placeholder for non-initial slides
const BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8QEA8PEA8QDw8QDxAPEA8QDxAWFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0fHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAEAAQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAFBAb/xAAZEQADAQEBAAAAAAAAAAAAAAABAgMAHhH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQT/xAAWEQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/AL8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=';

/**
 * Cloudinary loader for Next/Image
 * - f_auto: best format per browser
 * - q_auto (or explicit quality)
 * - dpr_auto: HiDPI aware
 * - w_[width], c_fill,g_auto: responsive sizing + smart crop
 * (If your images are 16:9 already, this won’t crop; it just keeps the subject centered if needed.)
 */
const cldLoader = ({ src, width, quality }) => {
  const q = quality ? `q_${quality}` : 'q_auto';
  return `https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,${q},dpr_auto,w_${width},c_fill,g_auto/${src}`;
};

/** Tighter sizes map so small screens don’t pull 1920px */
const SIZES =
  '(min-width:1536px) 1536px, ' +
  '(min-width:1280px) 1280px, ' +
  '(min-width:1024px) 1024px, ' +
  '(min-width:768px) 768px, 100vw';

const HeroSlider = () => {
  const settings = {
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 991,
        settings: { arrows: false, dots: true },
      },
    ],
  };

  return (
    <>
      {/* Connection hints only; let Next/Image handle LCP preload via `priority` */}
      <Head>
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
      </Head>

      <section className="hero-section">
        <Slider {...settings} className="hero-slider">
          {/* SLIDE 1 (LCP: eager + priority) */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  loader={cldLoader}
                  className="animated"
                  src={CLD_SMART_SEASON}
                  alt="Shamba SmartSeason"
                  priority
                  loading="eager"
                  fetchPriority="high"
                  sizes={SIZES}
                  width={1920}
                  height={1080}
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

          {/* SLIDE 2 (lazy + blur) */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  loader={cldLoader}
                  className="animated"
                  src={CLD_CASHBOOST}
                  alt="Shamba Cash Boost"
                  loading="lazy"
                  sizes={SIZES}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="container">
                <div className="content">
                  <h1 className="bg-text">Cash Boost</h1>
                  <h2 className="animated" data-animation-in="fadeInUp">AI-Powered Microfinance for the Modern Farmer</h2>
                  <h3 className="animated" data-animation-in="fadeInUp">Shamba Cash Boost</h3>
                  <p className="animated" data-animation-in="fadeInUp">
                    Say goodbye to paperwork and hello to data-driven credit. Shamba Cash Boost uses your actual farm
                    performance — not your bank history — to unlock fast, fair, and transparent microloans powered by
                    intelligent credit scoring and real-time analytics.
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

          {/* SLIDE 3 (lazy + blur) */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  loader={cldLoader}
                  className="animated"
                  src={CLD_VETCARE}
                  alt="Shamba VetCare+"
                  loading="lazy"
                  sizes={SIZES}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="container">
                <div className="content">
                  <h1 className="bg-text">Shamba VetCare+</h1>
                  <h2 className="animated" data-animation-in="fadeInUp">AI-Driven Animal Health for Thriving Farms</h2>
                  <h3 className="animated" data-animation-in="fadeInUp">Shamba VetCare+</h3>
                  <p className="animated" data-animation-in="fadeInUp">
                    Stay ahead of disease with smart animal health solutions. VetCare+ uses AI to monitor livestock
                    health, detect early risks, and connect farmers to instant veterinary support. Better care,
                    lower mortality, higher profits.
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

          {/* SLIDE 4 (lazy + blur) */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  loader={cldLoader}
                  className="animated"
                  src={CLD_SHIELD}
                  alt="Shamba Shield"
                  loading="lazy"
                  sizes={SIZES}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  width={1920}
                  height={1080}
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
              {/* down-shape svg unchanged */}
            </div>
          </div>

          {/* SLIDE 5 (lazy + blur) */}
          <div>
            <div className="slider-item">
              <div className="bg-image">
                <Image
                  loader={cldLoader}
                  className="animated"
                  src={CLD_CONNECT}
                  alt="Shamba Connect"
                  loading="lazy"
                  sizes={SIZES}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  width={1920}
                  height={1080}
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
              {/* down-shape svg unchanged */}
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default HeroSlider;
