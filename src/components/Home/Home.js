import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BannerCard from '../BannerCard/BannerCard';
import ClientSays from '../ClientSays/ClientSays';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Offering from '../Offering/Offering';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="banner-container pb-5">
                <Header variant="dark"></Header>
                <Banner></Banner>
                <div className="container mx-auto">
                    <BannerCard></BannerCard>
                </div>
            </div>
            <Offering></Offering>
            <AboutUs></AboutUs>
            <ClientSays></ClientSays>
            <Footer></Footer>
        </div>
    );
};

export default Home;