import React from 'react';
import CountUp from 'react-countup';

const FunFact = (props) => {

    return (
        <section className={"" + props.hclass} style={{ backgroundColor:'#035D13'}}>
            <div className="container">
                <div className="titel-image">
                    <h1>impact & Global Reach</h1>
                   
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item" style={{color:'white'}}>
                            <h2 ><CountUp end={30} enableScrollSpy />%</h2>
                            <h3>average yield increase</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item" style={{color:'white'}}>
                            <h2><CountUp end={50} enableScrollSpy />%</h2>
                            <h3>reduction in post-harvest losses</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item" style={{color:'white'}}>
                            <h2><CountUp end={100} enableScrollSpy />%</h2>
                            <h3>Improved access to finance and premium markets</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item" style={{color:'white'}}>
                            <h2><CountUp end={50000} enableScrollSpy />+</h2>
                            <h3>Happy Farmers</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default FunFact;




