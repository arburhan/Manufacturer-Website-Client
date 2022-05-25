import React from 'react';
import Loading from '../Shared/Loading/Loading';
import AllCategory from './AllCategory';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <AllCategory></AllCategory>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;