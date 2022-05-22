import React from 'react';
import powerBanner from './power-banner.jpg';

const Banner = () => {
    return (
        <div
            style={{
                background: `url(${powerBanner})`,
                backgroundSize: 'cover',
                height: '90vh',
                width: '100%',
            }}
        >


        </div>
    );
};

export default Banner;