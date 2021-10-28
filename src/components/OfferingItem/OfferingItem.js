import React from 'react';
import './OfferingItem.css'

const OfferingItem = () => {
    return (
        <div className="col-12 col-md-3 mt-4 text-center p-2">
            <div className="mb-4 ">
                <img className="w-75 mx-auto offering-img" src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/item_04-480x480.jpg" alt="" />
            </div>
            <div className="offer-item-details">
                <p className="pb-0 mb-0"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                <h6>Cheeseburger with Salad</h6>
                <small className="">ed ut peanantium, totam rem aperiam, eaque ipsa quae ab illo i</small>
                <h5>$120</h5>
                <button className="btn border rounded-pill px-5 py-2">Order Now</button>
            </div>
        </div>
    );
};

export default OfferingItem;