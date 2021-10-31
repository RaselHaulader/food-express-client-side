import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import CustomerOrder from '../CustomerOrder/CustomerOrder';
import './CustomerOrders.css'
import orderSvg from '../../images/userOrder.svg';
import Spinner from 'react-bootstrap/Spinner';
import Footer from '../Footer/Footer';
import swal from 'sweetalert';


const CustomerOrders = () => {
    const [load, setLoad] = useState(true)
    const [orders, setOrders] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.put(`https://blooming-ravine-44681.herokuapp.com/userOrder/${user.email}`)
            .then(result => {
                setLoad(false)
                setOrders(result.data)
            })
            .catch(err => console.log(err.message))

    }, [])


    const handleCancel = (id) => {
        // sweat alert confirmation
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // delete user order item by user cancel click
                    axios.delete(`https://blooming-ravine-44681.herokuapp.com/order/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                const rest = orders.filter(order => order._id !== id)
                                setOrders(rest)
                            }
                            console.log(res)
                        })
                        .catch(err => console.log(err))
                   
                        swal("Your order has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your order is safe!");
                }
            });
    }
    return (
        <div  className="dark-body">
            <div className="glob-body">
                <Header variant="light"></Header>
                <h3 className="text-center mb-4 mt-3 text-uppercase fw-bold">My <span className="color-text">orders</span></h3>
                <div className="w-100 px-0 mx-0 row">
                    <div data-aos="fade-right" className="col-12 col-md-5 px-5">
                        <div className=" text-white  text-center pt-5 userOrders-info-container pb-4">
                            <img className="w-100" src={orderSvg} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-7 ">
                        <div className="userOrders-container pb-4 px-2">
                            {load && <div className="text-center my-5 mx-auto" > <Spinner animation="border" variant="primary" /></div>}

                            {
                                orders.map(order => <CustomerOrder handleCancel={handleCancel} order={order} key={order._id}></CustomerOrder>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CustomerOrders;