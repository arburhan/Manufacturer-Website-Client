import React from 'react';

const ManageProducts = () => {
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
                        {/* {
                            users?.map((user, index) => <ManageOrderTable refetch={refetch} index={index} key={user._id} user={user} ></ManageOrderTable>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;