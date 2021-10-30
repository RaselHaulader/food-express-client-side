import React from 'react';
import './CustomerOrder.css';

const CustomerOrder = ({ order, handleCancel }) => {



    return (
        <div>
            <div className="user-order-container mb-3 mt-3 p-2">
                <div className="row  mx-auto text-center text-secondary my-2">
                    <div className="col-2 border  d-flex flex-column  justify-content-center">
                        <img width="50px" rounded className="mx-auto" src={order.img} alt="" />
                    </div>
                    <div className="col-6 px-0 mx-0 d-flex flex-column justify-content-center">
                        <p className=" fw-bolder mb-1 px-0 mx-0">{order.food}</p>
                        <p className="px-0 mx-0">Date:{order.date}  price: <span >${order.price}</span></p>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center">
                        <p className={order.status === "pending" ? 'text-danger' : "text-info"}>{order.status}</p>
                        <button onClick={() => handleCancel(order._id)}>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomerOrder;