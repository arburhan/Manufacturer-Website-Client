import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, seOders] = useState([]);
    const [user] = useAuthState(auth);
    console.log(orders);
    useEffect(() => {
        fetch(`http://localhost:5000/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                seOders(data)
            })
    }, [user])

    return (
        <div>
            <h2 className="text-xl">My Orders {orders.length} </h2>
        </div>
    );
};

export default MyOrders;