import React from 'react';
import AccordionTabs from './AccordionTabs';
import { Database, BarChart3 } from 'lucide-react';
import styles from './FaqSection.module.scss';

const FaqSection = ({ hclass = '' }) => {
    const accordionData  = [
        {
            category: "FOR FARMERS",
            faqs: [
                {
                    question: "How can I join Shamba Records and what do I need to get started?",
                    answer: "Join via local agent, cooperative, or online. Just basic farm info & a mobile phone — we’ll handle the rest."
                },
                {
                    question: "Will I get loans and support through Shamba Records even without collateral?",
                    answer: "Yes! Shamba Cash Boost turns your farm data into collateral for fair, fast microloans."
                },
                {
                    question: "How will Shamba Records help me increase yields and income?",
                    answer: "SmartSeason AI gives crop tips, forecasts & alerts — boosting yields by 30% and reducing losses by 50%."
                },
                {
                    question: "What happens if I lose crops due to drought or pests?",
                    answer: "Shamba Shield protects you with AI-powered insurance — faster payouts, no middlemen."
                },
                {
                    question: "Can Shamba Records help me sell at better prices?",
                    answer: "Yes. TraceXpert & Shamba Connect link you directly to premium buyers and export markets."
                }
            ]
        },
        {
            category: "FOR COOPERATIVES & AGGREGATORS",
            faqs: [
                {
                    question: "How can cooperatives use Shamba Records to better serve members?",
                    answer: "Digitize farmer records, manage payments, track production & scale with one platform."
                },
                {
                    question: "Can we process value addition and aggregation?",
                    answer: "Absolutely. Record every step — from aggregation to packaging — for full traceability."
                },
                {
                    question: "How does Shamba Records simplify cooperative operations?",
                    answer: "We automate onboarding, communication, loan tracking, and group performance monitoring."
                }
            ]
        },
        {
            category: "FOR EXPORTERS & MARKET ACCESS",
            faqs: [
                {
                    question: "How does Shamba Records ensure traceability and compliance for exports?",
                    answer: "TraceXpert uses blockchain to meet global standards like EU Organic, Global GAP, and more."
                },
                {
                    question: "Can exporters trust the quality and authenticity?",
                    answer: "Yes — all data is verified, timestamped, and immutable."
                },
                {
                    question: "Does Shamba Records help with logistics?",
                    answer: "Yes. Shamba Connect tracks movement and streamlines logistics and post-harvest management."
                }
            ]
        },
        {
            category: "FOR INVESTORS & CLIMATE PARTNERS",
            faqs: [
                {
                    question: "How does Shamba Records drive climate resilience and carbon impact?",
                    answer: "CarbonGrow promotes regenerative farming and carbon credit earning for farmers."
                },
                {
                    question: "What’s the ROI for investors?",
                    answer: "40,000+ farmers impacted. 30% yield boosts. 50% lower losses. Real-time impact data."
                },
                {
                    question: "How does Shamba Records de-risk agri-finance for banks?",
                    answer: "With data-backed scoring, farm digitization & smart insurance to reduce lending risks."
                }
            ]
        }
    ];
    return (
        <section className={`${styles.faqSection} ${hclass}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <div className={styles.sectionTitle}>
                            <h2>Frequently Asked Questions</h2>
                            <h3>Your Guide to Shamba Records</h3>
                            <p>
                                Whether you're a farmer, aggregator, cooperative, or government agency — we’re
                                here to help you make the most of our agri-tech platform. Here are some common
                                questions we get.
                            </p>
                        </div>
                        
                    </div>
                    <div className={styles.right}>
                        <AccordionTabs data={accordionData } />
                    </div>
                </div>
            </div>
        </section>
    );
};

// const accordionData = [accordionData ];

export default FaqSection;
