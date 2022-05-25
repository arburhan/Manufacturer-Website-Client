import React from 'react';

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
                <th> <button onClick={() => { handleDelete(_id) }} className='btn btn-error'>Cancel</button>  </th>
            </tr>

        </>
    );
};

export default MyOrderTable;