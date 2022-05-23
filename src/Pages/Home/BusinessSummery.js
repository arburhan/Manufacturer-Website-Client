import React from 'react';
import world from './../../Images/pin.png';
import clients from './../../Images/rating.png';
import feedback from './../../Images/feedback.png';
const BusinessSummery = () => {
    return (
        <div className='container mx-auto px-12  md:px-0 lg:px-0 py-12' >
            <div className='text-center mx-22'>
                <h3 className="text-xl my-2">Summery</h3>
                <h2 className="text-4xl  text-[#0f172a] font-bold px-22"> More than 20 years we provide our services</h2>
            </div>
            <div className='grid justify-items-center md:grid-cols-3 my-4 md:my-12 gap-4' >
                <div className='border rounded-md p-24'>
                    <img className='w-[100px]' src={world} alt="" />
                    <h1 className="text-4xl font-bold my-2">50+</h1>
                    <h3 className="text-2xl"> Countris  </h3>
                </div>
                <div className='border rounded-md p-24'>
                    <img className='w-[100px]' src={clients} alt="" />
                    <h1 className="text-4xl font-bold my-2">100M</h1>
                    <h3 className="text-2xl">  Clients  </h3>
                </div>
                <div className='border rounded-md p-[90px] md:p-24'>
                    <img className='w-[100px]' src={feedback} alt="" />
                    <h1 className="text-4xl font-bold my-2">1M</h1>
                    <h3 className="text-2xl"> Feedback  </h3>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;