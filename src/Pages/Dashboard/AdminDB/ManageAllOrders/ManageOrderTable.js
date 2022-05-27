import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderTable = ({ allOrder, index, refetch }) => {

    const handleUpdateShip = (id) => {
        // update shipment status
        const shipment = {
            shipment: id
        }
        fetch(`http://localhost:5000/shipmentOrder/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(shipment)
        }).then(res => res.json())
            .then(data => {
                refetch();
                toast('Order shipment Successfull')
            })
    }

    return (
        <>
            <tr>
                <th> {index + 1} </th>
                <td>{allOrder.email}</td>
                <td> {allOrder.quantity} </td>
                <td> {allOrder.address} </td>
                <td>{allOrder.paid === true ? <span className='text-primary'>Paid</span> : <span className='text-secondary' >unpaid</span>}</td>
                <td> {allOrder.shipment === true ? <span>Shipped</span> :
                    <div>
                        <p className='text-[12px]' >Pending</p>
                        <button onClick={() => {
                            handleUpdateShip(allOrder._id)
                        }} className='btn btn-xs' > Update </button>
                    </div>} </td>
                <td> {!allOrder.paid === true && <button className='btn btn-xs btn-error' >Cancel</button>} </td>
            </tr>
        </>
    );
};

export default ManageOrderTable;