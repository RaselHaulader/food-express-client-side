import React from 'react';
import client from '../../images/client.png';
import './ClientSays.css';

const ClientSays = () => {
    return (
        <div className=" py-5 client-say-container">
            <h3 className="text-center fw-bold my-5">What our Clients Say</h3>
            <div className="row container mx-auto">
                <div className="col-12 col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora reiciendis voluptatum saepe aut laboriosam voluptatem ducimus maiores commodi distinctio!</p>

                </div>
                <div className="col-12 col-md-6">
                    <img className="w-100" src={client} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ClientSays;