import React from 'react';

const MapSection = () => {
    return (
        <section className="wpo-map-section">
            <h2 className="hidden">Contact map</h2>
            <div className="wpo-map">
                <iframe title='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4908.140997057765!2d36.80866767582746!3d-1.2698893356101872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0122288b%3A0x65eb1dbcc5a3b689!2sMitsumi%20Business%20Park!5e1!3m2!1sen!2ske!4v1747298616221!5m2!1sen!2ske"
                    ></iframe>
            </div>
        </section>
    );
};

export default MapSection;
