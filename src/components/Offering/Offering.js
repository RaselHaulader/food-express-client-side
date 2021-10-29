import React, { useEffect, useState } from 'react';
import OfferingItem from '../OfferingItem/OfferingItem';
import './Offering.css';

const Offering = () => {
    const [offers, setOffers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/offers')
        .then(res=> res.json())
        .then(data=> setOffers(data))
        .catch(err=> console.log(err.message))
    },[])
    return (
        <div id="offers" className="offering-container">
            <h3 className="text-center mt-5 mb-5 pt-5 fw-bold text-uppercase">We are Offering</h3>
            <div className="row container px-3 mx-auto">
                {
                    offers.map(offer=>  <OfferingItem key={offer._id} offer={offer}></OfferingItem>)
                }
              
            </div>
        </div>
    );
};

export default Offering;