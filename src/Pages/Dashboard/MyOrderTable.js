import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const MyOrderTable = ({ order, index, refetch }) => {
    const { _id, paid, productName, quantity, totalPrice } = order;
    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        })
            .then()

    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{productName}</td>
                <td>{quantity}</td>
                <td>$ {totalPrice}</td>
                <td> {!paid && <Link to={`/dashboard/payment/${_id}`} className="btn btn-accent">Pay</Link>} {paid && <span className='text-success' >Paid</span>} </td>
                <td> <button onClick={() => {
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this order!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            } else {
                                swal("Your imaginary file is safe!");
                            }
                        })
                }} className='btn btn-error'>Cancel</button>  </td>
            </tr>

        </>
    );
};

export default MyOrderTable;