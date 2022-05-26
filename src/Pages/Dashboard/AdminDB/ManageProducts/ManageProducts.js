import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import ManageProductsTable from './ManageProductsTable';

const ManageProducts = () => {
    const { data: tools, isLoading, refetch } = useQuery('myorders', () => fetch(`http://localhost:5000/tools`, {
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
            <h2 className="text-2xl">Manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>Update Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools?.map((tool, index) => <ManageProductsTable key={tool._id} tool={tool} refetch={refetch} index={index} ></ManageProductsTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;