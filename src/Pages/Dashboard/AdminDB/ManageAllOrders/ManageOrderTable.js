import React from 'react';

const ManageOrderTable = ({ allOrder, index, refetch }) => {
    return (
        <>
            <tr>
                <th> {index + 1} </th>
                <td>{allOrder.email}</td>
                <td>{allOrder.paid === true ? <span className='text-primary'>Paid</span> : <span className='text-secondary' >unpaid</span>}</td>
                <td> {allOrder.shipment === true ? <span>Shipped</span> : <div>
                    <p className='text-[12px]' >Pending</p>
                    <button className='btn btn-xs' > Update </button>
                </div>} </td>
                <td> {!allOrder.paid === true && <button className='btn btn-xs btn-error' >Cancel</button>} </td>
            </tr>

        </>
    );
};

export default ManageOrderTable;