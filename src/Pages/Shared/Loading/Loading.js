import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    );
};

export default Loading;