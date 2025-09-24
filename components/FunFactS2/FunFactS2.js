import React from 'react';
import CountUp from 'react-countup';
import Shape1 from '/public/images/left-shape-fun.svg'
import Shape2 from '/public/images/right-shape-fun.svg'
import Image from 'next/image';

const FunFactS2 = (props) => {
    return (
        <section className={"" +props.hclass}>
            <h3 className="d-none"> section title</h3>
            <div className="container">
                <div className="wraper">
                    <div className="row g-0">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-warehouse"></i>
                                <h2><CountUp end={30} enableScrollSpy />%</h2>
                                <p>average yield increase</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-truck"></i>
                                <h2><CountUp end={50} enableScrollSpy />%</h2>
                                <p>reduction in post-harvest losses</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-globe"></i>
                                <h2><CountUp end={100} enableScrollSpy />%</h2>
                                <p>Improved access to finance and premium markets</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-order"></i>
                                <h2><CountUp end={500000} enableScrollSpy />+</h2>
                                <p>Happy Farmers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-shape">
                <Image src={Shape1} alt="" />
            </div>
            <div className="right-shape">
                <Image src={Shape2} alt="" />
            </div>
        </section>
    );
};

export default FunFactS2;