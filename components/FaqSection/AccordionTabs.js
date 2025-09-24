import React, { useState } from 'react';
import styles from './AccordionTabs.module.scss';

const AccordionTabs = ({ data }) => {
    const safeData = Array.isArray(data) ? data : [];

    const [activeTab, setActiveTab] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (!safeData.length) {
        return <div className={styles.noData}>No FAQ data available.</div>;
    }

    return (
        <div className={styles.accordionWrapper}>
            <div className={styles.tabHeader}>
                {safeData.map((group, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setActiveTab(idx);
                            setActiveIndex(null);
                        }}
                        className={idx === activeTab ? 'active' : ''}
                    >
                        {group.category}
                    </button>
                ))}
            </div>

            <div>
                {(safeData[activeTab]?.faqs || []).map((faq, idx) => (
                    <div key={idx} className={styles.accordionItem}>
                        <div
                            className={styles.question}
                            onClick={() => handleToggle(idx)}
                        >
                            <span>{faq.question}</span>
                            <span>{activeIndex === idx ? '-' : '+'}</span>
                        </div>

                        {activeIndex === idx && (
                            <div className={styles.answer}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccordionTabs;
