import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import MyOrderTable from './MyOrderTable';

const MyOrders = () => {
    // const [orders, seOders] = useState([]);
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('myorders', () => fetch(`https://shielded-sea-60001.herokuapp.com/myorders?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-xl">My Orders {orders.length} </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                            orders?.map((order, index) => <MyOrderTable refetch={refetch} index={index} key={order._id} order={order} ></MyOrderTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;