import React from 'react';
import swal from 'sweetalert';

const MyOrderTable = ({ order, index, refetch }) => {
    const { _id, productName, quantity, totalPrice } = order;
    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        })
            .then()
        console.log(id);

    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <th>{productName}</th>
                <th>{quantity}</th>
                <th>$ {totalPrice}</th>
                <th> <button className="btn btn-accent">Pay</button> </th>
                <th> <button onClick={() => {
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
                }} className='btn btn-error'>Cancel</button>  </th>
            </tr>

        </>
    );
};

export default MyOrderTable;