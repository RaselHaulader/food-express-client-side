import React from 'react';
import OfferingItem from '../OfferingItem/OfferingItem';

const Offering = () => {
    return (
        <div>
            <h2 className="text-center mt-5 mb-5 pt-5 fw-bold text-uppercase">We are Offering</h2>
            <div className="row container px-3 mx-auto">
                <OfferingItem></OfferingItem>
                <OfferingItem></OfferingItem>
                <OfferingItem></OfferingItem>
                <OfferingItem></OfferingItem>
                <OfferingItem></OfferingItem>
                <OfferingItem></OfferingItem>
                <OfferingItem></OfferingItem>
                <OfferingItem></OfferingItem>
            </div>
        </div>
    );
};

export default Offering;