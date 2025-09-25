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
import Image from 'next/image';

/** Cloudinary URLs (base). We'll add transforms in the loader. */
const CLD_PREDICT    = 'https://res.cloudinary.com/dwoxop5y0/image/upload/v1758816001/predict_ehsoai.avif';
const CLD_FINANCE    = 'https://res.cloudinary.com/dwoxop5y0/image/upload/v1758816001/finance_bummgg.avif';
const CLD_CARBON     = 'https://res.cloudinary.com/dwoxop5y0/image/upload/v1758816001/carbon_lj8s5n.avif';
const CLD_INSURANCE  = 'https://res.cloudinary.com/dwoxop5y0/image/upload/v1758816001/insuarance_boyxim.avif';
const CLD_JOURNEY    = 'https://res.cloudinary.com/dwoxop5y0/image/upload/v1758816002/journey_o9c9ir.avif';
// Provided but not currently used on this page:
// const CLD_SCRIPT  = 'https://res.cloudinary.com/dwoxop5y0/image/upload/v1758816001/script_vrhch0.avif';

/** Cloudinary loader for <Image /> */
const cldLoader = ({ src, width, quality }) => {
  const q = typeof quality === 'number' ? quality : 75;
  // Keep everything after /upload/ so we can prepend our delivery params.
  let publicPart = src;
  const m = src.match(/\/upload\/(.+)$/);
  if (m) publicPart = m[1];
  return `https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_${q},dpr_auto,c_fill,g_auto,w_${width}/${publicPart}`;
};

// Responsive size hints for different blocks
const WIDE_SIZES = '(min-width:1280px) 600px, (min-width:768px) 50vw, 100vw';
const HALF_SIZES = '(min-width:1280px) 50vw, 100vw';

export default function Derisking() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Small helper to render a responsive Cloudinary image with fill
  const CldFillImage = ({ src, alt, sizes, priority = false }) => (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 aspect to keep layout stable
        overflow: 'hidden',
        borderRadius: '10px',
      }}
    >
      <Image
        loader={cldLoader}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.image}
      />
    </div>
  );

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
            <CldFillImage src={CLD_PREDICT} alt="AI forecasting" sizes={HALF_SIZES} />
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
            <CldFillImage src={CLD_FINANCE} alt="Smart agriculture finance" sizes={HALF_SIZES} />
          </div>

          {/* Section 4 - Carbon */}
          <div className={styles.section}>
            <CldFillImage src={CLD_CARBON} alt="Carbon farming" sizes={HALF_SIZES} />
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
            <CldFillImage src={CLD_INSURANCE} alt="Insurance" sizes={HALF_SIZES} />
          </div>

          {/* Farmer Journey */}
          <div className={styles.section}>
            <CldFillImage src={CLD_JOURNEY} alt="Farmer story" sizes={HALF_SIZES} />
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
