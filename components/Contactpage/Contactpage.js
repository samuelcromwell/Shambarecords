import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <div>

            <section className="wpo-contact-page section-padding">
                <div className="container">
                    <div className="office-info">
                        <div className="row">
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-location-1"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Location</h2>
                                        <p>Mitsumi Business Park,
                                            <br />Muthithi Road, Westlands,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item active">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Phone Number</h2>
                                        <p>+254 732 693 963</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-email"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Email</h2>
                                        <p>info@shambarecords.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-wrap d-flex justify-content-center">
                        <div className="">

                            <div className="text-center">
                                <div className="title mb-4">
                                    <h2>Fill Out The Form</h2>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                </div >
            </section >

        </div >
    )


}

export default Contactpage;
