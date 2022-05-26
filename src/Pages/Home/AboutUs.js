import React from 'react';
import companyImage from '../../Images/companyImage.jpg';

const AboutUs = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <figure>
                        <img className='rounded-xl' src={companyImage} alt='tools company' />
                    </figure>
                    <div className='px-4'>
                        <h1 className="text-5xl font-bold">Power Tools</h1>
                        <p className="py-6">The tools are produced in our own advanced technology. The raw material of the tools is 100% collected from nature. Our products
                            Produce by automated machinery and control the quality of each product.</p>
                        <button className="btn btn-primary">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;