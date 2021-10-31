import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';
import googleLogo from '../../images/google-logo.png';
import './LogIn.css';

const LogIn = () => {
    const { googlSignIn, setUser } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/'
    const handleGoogleSignIn = () => {
        googlSignIn()
            .then(res => {
                setUser(res.user)
                history.push(redirect_uri)
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className="text-center">
            <Header variant="light"></Header>
            <div>
                <div onClick={handleGoogleSignIn} className="google-signIn  rounded-pill my-5 d-flex">
                    <div className="w-25">
                        <img className="w-100" src={googleLogo} alt="" />
                    </div>
                    <div className="w-75  google-signIn2 justify-content-center  d-flex align-items-center">
                        <h5>Sign In with Google</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;

/*
https://i.ibb.co/1zdTrCm/pizza-drinks.png
https://i.ibb.co/tKwM3VV/burger-drinks.png
https://i.ibb.co/dB2wGxm/chicken.jpg
https://i.ibb.co/fDvJQdP/meat-03-480x480.jpg
https://i.ibb.co/zrXkgR0/pizza-05-480x480.jpg
https://i.ibb.co/m4kpszw/sushi-06-480x480.jpg

*/

/* const data = [

    {
        img: 'https://i.ibb.co/1zdTrCm/pizza-drinks.png',
        title: 'Pizza And Drinks Combo',
        info: 'Get Pizza and drinks together. Grub it and enjoy a yammi meal',
        price:'$7'
    },
    {
        img: 'https://i.ibb.co/zrXkgR0/pizza-05-480x480.jpg',
        title: 'Pizza With Mushrooms',
        info: 'feel a organic flavour with pizza. Its made with fresh mushrooms',
        price:'$7.3'
    },
    {
        img: 'https://i.ibb.co/tKwM3VV/burger-drinks.png',
        title: 'Burger With Drinks Combo',
        info: 'Burger drinks and also with have crunchy french fry. Feel the flavour',
        price:'$6.9'
    },
    {
        img: 'https://i.ibb.co/dB2wGxm/chicken.jpg',
        title: 'Raw Chicken With Herbs',
        info: 'Totally fresh and clean raw chicken meat with herbs. order and enjoy it',
        price:'$11.9'
    },
    {
        img: 'https://i.ibb.co/fDvJQdP/meat-03-480x480.jpg',
        title: 'Chicken Fillet with Salad',
        info: 'Chicken fillet and salad package its make life more easier by cooking immediately',
        price:'$10.2'
    },
    {
        img: 'https://i.ibb.co/m4kpszw/sushi-06-480x480.jpg',
        title: 'Traditional Sushi',
        info: 'Take a test of Japani food from your home just order and feel the test.',
        price:''
    },
] */