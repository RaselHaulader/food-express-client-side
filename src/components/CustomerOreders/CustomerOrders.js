import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import CustomerOrder from '../CustomerOrder/CustomerOrder';

const CustomerOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        axios.put(`http://localhost:5000/userOrder/${user.email}`)
            .then(result => setOrders(result.data))
            .catch(err => console.log(err.message))

    }, [])


    const handleCancel = (id) => {
        const condition = window.confirm('Are You Sure?')
        if (condition) {
            axios.delete(`http://localhost:5000/order/${id}`)
                .then(res =>{
                    if (res.data.deletedCount>0) {
                        const rest = orders.filter(order=> order._id !== id)
                        setOrders(rest)
                    }
                    console.log(res)})
                .catch(err => console.log(err))
        }
    }
    return (
        <div>
            <Header variant="light"></Header>
            <h3 className="text-center my-5">My orders</h3>
            <div>
                {
                    orders.map(order => <CustomerOrder handleCancel={handleCancel} order={order} key={order._id}></CustomerOrder>)
                }
            </div>
        </div>
    );
};

export default CustomerOrders;