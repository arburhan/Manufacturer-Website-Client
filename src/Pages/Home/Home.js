import React from 'react';
import Loading from '../Shared/Loading/Loading';
import AboutUs from './AboutUs';
import AllCategory from './AllCategory';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <AboutUs></AboutUs>
            <BusinessSummery></BusinessSummery>
            <AllCategory></AllCategory>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;