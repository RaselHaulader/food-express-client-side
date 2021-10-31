import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found text-center">
            <Link to="/" ><button className='btn btn-warning mt-5'>Home</button></Link>
        </div>
    );
};

export default NotFound;