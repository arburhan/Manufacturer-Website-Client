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
            <div className='flex items-center justify-center h-full' >
                <div className='banner-text text-center'>
                    <h2 className='text-3xl md:text-5xl text-[#db011c]' >Tools That Your Need</h2>
                    <p className='py-4' >Power Tools is a tools brand about providing tools for every work place. Distributing high end tools to help create your ideal vision for a project, home, or application. We are your partners, confidants and most importantly your guidance to help you complete projects that matter.</p>
                </div>
            </div>


        </div>
    );
};

export default Banner;