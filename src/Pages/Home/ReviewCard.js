import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Image from '../../Images/Image.jpg';

const ReviewCard = ({ review, refetch }) => {
    const [user] = useAuthState(auth);
    const { name, description, rating, image } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar justify-center py-2">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image === null ? Image : image} alt='review' />
                </div>
            </div>
            <div className="card-body text-center">
                <h2 className="card-title text-primary justify-center pb-2">{name}</h2>
                <p>{description.length > 130 ? description.slice(0, 120) + '...' : description}</p>
                <p className='font-bold'>Rating: {rating} Star</p>
            </div>
        </div>
    );
};

export default ReviewCard;