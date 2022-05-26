import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1X0aJ4uo6umqFGEVoEth2hy2Sr4y5BcNWLuQaVxL5UYEuTGt8gg3Z6cDjdh7ke6KSYmw4MtuJHdL6QBIyCfFcO00fU3nEDJi');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/myorders/${id}`;
    const { data: myorder, isLoading } = useQuery('myorder', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(myorder)

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, { }</p>
                    <h2 className="card-title">Please Pay for <span className='text-primary'>{myorder.productName}</span> </h2>
                    <p>Your Oradered Quantity: <span className='text-orange-700'>{myorder.quantity} pcs</span></p>
                    <p>Please pay: <span className='text-secondary'>${myorder.totalPrice}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm myorder={myorder} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;