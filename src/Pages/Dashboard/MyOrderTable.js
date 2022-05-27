import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const MyOrderTable = ({ order, index, refetch }) => {
    const { _id, paid, transactionId, productName, quantity, totalPrice } = order;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{productName}</td>
                <td>{quantity}</td>
                <td>$ {totalPrice}</td>
                <td> {!paid && <Link to={`/dashboard/payment/${_id}`} className="btn btn-accent">Pay</Link>} {paid && <span className='text-success' >Paid <span className='text-xs text-black block'>TransactionId:  {transactionId} </span> </span>} </td>
                <td>
                    {!transactionId && <button onClick={() => {
                        swal({
                            title: "Are you sure?",
                            text: "Once deleted, you will not able to recover this order!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    fetch(`http://localhost:5000/order/${_id}`, {
                                        method: 'DELETE',
                                        headers: {
                                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                                        }
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            swal("Your order has deleted!", {
                                                icon: "success",
                                            });
                                            refetch();
                                            toast('Order deleted');
                                        })
                                } else {
                                    swal("Your imaginary file is safe!");
                                }
                            })
                    }} className='btn btn-error'>Cancel</button>}

                </td>
            </tr>

        </>
    );
};

export default MyOrderTable;