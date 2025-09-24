import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pimg1 from '/public/images/partners/image 1.svg';
import Pimg2 from '/public/images/partners/image 2.svg';
import Pimg3 from '/public/images/partners/image 3.svg';
import Pimg4 from '/public/images/partners/image 4.svg';
import Pimg5 from '/public/images/partners/image 5.svg';
import Pimg6 from '/public/images/partners/image 6.svg';
import Pimg7 from '/public/images/partners/image 7.svg';
import Pimg8 from '/public/images/partners/image 8.svg';
import Pimg9 from '/public/images/partners/image 9.svg';
import Image from 'next/image';

const PartnersSection = (props) => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    };


    return (
        <section className={"" + props.CollClass}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <Slider {...settings} className='partner-grids partners-slider'>
                            <div className="grid">
                                <Image src={Pimg1} alt="" />
                            </div>
                            <div className="grid">
                                <Image src={Pimg2} alt="" />
                            </div>
                            <div className="grid">
                                <Image src={Pimg3} alt="" />
                            </div>
                            <div className="grid">
                                <Image src={Pimg4} alt="" />
                            </div>
                            <div className="grid">
                                <Image src={Pimg5} alt="" />
                            </div>
                            <div className="grid">
                                <Image src={Pimg6} alt="" />
                            </div>
                            <div className="grid">
                                <Image src={Pimg7} alt="" />
                            </div>
                            <div className="grid">
                                <Image src={Pimg8} alt="" />
                            </div>
                            <div className="grid">
                                <Image src={Pimg9} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;




