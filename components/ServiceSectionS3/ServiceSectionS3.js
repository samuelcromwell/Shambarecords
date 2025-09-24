import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from "../../api/Services";
import Shape from '/public/images/service/top-shape.svg'
import Shape2 from '/public/images/service/bottom-shape.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const ServiceSectionS3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: true,
        autoplay: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1499,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }

        ]
    };

    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subtitle={'Our Innovations: Products & Services That Power the Future of Farming'} title={'Driving Financial Inclusion, Climate Resilience & Global Market Access — One Farmer at a Time.'} />
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="service-btn">
                            <Link onClick={ClickHandler} href="#" className="theme-btn">All Services</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-slider-s2">
                <Slider {...settings}>
                    {Services.map((service, item) => (
                        <div className="service-card-s2" key={item}>
                            <div className="icon">
                                <Image src={service.iconName} alt="" />
                            </div>
                            <div className="content">
                                <h2><Link href={`${service.slug}`} _target="blank" as={`${service.slug}`} onClick={ClickHandler}>{service.title}</Link></h2>
                                <p>{service.lgdescription}</p>
                                <div className="services-btn">
                                    <Link href={`${service.slug}`} _target="blank" as={`${service.slug}`} onClick={ClickHandler}>See Details </Link>
                                </div>
                            </div>
                            <div className="top-shape">
                                <Image src={Shape} alt="" />
                            </div>
                            <div className="bottom-shape">
                                <Image src={Shape2} alt="" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ServiceSectionS3;