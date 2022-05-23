import React from 'react';
import BusinessSummeryCounter from './BusinessSummeryCounter';

const BusinessSummery = () => {
    return (
        <div>
            <h2 className="text-3xl text-center text-[#0f172a] font-bold"> <span className='underline underline-offset-8' >Business Summery</span> </h2>
            <BusinessSummeryCounter number={123} ></BusinessSummeryCounter>
        </div>
    );
};

export default BusinessSummery;