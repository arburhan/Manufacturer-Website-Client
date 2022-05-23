import React from 'react';
import Loading from '../Shared/Loading/Loading';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>

        </div>
    );
};

export default Home;