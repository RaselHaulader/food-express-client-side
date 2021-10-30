import React from 'react';
import restaurant from '../../images/how-to-work2.png';
import dish from '../../images/how-to-work3.png';
import delivery from '../../images/how-to-work1.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id="about" className="about-us-container px-5 mt-5 ">
            <div className="about-card-container  pb-5 ">
                <h3 className="text-center pt-5 mt-5 fw-bold text-uppercase">How We <span className="color-text2">Work</span></h3>
                <p className="header-info">About us</p>
                <p className="about-info mb-5 w-50 mx-auto">We are committed to provide food delivery<br/> to all our register client. Our Register client choose their food from their favourite restaurant and we reached those to their door step.</p>
                <div className="row  container mx-auto text-center">
                    <div className="col-12 col-md-4 ">
                        <div className="about-item">
                            <div className=" mb-4 about-logo d-inline-block rounded-circle p-4">
                                <img src={restaurant} alt="" />
                            </div>
                            <h5 >Choose A Restaurant</h5>
                            <p className="w-75 mx-auto">Choose Your restaurant and then you can easily order your desired food from there via food express.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <div className="about-item">
                            <div className=" mb-4 about-logo d-inline-block rounded-circle p-4">
                                <img src={dish} alt="" />
                            </div>
                            <h5 >Choose A Testy Dish</h5>
                            <p className="w-75 mx-auto">Choose Your restaurant and then you can easily order your desired food from there via food express.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <div className="about-item">
                            <div className=" mb-4 about-logo d-inline-block rounded-circle p-4">
                                <img src={delivery} alt="" />
                            </div>
                            <h5 >Take Your Delivery</h5>
                            <p className="w-75 mx-auto">Choose Your restaurant and then you can easily order your desired food from there via food express.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;