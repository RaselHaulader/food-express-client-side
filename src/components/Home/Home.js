import React from 'react';
import Banner from '../Banner/Banner';
import BannerCard from '../BannerCard/BannerCard';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="banner-container pb-5">
                <Header></Header>
                <Banner></Banner>
                <div className="container mx-auto">
                <BannerCard></BannerCard>
                </div>
            </div>
        </div>
    );
};

export default Home;