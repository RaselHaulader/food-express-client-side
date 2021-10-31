import React from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddOffer.css';
import addOrderSvg from '../../images/addOrder2.svg'
import Footer from '../Footer/Footer';
import swal from 'sweetalert';

const AddOffer = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post("https://blooming-ravine-44681.herokuapp.com/addOffer", data)
            .then(res => {
                if (res.data.acknowledged == true) {
                    swal("Good job!", "This Item has been added!", "success");
                    reset();
                }
                console.log(res)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div >
            <Header variant={'light'}></Header>
            <div className="d-flex justify-content-center pb-5 mb-5">
                <div className="add-offer-container py-5 mb-5">
                    <h3 className=" my-2 text-center text-uppercase text-secondary fw-bold ">Add<span className="color-text"> Items</span></h3>
                    <hr className="w-25 mx-auto mb-5" />
                    <div className="row w-100 px-0 mx-0">
                        <div className=" mx-auto col-12 col-md-6">
                            <img className="w-100 mx-auto" src={addOrderSvg} alt="" />
                        </div>
                        <form className="d-flex py-3 col-12 col-md-6 text-center addOffer flex-column" onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder="Title" {...register("title", { required: true })} />
                            {errors.title && <span>This field is required</span>} <br />

                            <input placeholder="Price" {...register("price", { required: true })} />
                            {errors.price && <span>This field is required</span>} <br />

                            <textarea maxLength="90" placeholder="Description ( maxlength 90 characters )" {...register("info", { required: true })} />
                            {errors.info && <span>This field is required</span>} <br />

                            <input placeholder="Image Url" {...register("img", { required: true })} />
                            {errors.img && <span>This field is required</span>} <br />

                            <input className="add-btn" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddOffer;