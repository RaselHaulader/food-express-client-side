import React from 'react';
import call from '../../images/call.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-glob container p-5">
                <div className="row text-white mt-4 footer-info">
                    <div className="col-12 col-md-4">
                        <h5>About us</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea exercitationem optio cupiditate magnam eius cumque voluptatum. Assumenda, vel rem!</p>
                    </div>
                    <div className="col-12 col-md-2">
                        <h5>Popular site</h5>
                        <p>site name</p>
                        <p>site name</p>
                        <p>site name</p>
                        <p>site name</p>
                    </div>
                    <div className="col-12 col-md-2">
                        <h5>Menu</h5>
                        <p>Home</p>
                        <p>Foods</p>
                        <p>Order</p>
                        <p>Client</p>
                        <p>Restaurant</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h5>Contact with us</h5>
                        
                    <div className="row w-100 mx-auto ">
                        <div className="col-6 p-0 call-img">
                            <img className="w-100" src={call} alt="" />
                        </div>
                        <div className="col-6 p-0 call-number  ps-3 d-flex justify-content-center flex-column">
                            <p className="p-0  m-0">call us for your order</p>
                            <h6 className="p-0 fw-bolder m-0">+008 98 3445 45</h6>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container mx-auto ">
                </div>
                <p className="text-center text-white mt-3">©All copy right reserved by Russel2021</p>
            </div>
        </div>
    );
};

export default Footer;