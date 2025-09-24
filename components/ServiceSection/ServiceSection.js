import React from "react";
import Link from 'next/link'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";
import Slider from "react-slick";
import Image from "next/image";



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow = true, ServiceAllBtn = true } = props

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
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
        <div className={"" + props.hclass} >
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-7 col-12">
                        {SectionTitleShow && (
                            <SectionTitle subtitle={'Driving Financial Inclusion, Climate Resilience & Global Market Access — One Farmer at a Time.'} title={'Our Innovations:That Power the Future of Farming'} />
                        )}
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0">
                <Slider {...settings} className="service-slider">

                    {Services.map((service, item) => (
                        <div className="service-card" key={item}>
                            <Image className="image" src={service.image} alt="" />
                            <div className="content">
                                <service.icon size={40} color={"#000"} />
                                <div className="text">
                                    <span>{service.id}</span>
                                    <h2>
                                        <a
                                            href={service.slug}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={ClickHandler}
                                        >
                                            {service.title}
                                        </a>
                                    </h2>
                                    <p>{service.description}</p>
                                    <a
                                        href={service.slug}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={ClickHandler}
                                        className="service-single-link"
                                    >
                                        <i className="flaticon-right-arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </Slider>
            </div>

        </div>

    );
}

export default ServiceSection;



