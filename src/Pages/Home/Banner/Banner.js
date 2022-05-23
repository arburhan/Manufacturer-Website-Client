import React from 'react';
import powerBanner from '../power-banner.jpg';
import './Banner.css';

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
            <div className='flex items-center justify-center h-full px-3' >
                <div className='banner-text text-center'>
                    <h2 className='text-3xl md:text-5xl text-[#db011c]' >Tools That Your Need</h2>
                    <p className='py-4 text-black' >Distributing high end tools to help create your ideal vision for a project, home, or application. We are your partners, confidants and most importantly your guidance to help you complete projects that matter.</p>
                    <button className='details-btn rounded-full text-black px-12 py-4 hover:bg-[#db011c] hover:ease-linear duration-[.2s] hover:text-white' >View Details</button>
                </div>
            </div>


        </div>
    );
};

export default Banner;