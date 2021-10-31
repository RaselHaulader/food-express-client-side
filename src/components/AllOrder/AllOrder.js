import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllOrderItem from '../AllOrderItem/AllOrderItem';
import Header from '../Header/Header';
import './AllOrder.css';
import Spinner from 'react-bootstrap/Spinner';
import Footer from '../Footer/Footer';
import swal from 'sweetalert';



const AllOrder = () => {
    const [orders, setOrders] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        axios.get('https://blooming-ravine-44681.herokuapp.com/allOrders')
            .then(res => {
                setOrders(res.data)
                setLoad(false)
            })
            .catch(err => console.log(err.message))
    }, []);

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://blooming-ravine-44681.herokuapp.com/order/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                const rest = orders.filter(order => order._id !== id)
                                setOrders(rest)
                            }
                            console.log(res)
                        })
                        .catch(err => console.log(err))

                    swal("Order has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your Order is safe!");
                }
            });
    }

    const handleApproved = id => {
        console.log(orders)

        axios.put(`https://blooming-ravine-44681.herokuapp.com/approve/${id}`)
            .then(res => {
                if (res.data.acknowledged) {
                    const approvedItem = orders.filter(order => order._id === id)
                    const index = orders.indexOf(approvedItem[0])
                    approvedItem[0].status = 'Approved'
                    orders[index] = approvedItem[0]
                    console.log(orders)
                    const newOrders = [...orders]
                    setOrders(newOrders)
                    swal("Good job!", "This Item has been Approved!", "success");
                }
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="all-order-container1 mb-5 pb-5">
                <Header variant="light"></Header>
                <h3 className="text-center text-uppercase fw-bold my-5">Manage All <span className="color-text">orders</span></h3>
                {load && <p className="text-center my-5 mx-auto" > <Spinner animation="border" variant="primary" /></p>}

                {
                    orders.map(order => <AllOrderItem handleApproved={handleApproved} key={order._id} handleDelete={handleDelete} order={order} ></AllOrderItem>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllOrder;