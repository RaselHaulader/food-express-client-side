import React from 'react';
import client from '../../images/client.png';
import './ClientSays.css';

const ClientSays = () => {
    return (
        <div className=" py-5 client-say-container mt-5">
            <h3 className="text-center fw-bold mt-5">What our <span className="color-text2">Clients Say</span></h3>
            <p className="header-info mb-5">Our Users Reviews</p>
            <div className="row container pt-5 mx-auto">
                <div className="col-12 col-md-6">
                    <h3 className="text-center mb-3 fw-bold text-secondary">Users Reviews</h3>
                    <div className="p-3">
                        <div className="d-flex  user-review-item p-3 my-2  align-items-center"> 
                            <div className="w-25">
                                <img className="rounded-circle review-img" width="80px" height="80px"  src="https://lh3.googleusercontent.com/proxy/yZvCMAJfgPHsmmYbaBZW0FgAMrsXMoo0QOHcAgP3Y8ZsYCNUrQ1ERm0IxpB9L4HhsgSUTCpORESkPzC9SeHWiq3MfYRUdCcyaeunMYPpEGsvV8qcodcC" alt="" />
                            </div>
                            <div className="w-75 review-message ps-2">
                                <p>They are awsome service provider i am so much happy with them. Their service is so fast and always they maintain there commitment</p>
                            </div>
                        </div>
                        <div className="d-flex  user-review-item p-3 my-2  align-items-center"> 
                            <div className="w-25">
                                <img className="rounded-circle review-img" width="80px" height="80px"  src="https://lh3.googleusercontent.com/proxy/yZvCMAJfgPHsmmYbaBZW0FgAMrsXMoo0QOHcAgP3Y8ZsYCNUrQ1ERm0IxpB9L4HhsgSUTCpORESkPzC9SeHWiq3MfYRUdCcyaeunMYPpEGsvV8qcodcC" alt="" />
                            </div>
                            <div className="w-75 review-message ps-2">
                                <p>They are awsome service provider i am so much happy with them. Their service is so fast and always they maintain there commitment</p>
                            </div>
                        </div>
                        <div className="d-flex  user-review-item p-3 my-2  align-items-center"> 
                            <div className="w-25">
                                <img className="rounded-circle review-img" width="80px" height="80px"  src="https://lh3.googleusercontent.com/proxy/yZvCMAJfgPHsmmYbaBZW0FgAMrsXMoo0QOHcAgP3Y8ZsYCNUrQ1ERm0IxpB9L4HhsgSUTCpORESkPzC9SeHWiq3MfYRUdCcyaeunMYPpEGsvV8qcodcC" alt="" />
                            </div>
                            <div className="w-75 review-message ps-2">
                                <p>They are awsome service provider i am so much happy with them. Their service is so fast and always they maintain there commitment</p>
                            </div>
                        </div>
                        

                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img className="w-100" src={client} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ClientSays;