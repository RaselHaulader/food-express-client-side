import React, { useEffect, useState } from 'react';
import OfferingItem from '../OfferingItem/OfferingItem';
import Spinner from 'react-bootstrap/Spinner';
import './Offering.css';

const Offering = () => {
    const [load, setLoad] = useState(true)
    const [offers, setOffers] = useState([])

    useEffect(() => {
        fetch('https://blooming-ravine-44681.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => {
                setOffers(data)
                setLoad(false)
            })
            .catch(err => console.log(err.message))
    }, [])
    return (
        <div id="offers" className="offering-container mb-5">
            <h3 className="text-center mt-5 pt-5 fw-bold text-uppercase">We are <span className="color-text2">Offering</span></h3>
            <p className="header-info">Order To Test </p>
            {load && <p className="text-center my-5 mx-auto" > <Spinner animation="border" variant="primary" /></p>}
            <div className="row container px-3 mx-auto mb-5 pb-2">
                {
                    offers.map(offer => <OfferingItem key={offer._id} offer={offer}></OfferingItem>)
                }

            </div>
        </div>
    );
};

export default Offering;