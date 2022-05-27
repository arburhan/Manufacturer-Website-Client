import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import ManageOrderTable from './ManageOrderTable';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch(`https://shielded-sea-60001.herokuapp.com/orders`, {
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
            <h2 className="text-2xl">Manage All Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Pay Status</th>
                            <th>Shipment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((allOrder, index) => <ManageOrderTable refetch={refetch} index={index} key={allOrder._id} allOrder={allOrder}></ManageOrderTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageAllOrders;