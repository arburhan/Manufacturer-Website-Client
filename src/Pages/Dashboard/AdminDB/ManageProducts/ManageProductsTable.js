import React from 'react';

const ManageProductsTable = ({ index, tool, refetch }) => {
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{tool.name}</td>
                <td>{tool.quantity}</td>
                <td> <button className="btn btn-secondary">Update</button> </td>
                <td> <button className="btn btn-error">Delete</button> </td>
            </tr>

        </>
    );
};

export default ManageProductsTable;