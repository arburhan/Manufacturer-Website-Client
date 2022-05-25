import React from 'react';
import ManageOrderTable from './ManageOrderTable';

const ManageAllOrders = () => {
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
                            <th>Pay Status</th>
                            <th>Shipment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            users?.map((user, index) => <ManageOrderTable refetch={refetch} index={index} key={user._id} user={user} ></ManageOrderTable>)
                        } */}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageAllOrders;