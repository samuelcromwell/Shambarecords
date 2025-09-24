import React from 'react';
import Link from 'next/link';
import { Leaf, ScanBarcode, BrainCircuit } from 'lucide-react'; // Lucide icons

const FeaturesSectionS2 = ({ hclass = '' }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={hclass}>
            <div className="top-wraper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-section-title">
                                <h2>Building a Borderless Agricultural Economy</h2>
                                <h3>Our Ecosystem of Impact</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="f-btn">
                                <Link onClick={ClickHandler} href="/services" className="theme-btn">
                                    All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-wraper">
                <div className="container">
                    <div className="bottom-content">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon mb-3">
                                        <Leaf size={40} className="text-green-600" />
                                    </div>
                                    <div className="content">
                                        <h3>Climate-Smart Farming</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon mb-3">
                                        <ScanBarcode size={40} className="text-blue-600" />
                                    </div>
                                    <div className="content">
                                        <h3>Blockchain Traceability</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon mb-3">
                                        <BrainCircuit size={40} className="text-purple-600" />
                                    </div>
                                    <div className="content">
                                        <h3>AI for Risk & Opportunity</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSectionS2;
