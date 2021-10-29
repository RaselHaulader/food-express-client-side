import React, { useState } from 'react';

const AllOrderItem = ({ order, handleDelete ,handleApproved}) => {
    const [status, setStatus] = useState(false);

    const handleUpdateClick =id=>{
        handleApproved(id)
        setStatus(true)
    }
    return (
        <div>
            <div>
                <div className="row w-75 mx-auto text-center py-4 my-3 bg-info">
                    <div className="col-3">
                        <img className="w-75 mx-auto" src={order.img} alt="" />
                    </div>
                    <div className="col-3">
                        <h5>{order.name}</h5>
                        <h5>{order.food}</h5>
                        <p>{order.date} {order.price}</p>
                        <p><small>{order.address}</small></p>
                    </div>
                    <div className="col-2">
                        <p>{order.status}</p>
                    </div>
                    <div className="col-2">
                        <button disabled={order.status!=='pending'} onClick={() => handleUpdateClick(order._id)}>Approve</button>
                    </div>
                    <div className="col-2">
                        <button onClick={() => handleDelete(order._id)}>Delete Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrderItem;