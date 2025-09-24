import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '../../api/testimonialData';

import Shape from '/public/images/testimonial/feedback.svg'
import Image from 'next/image';






const Testimonial = (props) => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="testimonial-wrap testimonial-slider">
                    <div className="image slider-for">
                        <Slider  ref={(slider1) => setNav1(slider1)} arrows={false} fade={true}>
                            {testimonials.map((testimonial, item) => (
                                <div className="item" key={item}>
                                    <span className="feedback"><Image src={Shape} alt="" />
                                        Feedback</span>
                                    <Image src={testimonial.img} alt=""  style ={{width:"100%",height:"400px"}}/>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="content-wrap">
                        <h2>Trusted Software services</h2>
                        <h3>What Our Client’s Say</h3>
                        <div className="slider-nav">
                            <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={1} swipeToSlide={true} focusOnSelect={true} >
                                {testimonials.map((testimonial, item) => (
                                    <div className="content" key={item}>
                                        <p>{testimonial.Des}</p>
                                        <div className="client-name">
                                            <h4>{testimonial.title}/</h4>
                                            <span>{testimonial.sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;






