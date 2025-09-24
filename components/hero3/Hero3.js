import React from 'react';
import Link from 'next/link';
import Shape from '/public/images/slider/bg-img.jpg'
import Shape1 from '/public/images/slider/shape-1.svg'
import Shape2 from '/public/images/slider/shape-2.svg'
import Shape3 from '/public/images/slider/shape-3.svg'
import Shape4 from '/public/images/slider/hero-img.jpg'
import Image from 'next/image';


function Hero3() {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="hero-section-s3">
            <div className="container">
                <div className="hero-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h2>Internation Logistics</h2>
                            <h3>Flexible <span>logistic</span>
                                & cargo service</h3>
                            <p>We are a flexible logistics and cargo service provider, offering tailored solutions to
                                meet
                                diverse transportation and delivery needs efficiently.</p>
                            <div className="hero-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">LEt,s get started</Link>
                                <Link onClick={ClickHandler} href="/contact" className="contact-btn">Who we are <i className="flaticon-down"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-image">
                <Image src={Shape} alt="" />
            </div>
            <div className="icon">
                <Image src={Shape1} alt="" />
            </div>
            <div className="shape-1">
                <Image src={Shape2} alt="" />
            </div>
            <div className="shape-2">
                <Image src={Shape3} alt="" />
            </div>
            <div className="left-img">
                <Image src={Shape4} alt="" />
            </div>
        </section>
    );
}

export default Hero3;