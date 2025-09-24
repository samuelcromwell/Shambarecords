import React, { Fragment, useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PartnersSection from '../../components/PartnersSection/PartnersSection.js';
import CtaSection from '../../components/CtaSection/CtaSection.js';
import MapSection from '../../components/MapSection/MapSection.js';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import Logo from '/public/Logo/shamba.svg';
import PageTitle from '../../components/pagetitle/PageTitle.js';
import styles from './Derisking.module.scss';


export default function Derisking() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Shamba Records'} pagesub={'De-Risking the Farmer'} />

         


            <div className={styles.page}>
                <div className={styles.container}>
                    {/* Section 1 */}
                    <div className={styles.section}>
                        <div className={styles.textCol}>
                            <h1 className={styles.title}>Building Resilience in an Era of Uncertainty</h1>
                            <h2 className={styles.subtitle}>From Vulnerable to Unstoppable: The Journey of the African Farmer</h2>
                            <p>
                                Africa’s smallholder farmers face the harshest climate impacts — not because they caused it, but because they’ve been left to fight it alone.
                                Drought. Floods. Rising input costs. Market volatility. No safety net.
                            </p>
                            <div className={styles.box}>
                                <p>📉 <strong>Result?</strong></p>
                                <ul>
                                    <li>60%+ of farmers lack insurance or access to credit</li>
                                    <li>Only 2% are banked</li>
                                    <li>30–40% of harvests are lost post-production</li>
                                </ul>
                            </div>
                            <p><strong>Shamba Records is here to flip the script.</strong></p>
                        </div>
                        
                            <iframe
                                className="video"
                                src="https://www.youtube.com/embed/jJTwCeVTfcw?si=NUy8fgKlNqLXR1zW"
                                title="YouTube video player"
                                width="100%"
                                height="500"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                      
                    </div>

                    {/* Section 2 - Predict */}
                    <div className={styles.section}>
                        <img className={styles.image} src="/images/derisk/predict.png" alt="AI forecasting" />
                        <div className={styles.textCol}>
                            <h3>🌡️ Predict. Prevent. Prepare.</h3>
                            <p>We use AI and satellite data to forecast climate risks and deploy early warning systems.</p>
                            <ul className={styles.box}>
                                <li>✅ 85% accuracy on rainfall forecasts</li>
                                <li>✅ Alerts sent to 20+ counties in real-time</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 3 - Finance */}
                    <div className={styles.section}>
                        <div className={styles.textCol}>
                            <h3>💸 De-risk Through Smart Finance</h3>
                            <p>Intelligent credit scoring opens microloans for even unbanked farmers using verified data.</p>
                            <ul className={styles.box}>
                                <li>🚜 $1.1M+ credit unlocked with less than 2% default</li>
                                <li>📊 Zero-paper, 100% digital</li>
                            </ul>
                        </div>
                        <img className={styles.image} src="/images/derisk/finance.png" alt="Smart agriculture finance" />
                    </div>

                    {/* Section 4 - Carbon */}
                    <div className={styles.section}>
                        <img className={styles.image} src="/images/derisk/carbon.png" alt="Carbon farming" />
                        <div className={styles.textCol}>
                            <h3>🌳 Carbon Income via CarbonGrow</h3>
                            <p>Farmers earn by adopting regenerative agriculture practices.</p>
                            <ul className={styles.box}>
                                <li>🌾 1,500+ acres under regen farming</li>
                                <li>💰 Carbon credits = new income stream</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 5 - Insurance */}
                    <div className={styles.section}>
                        <div className={styles.textCol}>
                            <h3>🧠 AI-Powered Insurance (Shamba Shield)</h3>
                            <p>We eliminate guesswork and paperwork — payouts are faster, smarter, data-backed.</p>
                            <ul className={styles.box}>
                                <li>⚡ 5-day claim approval</li>
                                <li>🛡️ Covers crops, livestock, tools, and health</li>
                                <li>📈 40% more farms insured</li>
                            </ul>
                        </div>
                        <img className={styles.image} src="/images/derisk/insuarance.png" alt="Insurance" />
                    </div>

                    {/* Farmer Journey */}
                    <div className={styles.section}>
                        <img className={styles.image} src="/images/testimonial/5.jpg" alt="Farmer story" />
                        <div className={styles.textCol}>
                            <h3>👣 A Farmer’s Journey</h3>
                            <p><strong>Before:</strong> Mary in Kiambu relied on rain-fed farming. One drought = disaster.</p>
                            <p><strong>After:</strong></p>
                            <ul className={styles.box}>
                                <li>🌤️ Receives forecasts & alerts</li>
                                <li>🌽 35% yield increase in 2 years</li>
                                <li>💳 Accessed first loan with Shamba Cash Boost</li>
                                <li>🌱 Earns via Carbon credits</li>
                                <li>🌍 Exporting certified maize</li>
                            </ul>
                        </div>
                    </div>

                    {/* ROI + Call to Action side-by-side */}
                    <div className={styles.gridRow}>
                        <div className={styles.gridCol}>
                            <h3>📈 The ROI of Resilience</h3>
                            <ul className={styles.box}>
                                <li>🌍 40,000+ farmers supported</li>
                                <li>🔄 50% drop in post-harvest losses</li>
                                <li>💸 3x boost in financial inclusion</li>
                                <li>🌾 5+ climate tools in the stack</li>
                                <li>📣 2.7x higher chance to scale production</li>
                            </ul>
                        </div>
                        <div className={styles.gridCol}>
                            <h3>🤝 A Call to Investors, Governments & Partners</h3>
                            <p>Climate risk is a food security crisis. But it’s solvable — if we invest at the last mile.</p>
                            <p><strong>Shamba Records is your trusted partner in climate-proofing African agriculture.</strong></p>
                            <ul className={styles.box}>
                                <li>🔗 Partner with us</li>
                                <li>🌾 Invest in a resilient farming future</li>
                                <li>🌍 Help safeguard farmers feeding the world</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            <CtaSection hclass={'wpo-cta-section'} />
            <MapSection />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    );
}
