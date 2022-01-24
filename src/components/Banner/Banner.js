import React from 'react';
import rider from '../../images/rider.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="row container mx-auto text-white py-4 banner-details-container">
            <div className="col-12 col-md-5  d-flex banner-details flex-column justify-content-center">
                <div >
                    <h1 className="bold-text text-uppercase">Order Healthy <br /><span className="color-text">And Fresh Food</span> </h1>
                    <p>Online food delivery for hiring food  we appreciate your business, and we’ll do best to continue to give you the new kind.</p>
                    <button className="btn rounded-pill px-4 p-2 border ">Read More</button>
                </div>
            </div>
            <div data-aos="fade-left"  data-aos-easing="ease-linear" data-aos-once="false" data-aos-duration="1000" className="col-12 col-md-7 d-flex align-items-end">
                <img className="w-100" src={rider} alt="" />
            </div>
        </div>
    );
};

export default Banner;