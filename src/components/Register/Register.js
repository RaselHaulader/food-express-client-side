import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import './Register.css'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit,reset , formState: { errors } } = useForm();
    const [offer, setOffer] = useState({})
    const { id } = useParams();
    const {user} = useAuth();
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/offers/${id}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setOffer(data)})
    }, [])
      



    const onSubmit = data => {
        console.log(offer.title)
        data.img = offer.img;
        data.price = offer.price;
        data.food = offer.title;
        data.status = "pending";
        console.log(data);
        fetch(`http://localhost:5000/postOrder`,{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            if (data.acknowledged) {
                alert("Thank You Your Order is placed")
                reset()
            }
            console.log(data)})
              
       
    
    }


    const curr = new Date();
    curr.setDate(curr.getDate() + 1);
    const date = curr.toISOString().substr(0, 10);
    return (
        <div>
            <Header variant="light"></Header>
            <h3 className="text-center">Register now</h3>
            <div>
                <form className="d-flex register-form w-50 text-center flex-column mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;