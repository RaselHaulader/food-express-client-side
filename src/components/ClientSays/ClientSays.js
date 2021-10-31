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
                        <div className="d-flex row user-review-item p-3 my-2  align-items-center"> 
                            <div className="col-md-3 text-center pe-3 col-12">
                                <img className="rounded-circle review-img" width="80px" height="80px"  src="https://i.ibb.co/G7KRrBZ/customer-eating-hotdog-fast-food-snack-bar-young-delicious-sausages-32787802.jpg" alt="" />
                            </div>
                            <div className="col-md-9 col-12 review-message ps-2">
                                <p>They are awsome service provider i am so much happy with them. Their service is so fast and always they maintain there commitment</p>
                            </div>
                        </div>
                        <div className="d-flex row user-review-item p-3 my-2  align-items-center"> 
                            <div className="col-md-3 text-center pe-3 col-12">
                                <img className="rounded-circle review-img" width="80px" height="80px"  src="https://i.ibb.co/JjdbdLG/download-5.jpg" alt="" />
                            </div>
                            <div className="col-md-9 col-12 review-message">
                                <p>They are awsome service provider i am so much happy with them. Their service is so fast and always they maintain there commitment</p>
                            </div>
                        </div>
                        <div className="d-flex row user-review-item p-3 my-2  align-items-center"> 
                            <div className="col-md-3 text-center pe-3 col-12  ">
                                <img className="rounded-circle review-img" width="80px" height="80px"  src="https://i.ibb.co/hW6Tr2m/images-6.jpg " alt="" />
                            </div>
                            <div className="col-md-9 col-12 review-message ps-2">
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



/* 
https://i.ibb.co/G7KRrBZ/customer-eating-hotdog-fast-food-snack-bar-young-delicious-sausages-32787802.jpg
https://i.ibb.co/JjdbdLG/download-5.jpg
https://i.ibb.co/hW6Tr2m/images-6.jpg

*/