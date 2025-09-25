import React from "react";
import Link from 'next/link';
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";
import Slider from "react-slick";
import Image from "next/image";

// Cloudinary loader: add responsive transforms safely
const cldLoader = ({ src, width, quality }) => {
  const q = typeof quality === 'number' ? quality : 75;
  // if the URL already has /upload/, inject/override width + sane defaults
  try {
    const url = new URL(src);
    const path = url.pathname;
    const idx = path.indexOf('/upload/');
    if (idx === -1) return src; // not a cloudinary upload url
    const prefix = path.slice(0, idx + 8); // includes "/upload/"
    const rest = path.slice(idx + 8);

    // split "transform(s)/publicId"
    const firstSlash = rest.indexOf('/');
    let transforms = firstSlash === -1 ? rest : rest.slice(0, firstSlash);
    const publicId = firstSlash === -1 ? '' : rest.slice(firstSlash + 1);

    // normalize transforms (remove existing w_/q_/f_ so we can set them)
    const parts = transforms && transforms.includes(',')
      ? transforms.split(',').filter(t => !/^w_/.test(t) && !/^q_/.test(t) && !/^f_/.test(t))
      : (transforms ? [transforms] : []);

    const newTransforms = ['f_auto', `q_${q}`, 'c_fill', 'g_auto', `w_${width}`, ...parts]
      .filter(Boolean)
      .join(',');

    url.pathname = `${prefix}${newTransforms}/${publicId}`;
    return url.toString();
  } catch {
    // if src isn't a valid URL, just return it
    return src;
  }
};

const SIZES =
  "(min-width:1536px) 600px, (min-width:1280px) 520px, (min-width:1024px) 480px, (min-width:768px) 50vw, 100vw";

const ServiceSection = (props) => {
  const ClickHandler = () => {
    if (typeof window !== 'undefined') window.scrollTo(10, 0);
  };

  const { SectionTitleShow = true } = props;

  const settings = {
    dots: true,
    autoplay: true,
    infinite: false,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 991,  settings: { slidesToShow: 2, dots: true, arrows: false } },
      { breakpoint: 767,  settings: { slidesToShow: 1, dots: true, arrows: false } },
    ],
  };

  return (
    <div className={"" + props.hclass}>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7 col-12">
            {SectionTitleShow && (
              <SectionTitle
                subtitle={'Driving Financial Inclusion, Climate Resilience & Global Market Access — One Farmer at a Time.'}
                title={'Our Innovations: That Power the Future of Farming'}
              />
            )}
          </div>
        </div>
      </div>

      <div className="container-fluid g-0">
        <Slider {...settings} className="service-slider">
          {Services.map((service, idx) => (
            <div className="service-card" key={service.id ?? idx}>
              {/* REQUIRED: sized, relative parent for Next/Image fill */}
              <div className="img-wrap">
                <Image
                  loader={cldLoader}
                  src={service.image}
                  alt={service.title || ''}
                  fill
                  sizes={SIZES}
                  className="image"
                  priority={idx === 0}
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
};

export default ServiceSection;
