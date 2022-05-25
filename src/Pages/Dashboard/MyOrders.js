import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrderTable from './MyOrderTable';

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
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <MyOrderTable index={index} key={order._id} order={order} ></MyOrderTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;