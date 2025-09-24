import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import TeamData from '../../api/TeamData';
import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';
const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }

        ]
    };


    const { SectionTitleShow = true} = props;
    return (
        <section className={"" + props.hclass}>
            {SectionTitleShow && (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <SectionTitle subtitle={'The Humans of Shamba Records'} title={'Passionate Minds. Real Impact.'} />
                        </div>
                    </div>
                </div>
            )}
            <div className="container-fluid">
                <div className="team-slider">
                    <Slider {...settings}>
                        {TeamData.map((team, index) => (
                            <div className="team-card" key={index}>
                                <div className="image">
                                    <Image src={team.image} alt="" />
                                    <div className="icon">
                                        <ul className="flex gap-3">
                                            <li>
                                                <Link onClick={ClickHandler} href={team.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="w-5 h-5 text-[#0077B5] hover:scale-110 transition-transform" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href={team.email}>
                                                    <Mail className="w-5 h-5 text-gray-600 hover:scale-110 transition-transform" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="text">
                                        <h2>{team.name}</h2>
                                        <span>{team.title}</span>
                                    </div>
                                    <div className="hover-icon"></div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                
            </div>
            <div className="shape">
                <svg width="59" height="58" viewBox="0 0 59 58" fill="none">
                    <rect x="29" width="30" height="30" fill="#047B18" />
                    <rect y="30" width="29" height="28" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default TeamSection;











