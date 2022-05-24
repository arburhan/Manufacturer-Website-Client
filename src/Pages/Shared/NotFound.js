import React from 'react';
import NotFoundImage from '../../Images/404-Page-Featured-Image.webp';

const NotFound = () => {
    return (
        <div className='container mx-auto my-12' >
            <img className='mx-auto' src={NotFoundImage} alt="" />

        </div>
    );
};

export default NotFound;