import React from "react";
import Link from 'next/link';
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";
import Slider from "react-slick";
import Image from "next/image";

// Cloudinary loader -> builds responsive URLs (no /_next/image 500s)
const cldLoader = ({ src, width, quality }) => {
  const q = typeof quality === 'number' ? quality : 75;
  // extract the public part after /upload/
  let publicPart = src;
  if (src.startsWith('http')) {
    const m = src.match(/\/upload\/(.+)$/);
    publicPart = m ? m[1] : src.replace(/^https?:\/\/[^/]+\//, '');
  }
  return `https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_${q},dpr_auto,c_fill,g_auto,w_${width}/${publicPart}`;
};

const ServiceSection = (props) => {
  const ClickHandler = () => {
    if (typeof window !== 'undefined') window.scrollTo(10, 0);
  };

  const { SectionTitleShow = true } = props;

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 991,  settings: { slidesToShow: 2, dots: true, arrows: false } },
      { breakpoint: 767,  settings: { slidesToShow: 1, dots: true, arrows: false } },
    ],
  };

  const SIZES = "(min-width:1536px) 600px, (min-width:1280px) 520px, (min-width:1024px) 480px, (min-width:768px) 50vw, 100vw";

  return (
    <div className={"" + props.hclass} >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7 col-12">
            {SectionTitleShow && (
              <SectionTitle
                subtitle={'Driving Financial Inclusion, Climate Resilience & Global Market Access — One Farmer at a Time.'}
                title={'Our Innovations:That Power the Future of Farming'}
              />
            )}
          </div>
        </div>
      </div>

      <div className="container-fluid g-0">
        <Slider {...settings} className="service-slider">
          {Services.map((service) => (
            <div className="service-card" key={service.id}>
              {/* SIZED PARENT with position: relative (not a class) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%', // 16:9
                  overflow: 'hidden',
                }}
              >
                <Image
                  loader={cldLoader}
                  src={service.image}
                  alt={service.title || 'Service image'}
                  fill
                  sizes={SIZES}
                  className="image"
                  priority={service.id === 1}
                />
              </div>

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
