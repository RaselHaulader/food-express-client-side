import React, { useState } from 'react';
import './AllOrderItem.css'


const AllOrderItem = ({ order, handleDelete, handleApproved }) => {

    const handleUpdateClick = id => {
        handleApproved(id)
    }
    return (
        <div className="row w-75 mx-auto my-3 all-order-container">
            <div className="col-md-3 col-12 ms-0 ps-0">
                <img className="ms-0 mx-auto allOrderImg" src={order.img} alt="" />
            </div>
            <div className="col-md-3 col-12 d-flex flex-column justify-content-center">
                <p className="fw-bold text-secondary py-0 my-1 text-warning"> Name: {order.name}</p>
                <p className="fw-bold text-secondary py-0 my-1">Food: {order.food}</p>
                <p className="fw-bold text-secondary py-0 my-1">Date: {order.date} Price: ${order.price}</p>
                <p className="fw-bold text-secondary py-0 my-1">Address: {order.address}</p>
                <p className="fw-bold text-secondary py-0 my-1">Description: {order.description}</p>
            </div>
            <div className="col-md-2 col-12 d-flex flex-column justify-content-center">
                <p className={order.status === 'pending' ? "text-danger  fw-bold" : 'text-info fw-bold'}>{order.status}</p>
            </div>
            <div className="col-md-2 col-12 d-flex flex-column justify-content-center">
                <button className="btn border btn-primary" disabled={order.status !== 'pending'} onClick={() => handleUpdateClick(order._id)}>Approve</button>
            </div>
            <div className="col-md-2 col-12 d-flex flex-column justify-content-center">
                <button className="btn border allOrder-delete-btn" onClick={() => handleDelete(order._id)}>Delete Order</button>
            </div>
        </div>
    );
};

export default AllOrderItem;