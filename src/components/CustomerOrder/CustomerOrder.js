import axios from 'axios';
import React from 'react';

const CustomerOrder = ({ order, handleCancel }) => {

    
    
    return (
        <div>
            <div className="row w-75 mx-auto text-center py-4 my-3 bg-info">
                <div className="col-3">
                    <img className="w-75 mx-auto" src={order.img} alt="" />
                </div>
                <div className="col-5">
                    <h3>{order.food}</h3>
                    <p>{order.date} {order.price}</p>
                </div>
                <div className="col-2">
                    <p>{order.status}</p>
                </div>
                <div className="col-2">
                    <button onClick={()=>handleCancel(order._id)}>Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default CustomerOrder;