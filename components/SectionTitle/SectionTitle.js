import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="wpo-section-title">
            <h2 style={{color:'black'}}>{subtitle}</h2>
            <h3>{title}</h3>
        </div>
    );
};

export default SectionTitle;