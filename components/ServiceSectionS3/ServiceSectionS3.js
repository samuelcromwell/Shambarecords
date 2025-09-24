import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from "../../api/Services";
import Shape from '/public/images/service/top-shape.svg';
import Shape2 from '/public/images/service/bottom-shape.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

// Same Cloudinary loader
const cldLoader = ({ src, width, quality }) => {
  const q = typeof quality === 'number' ? quality : 75;
  let publicPart = src;
  if (src.startsWith('http')) {
    const m = src.match(/\/upload\/(.+)$/);
    publicPart = m ? m[1] : src.replace(/^https?:\/\/[^/]+\//, '');
  }
  return `https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_${q},dpr_auto,c_fill,g_auto,w_${width}/${publicPart}`;
};

const ServiceSectionS3 = (props) => {
  const ClickHandler = () => {
    if (typeof window !== 'undefined') window.scrollTo(10, 0);
  };

  const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1499, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true } },
      { breakpoint: 991,  settings: { slidesToShow: 2, dots: true, arrows: false } },
      { breakpoint: 767,  settings: { slidesToShow: 1, dots: true, arrows: false } },
    ],
  };

  const SIZES = "(min-width:1536px) 420px, (min-width:1280px) 360px, (min-width:1024px) 320px, (min-width:768px) 50vw, 100vw";

  return (
    <div className={"" + props.hclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <SectionTitle
              subtitle={'Our Innovations: Products & Services That Power the Future of Farming'}
              title={'Driving Financial Inclusion, Climate Resilience & Global Market Access — One Farmer at a Time.'}
            />
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
          {Services.map((service) => (
            <div className="service-card-s2" key={service.id}>
              {/* If you later show a service image here, wrap like below: */}
              {/* <div style={{ position:'relative', width:'100%', paddingTop:'56.25%', overflow:'hidden' }}>
                  <Image loader={cldLoader} src={service.image} alt={service.title} fill sizes={SIZES} className="image" />
                </div> */}
              <div className="icon">
                {/* If service.iconName is an image path, give dimensions to avoid warnings */}
                {service.iconName ? (
                  <Image src={service.iconName} alt="" width={56} height={56} />
                ) : null}
              </div>

              <div className="content">
                <h2>
                  <Link href={service.slug} target="_blank" onClick={ClickHandler}>
                    {service.title}
                  </Link>
                </h2>
                <p>{service.lgdescription}</p>
                <div className="services-btn">
                  <Link href={service.slug} target="_blank" onClick={ClickHandler}>
                    See Details
                  </Link>
                </div>
              </div>

              <div className="top-shape">
                <Image src={Shape} alt="" width={120} height={120} />
              </div>
              <div className="bottom-shape">
                <Image src={Shape2} alt="" width={120} height={120} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSectionS3;
