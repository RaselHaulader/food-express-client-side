import React from 'react';
import './BannerCard.css';

const BannerCard = () => {
    return (
        <div className="container mx-auto row banner-card-container">
            <div className="col-6 col-md-3   py-4 px-2 d-flex align-items-center">
                <div className="banner-card p-3 d-flex align-items-center w-100 p-2">
                <i class="fas fa-hamburger"></i><span>Burger</span>
                </div>

            </div>
            <div className="col-6 col-md-3   py-4 px-2 d-flex align-items-center">
                 <div className="banner-card p-3 d-flex align-items-center w-100 p-2">
                <i class="fas fa-pizza-slice"></i> <span>Pizza</span>
                </div>

            </div>
            <div className="col-6 col-md-3   py-4 px-2 d-flex align-items-center">
                 <div className="banner-card p-3 d-flex align-items-center w-100 p-2">
                <i class="fas fa-drumstick-bite"></i><span>Chicken</span>
                </div>

            </div>
            <div className="col-6 col-md-3  py-4 px-2 d-flex align-items-center">
                 <div className="banner-card p-3 d-flex align-items-center w-100 p-2">
                <i class="fas fa-carrot"></i>  <span>Vegetable</span>
                </div>

            </div>
        </div>
    );
};

export default BannerCard;