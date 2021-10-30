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
        <div id="offers" className="offering-container mb-5">
            <h3 className="text-center mt-5 pt-5 fw-bold text-uppercase">We are <span className="color-text2">Offering</span></h3>
            <p className="header-info">Order To Test </p>
            <div className="row container px-3 mx-auto mb-5 pb-2">
                {
                    offers.map(offer=>  <OfferingItem key={offer._id} offer={offer}></OfferingItem>)
                }
              
            </div>
        </div>
    );
};

export default Offering;