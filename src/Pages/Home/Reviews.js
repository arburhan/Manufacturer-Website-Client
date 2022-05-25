import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery(['review'], () => fetch(`http://localhost:5000/reviews`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div className='container mx-auto py-8'>
            <h2 className="text-4xl underline underline-offset-2 text-center font-bold py-8">Customer Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center p-3'>
                {
                    reviews?.slice(-3).reverse().map(review => <ReviewCard key={review._id} review={review} ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;