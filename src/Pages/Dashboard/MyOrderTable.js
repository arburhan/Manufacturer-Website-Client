import React from 'react';

const MyOrderTable = ({ order, index }) => {
    const { productName, quantity, totalPrice } = order;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <th>{productName}</th>
                <th>{quantity}</th>
                <th>$ {totalPrice}</th>
                <th> <button className="btn btn-accent">Pay</button> </th>
                <th> <button className='btn btn-secondary'>Cancel</button>  </th>
            </tr>

        </>
    );
};

export default MyOrderTable;