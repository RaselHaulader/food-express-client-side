import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import './Register.css'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';
import Footer from '../Footer/Footer';


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [offer, setOffer] = useState({})
    const [load, setLoad] = useState(true)
    const { id } = useParams();
    const { user } = useAuth();
    console.log(id)
    useEffect(() => {
        fetch(`https://blooming-ravine-44681.herokuapp.com/offers/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOffer(data)
                setLoad(false)

            })
    }, [])

    const onSubmit = data => {
        console.log(offer.title)
        data.img = offer.img;
        data.price = offer.price;
        data.food = offer.title;
        data.status = "pending";
        console.log(data);
        fetch(`https://blooming-ravine-44681.herokuapp.com/postOrder`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Thank You Your Order is placed")
                    reset()
                }
                console.log(data)
            })
    }

    const curr = new Date();
    curr.setDate(curr.getDate() + 1);
    const date = curr.toISOString().substr(0, 10);
    return (
        <div>
            <div className="dark-body">
                <div className="glob-body">
                    <Header variant="light"></Header>
                    <h3 className="text-center fw-bold mt-4">PLACE YOUR <span className="color-text"> ORDER</span></h3>
                    <div className=" mx-auto pb-5 row mt-5 register-container">
                        <div className="col-12 d-flex flex-column pt-3 align-items-center justify-content-around  col-md-5 register-details text-white text-center">
                            {load && <p className="text-center my-5 mx-auto" > <Spinner animation="border" variant="primary" /></p>}

                            <img className="w-50 rounded-circle" src={offer.img} alt="" />
                            <h3 className="fw-bold">{offer.title}</h3>
                            <p className="w-50">{offer.info}</p>
                            <h5>Price: $ {offer.price}</h5>
                        </div>
                        <form className="col-12 col-md-7 pt-4 register-form d-flex h-100 text-center flex-column mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={offer.title} readOnly {...register("food")} />  <br />

                            <input defaultValue={user.displayName} {...register("name")} /> <br />

                            <input defaultValue={user.email} readOnly {...register("email", { required: true })} /> <br />

                            <input type="tel" placeholder="Phone Number" {...register("phone", { required: true })} />
                            {errors.phone && <span>This field is required</span>} <br />

                            <textarea placeholder="Address" {...register("address", { required: true })} />
                            {errors.address && <span>This field is required</span>} <br />

                            <input defaultValue={date} type="date" {...register("date", { required: true })} />
                            {errors.date && <span>This field is required</span>} <br />

                            <textarea placeholder="description" {...register("description", { required: true })} />
                            {errors.description && <span>This field is required</span>} <br />
                            <input className="placeOrder-btn" type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;