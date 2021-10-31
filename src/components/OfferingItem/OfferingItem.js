import React from 'react';
import { NavLink } from 'react-router-dom';
import './OfferingItem.css'

const OfferingItem = ({ offer }) => {
    return (
        <div className="col-12 col-md-4 mt-4 text-center p-2">
            <div className="offering-item h-100 p-3">
                <div className="mb-4 ">
                    <img className="w-50 mx-auto offering-img" src={offer.img} alt="" />
                </div>
                <div className="offer-item-details">
                    <p className="pb-0 mb-0"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                    <h6>{offer.title}</h6>
                    <small className="">{offer.info}</small>
                    <h5>${offer.price}</h5>
                    <NavLink to={`/order/${offer._id}`} className="btn order-btn border rounded-pill px-5 py-2">Order Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default OfferingItem;