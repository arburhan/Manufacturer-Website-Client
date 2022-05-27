import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const ManageOrderTable = ({ allOrder, index, refetch }) => {

    const handleUpdateShip = (id) => {
        // update shipment status
        const shipment = {
            shipment: id
        }
        fetch(`https://shielded-sea-60001.herokuapp.com/shipmentOrder/${id}`, {
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
                <td> {!allOrder.paid === true && <button onClick={() => {
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not able to recover this order!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                fetch(`https://shielded-sea-60001.herokuapp.com/order/${allOrder._id}`, {
                                    method: 'DELETE',
                                    headers: {
                                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                    }
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        swal("Order has deleted!", {
                                            icon: "success",
                                        });
                                        refetch();
                                        toast('Order deleted');
                                    })
                            } else {
                                swal("Order is safe!");
                            }
                        })
                }} className='btn btn-error'>Cancel</button>} </td>
            </tr>
        </>
    );
};

export default ManageOrderTable;