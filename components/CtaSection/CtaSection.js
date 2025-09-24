import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const CtaSection = (props) => {
    return (
        <div className={"" + props.hclass}>
            <div className="container">
                <div className="cta-wrapr">
                    <div className="wpo-section-title">
                        <h2>Empowering African Agriculture</h2>
                        <h3>Smart tools & data-driven solutions for modern farming</h3>
                        <Link onClick={ClickHandler} href="/contact" className="theme-btn">
                            Get in Touch
                        </Link>
                        <div className="socials ">
                            <a href="https://www.facebook.com/ShambaRecords" target="_blank" rel="noopener noreferrer">
                                <Facebook />
                            </a>
                            <a href="https://x.com/RecordsShamba" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter size={25}  />
                            </a>
                            <a href="https://www.linkedin.com/company/shamba-records/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                <Linkedin  />
                            </a>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-phone-call"></i>
                            </div>
                            <div className="text">
                                <span>Call for Support</span>
                                <p>+254 732 693 963</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-email"></i>
                            </div>
                            <div className="text">
                                <span>Email Us</span>
                                <p>info@shambarecords.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
