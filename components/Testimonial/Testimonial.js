import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import testimonials from '../../api/testimonialData';
import Shape from '/public/images/testimonial/feedback.svg';
import Image from 'next/image';

const Testimonial = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="testimonial-wrap testimonial-slider">
          <div className="image slider-for">
            <Slider
              ref={(slider1) => setNav1(slider1)}
              asNavFor={nav2}
              arrows={false}
              fade
            >
              {testimonials.map((t) => (
                <div className="item" key={t.id}>
                  <span className="feedback">
                    <Image src={Shape} alt="Feedback Icon" />
                    Feedback
                  </span>

                  {/* IMPORTANT: next/image from remote URLs needs explicit width/height */}
                  <Image
                    src={t.img}
                    alt={t.title}
                    width={t.width || 640}
                    height={t.height || 640}
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{
                      width: '100%',
                      height: 400,
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    priority={true}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="content-wrap">
            <h2>Trusted Software services</h2>
            <h3>What Our Clients Say</h3>

            <div className="slider-nav">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={1}
                swipeToSlide
                focusOnSelect
              >
                {testimonials.map((t) => (
                  <div className="content" key={t.id}>
                    <p>{t.Des}</p>
                    <div className="client-name">
                      <h4>{t.title}/</h4>
                      <span>{t.sub}</span>
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
};

export default Testimonial;
