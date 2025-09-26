import React, {useState, useEffect, useRef } from 'react';

import styles from './ImpactSection.module.scss';
import {
    FaChartLine,
    FaShieldAlt,
    FaMoneyBillWave,
    FaGlobeAfrica,
    FaSeedling,
    FaLeaf,
} from 'react-icons/fa';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function ImpactSection() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    return (
        <section className={styles['impact-section']}>
            <div className={styles.container}>
                <div className={styles['impact-header']}>
                    <h2>Our Impact & Global Reach</h2>
                    <p className={styles.tagline}>Powering Prosperity. Securing Food Futures.</p>
                </div>

                <div className={styles['impact-stats']}>
                    <div className={styles.stat}>
                        <FaChartLine className={styles.icon} />
                        <h3>+30%</h3>
                        <p>Average Yield Increase</p>
                    </div>
                    <div className={styles.stat}>
                        <FaShieldAlt className={styles.icon} />
                        <h3>-50%</h3>
                        <p>Reduction in Post-Harvest Losses</p>
                    </div>
                    <div className={styles.stat}>
                        <FaMoneyBillWave className={styles.icon} />
                        <h3>Better Finance</h3>
                        <p>Access to Microloans & Premium Markets</p>
                    </div>
                </div>

                <div className={styles['impact-grid']}>
                    <div className={styles['impact-card']}>
                        <img
                            src="https://res.cloudinary.com/dwoxop5y0/image/upload/v1758870901/kenya-farm_j1ysg1.jpg"
                            alt="Kenya Farm"
                        />
                        <div className={styles.content}>
                            <h4>Local Roots to Continental Scale</h4>
                            <p>
                                From digitizing farms in Kenya to building a scalable agri-tech blueprint for
                                Africa using AI, blockchain & precision analytics.
                            </p>
                        </div>
                    </div>
                    <div className={styles['impact-card']}>
                        <img
                            src="https://res.cloudinary.com/dwoxop5y0/image/upload/v1758870901/farmers_bgoj2y.png"
                            alt="Farmers"
                        />
                        <div className={styles.content}>
                            <h4>Transformation at Every Level</h4>
                            <p>
                                Empowering farmers, cooperatives, and governments with data and tools for
                                inclusive, traceable, and scalable agri-growth.
                            </p>
                        </div>
                    </div>
                    <div className={styles['impact-card']}>
                        <img
                            src="https://res.cloudinary.com/dwoxop5y0/image/upload/v1758871189/top-view-vegetables-arrangement-with-plate_1_wavloc.jpg"
                            alt="Export Market"
                        />
                        <div className={styles.content}>
                            <h4>Global Market Access</h4>
                            <p>
                                Helping African producers compete globally with traceable, export-ready produce
                                through blockchain-powered certification.
                            </p>
                        </div>
                    </div>
                </div>

                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/mhZSTXecmQI?si=kn_8xfTdImQT83yc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>

                <div className={styles.callout}>
                    <h3>
                        Food security isn’t a dream. It’s a design — and we’ve already built the blueprint.
                    </h3>
                </div>
            </div>
        </section>
    );
}
