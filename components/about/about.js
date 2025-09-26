import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';

// image
import Ab from '/public/images/about/ab5.jpg'

import Abd2 from '/public/images/about/ab1.jpg'
import Abd3 from '/public/images/about/ab2.jpg'
import Abd4 from '/public/images/about/ab3.jpg'
import Abd6 from '/public/images/about/ceo.jpg'

import Image from 'next/image';

const about = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass} style={{ backgroundColor: '#047B18' }}>
            <div className="shape">
                <Image src={Ab} alt="" />
            </div>
   
            <div className="container" >
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <div className="image-1">
                                <Image src={Abd2} alt="" />
                            </div>
                            <div className="image-2">
                                <Image src={Abd3} alt="" />
                            </div>
                            <div className="image-3" >
                                <Image src={Abd4} alt=""
                                 />
                            </div>
                           

                            <div className="since">
                                <div>
                                    <h2> <CountUp end={50000} enableScrollSpy>00</CountUp> </h2>
                                    <p>Farmers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="title">
                                
                                <h3>Where Technology Meets the Soil</h3>
                            </div>
                            <div className="sub-content">
                                <span>Shamba Records is a full-stack digital platform accelerating the transformation of Africa’s agricultural economy. By fusing blockchain, artificial intelligence, and smart data tools, we’re making it possible for smallholder farmers to build credit profiles, access microloans, insure their crops, and connect their produce to premium markets—all from their mobile phone.</span>
                            </div>
                          

                            <div className="author-btn">
                                <div className="author">
                                    <div className="image">
                                        <Image src={Abd6} alt="" />
                                    </div>
                                    <div className="text">
                                        <h1 className='ceo'>George Maina</h1>
                                        <span>Ceo & Founder</span>
                                    </div>
                                </div>
                                <div className="about-btn">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn">
                                        more about us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;

