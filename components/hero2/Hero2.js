import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Slide1 from '/public/images/slider/1.png'
import Slide2 from '/public/images/slider/2.png'
import Shape from '/public/images/slider/shape-4.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,

    };

    return (
        <section className="hero hero-slider-wrapper hero-style-1">
            <Slider {...settings} className="hero-slider-s2">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xl-7 col-lg-9 col-sm-12 slide-caption">
                                <div className="slide-title-sub">
                                    <h5>International Logistics</h5>
                                </div>
                                <div className="slide-title">
                                    <h2>
                                        Flexible Transport<br />
                                        Logistics service<br />
                                        provider
                                    </h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>World’s leading global logistics provider. We support industry and trade through the global exchange of goods via land transport.</p>
                                </div>
                                <div className="btns">
                                    <Link onClick={ClickHandler} href="/services" className="theme-btn">All Services</Link>
                                    <Link onClick={ClickHandler} href="/about" className="hero-btn">
                                        <span>Learn More</span> <i className="ti-angle-right"></i>
                                    </Link>
                                </div>
                                <div className="slider-pic">
                                    <img src={Slide1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xl-7 col-lg-9 col-sm-12 slide-caption">
                                <div className="slide-title-sub">
                                    <h5>International Logistics</h5>
                                </div>
                                <div className="slide-title">
                                    <h2>
                                        Flexible Transport<br />
                                        Logistics service<br />
                                        provider
                                    </h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>World’s leading global logistics provider. We support industry and trade through the global exchange of goods via land transport.</p>
                                </div>
                                <div className="btns">
                                    <Link onClick={ClickHandler} href="/services" className="theme-btn">All Services</Link>
                                    <Link onClick={ClickHandler} href="/about" className="hero-btn">
                                        <span>Learn More</span> <i className="ti-angle-right"></i>
                                    </Link>
                                </div>
                                <div className="slider-pic">
                                    <img src={Slide2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
            <div className="shape-img"></div>
        </section>
    );
};

export default HeroSlider;
