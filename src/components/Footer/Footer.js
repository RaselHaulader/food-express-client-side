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
                        <p>We are committed to provide food delivery to all our register client. Our Register client choose their food from their favourite restaurant and we reached those to their door step.</p>
                    </div>
                    <div className="col-12 col-md-2">
                        <h5>Restaurant</h5>
                        <p>Burger House</p>
                        <p>Pizza hut</p>
                        <p>Fresh Meat </p>
                        <p>Hot Restora</p>
                    </div>
                    <div className="col-12 col-md-2">
                        <h5>Menu</h5>
                        <p>Home</p>
                        <p>About</p>
                        <p>My Orders</p>
                        <p>Clients</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h5 className="mb-4">Contact with us</h5>
                    <div className="row w-100 mx-auto ">
                        <div className="col-6 p-0 call-img">
                            <img className="w-100 h-100" src={call} alt="" />
                        </div>
                        <div className="col-6 p-0 call-number  ps-3 d-flex justify-content-center flex-column">
                            <p className="p-0  m-0">call us.. </p>
                            <h6 className="p-0 fw-bolder m-0">+008 98 3445 54</h6>
                        </div>
                    </div>
                    <p className="my-2 fw-bold">Email: contact@info.com</p>
                    <h3 className="my-2 fw-bold"><i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i> <i class="fab fa-whatsapp"></i> <i class="fab fa-twitter"></i></h3>
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