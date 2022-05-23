import React from 'react';
import Loading from '../Shared/Loading/Loading';
import Banner from './Banner/Banner';
import BusinessSummeryCounter from './BusinessSummeryCounter';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummeryCounter></BusinessSummeryCounter>

        </div>
    );
};

export default Home;