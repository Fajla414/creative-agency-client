import React from 'react';
import Header from '../Header/Header';
import Client from '../Client/Client';
import Service from '../Service/Service';
import SlideImage from '../SlideImage/SlideImage';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Client />
            <Service />
            <SlideImage />
            <ClientFeedback />
            <Footer />
        </div>
    );
};

export default Home;