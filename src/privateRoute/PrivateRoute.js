import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children, ...rest}) => {
    const {user, loading} = useAuth()
    // check user logged in or not
    if (loading) {
      return  <p className="text-center my-5 mx-auto" > <Spinner animation="border" variant="primary" /></p>
    }
    return (
        <Route {...rest} render={({location})=>
        user?.displayName ? children : <Redirect to={{pathname: '/login', state : {from: location}}} />
        }>
        </Route>
    );
};

export default PrivateRoute;