import React from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddOffer.css';

const AddOffer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
 
    const onSubmit = data => {
        console.log(data);
        axios.post("http://localhost:5000/addOffer", data)
        .then(res=> console.log(res))
        .catch(err=> console.log(err.message))
       }
     
    return (
        <div>
            <Header variant={'light'}></Header>
            <h3 className="text-center">Add offer</h3>

            <form className="d-flex text-center addOffer flex-column w-50 mx-auto"  onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Title" {...register("title", { required: true })} />
                {errors.title && <span>This field is required</span>} <br />
                
                <input placeholder="Price" {...register("price", { required: true })} />
                {errors.price && <span>This field is required</span>} <br />
                
                <textarea maxLength="90" placeholder="Description ( maxlength 90 characters )" {...register("info", { required: true })} />
                {errors.info && <span>This field is required</span>} <br />
                
                <input placeholder="Image Url" {...register("img", { required: true })} />
                {errors.img && <span>This field is required</span>} <br />

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddOffer;