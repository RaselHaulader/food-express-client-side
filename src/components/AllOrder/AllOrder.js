import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllOrderItem from '../AllOrderItem/AllOrderItem';
import Header from '../Header/Header';

const AllOrder = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allOrders')
            .then(res => setOrders(res.data))
            .catch(err => console.log(err.message))
    }, []);

    const handleDelete = id => {
        const condition = window.confirm('Are You Sure?')
        if (condition) {
            axios.delete(`http://localhost:5000/order/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const rest = orders.filter(order => order._id !== id)
                        setOrders(rest)
                    }
                    console.log(res)
                })
                .catch(err => console.log(err))
        }
    }

    const handleApproved = id => {
        console.log(id)

        axios.put(`http://localhost:5000/approve/${id}`)
            .then(res => {
                if (res.data.acknowledged) {
                    const approvedItem = orders.filter(order => order._id === id)
                    const index = orders.indexOf(approvedItem[0])
                    approvedItem[0].status = 'Approved'
                    orders[index] = approvedItem[0]
                    console.log(orders)
                    const newOrders = [...orders]
                    setOrders(newOrders)
                }
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Header variant="light"></Header>
            <h3>All orders</h3>
            {
                orders.map(order => <AllOrderItem handleApproved={handleApproved} key={order._id} handleDelete={handleDelete} order={order} ></AllOrderItem>)
            }
        </div>
    );
};

export default AllOrder;