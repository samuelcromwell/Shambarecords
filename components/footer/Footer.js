import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '/public/Logo/whitelogo.svg'
import BgImage from '/public/images/footer-bg.jpg'
import map from '/public/images/footer-map.svg'
import Services from '../../api/Services';
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const Footer = (props) => {


    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <footer className={"" + props.hclass}>

            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row footer-links">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="blog" />
                                </div>
                                <p>Shamba Records is transforming farming — one smallholder at a time.Through powerful digital tools, we connect farmers to extension services, loans, and insurance.</p>

                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.map((service, item) => (
                                        <li key={item}>
                                            <a
                                                href={service.slug}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={ClickHandler}
                                            >
                                                {service.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Useful links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/about">How it Works</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Terms & Conditions</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget locations-widget">
                                <div className="widget-title">
                                    <h3>Locations</h3>
                                </div>
                                <p>Mitsumi Business Park,
                                    Muthithi Road, Westlands</p>
                                <ul>
                                    <li>Contact</li>
                                    <li>info@shambarecords.com</li>
                                    <li>+254 732 693 963</li>
                                </ul>
                            </div>
                            <div className="socials ">
                                <a href="https://www.facebook.com/ShambaRecords" target="_blank" rel="noopener noreferrer">
                                    <Facebook />
                                </a>
                                <a href="https://x.com/RecordsShamba" target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter size={25} />
                                </a>
                                <a href="https://www.linkedin.com/company/shamba-records/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-map">
                    <Image src={map} alt="" />
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">
                        &copy; 2025 - Shamba Records. All rights reserved.
                        </p>

                        {/* NEW: bottom-right attribution */}
                        <small className="footer-attrib">
                        Images by{" "}
                        <a
                            href="https://www.freepik.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Freepik
                        </a>
                        </small>
                    </div>
                    </div>
                </div>
            </div>

            <div className="bg-image">
                <Image src={BgImage} alt="" />
            </div>
            <div className="shape">
                <svg width="191" height="208" viewBox="0 0 191 208" fill="none">
                    <path d="M125.53 208.291H118.13L0 12.271V0.00102234L125.53 208.291Z" fill="white" />
                    <path d="M0 43.1711L99.93 209.121H0V43.1711Z" fill="#047B18" />
                    <path d="M190.33 209.121H138.45L68.9102 93.7311H120.79L190.33 209.121Z" fill="#144754" />
                    <path d="M98.0897 69.1602H72.8097L38.9297 12.9402H64.2097L98.0897 69.1602Z" fill="#047B18" />
                </svg>
            </div>
            <div className="shape-1">
                <svg width="109" height="109" viewBox="0 0 109 109" fill="none">
                    <g clipPath="url(#clip0_20_22861)">
                        <path
                            d="M89.2238 70.0989C96.8421 52.9453 83.0134 34.3526 64.3055 38.1509C63.3593 38.3037 62.349 38.6611 61.473 38.9482C64.7448 51.0903 62.3701 65.8435 53.3269 71.7703C45.1535 77.0712 38.0365 69.6765 39.8509 61.3734C42.0436 51.5042 47.9756 42.2447 56.7624 37.1361C54.0501 29.6612 48.588 23.7955 39.7724 23.6173C24.9222 23.3457 13.7687 39.9537 15.1025 53.6225C15.3318 55.0418 13.1707 55.488 12.9415 54.0686C9.22601 36.1726 26.7675 16.7366 45.2082 20.6033C52.3546 22.1676 57.4777 28.0396 60.3243 35.4443C69.9479 31.6083 80.9223 34.9331 88.1673 41.9185C96.5176 50.0363 96.5233 61.4922 91.8885 71.2704C91.1716 72.8428 88.6409 71.6006 89.2238 70.0989ZM46.3634 54.2047C44.5327 57.8986 42.6503 62.4747 43.338 66.7328C43.9554 70.8563 49.4223 69.5367 51.6411 68.547C54.3972 67.2766 55.8312 64.1322 56.7982 61.4031C59.0649 55.6001 59.5304 47.6604 57.9109 40.6401C52.8841 43.7822 49.1156 49.0027 46.3634 54.2047Z"
                            fill="#047B18" />
                        <path
                            d="M88.1881 80.2176C86.2215 76.4573 84.4532 72.4223 83.4969 68.3047C83.1273 66.617 85.4928 66.2347 85.9969 67.8526C87.0049 71.0881 88.7546 74.1066 90.4341 76.9908C92.1095 75.9436 93.9194 74.826 95.5247 73.6443C96.7272 72.6734 98.25 70.6798 100.014 70.7832C100.897 70.8348 101.248 71.5062 101.33 72.3183C101.502 74.281 98.6815 75.756 97.3447 76.7971C95.1379 78.4644 92.9252 79.7924 90.5077 81.0567C89.7024 81.4779 88.6095 81.0233 88.1881 80.2176Z"
                            fill="#047B18" />
                    </g>
                    <defs>
                        <clipPath id="clip0_20_22861">
                            <rect width="80" height="80" fill="white"
                                transform="matrix(0.463446 0.886125 0.886125 -0.463446 0.679688 37.7559)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;