import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const ManageProductsTable = ({ index, tool, refetch }) => {
    const handleUpdate = () => {
        toast.error('this feature added as soon as possible')
    }
    const id = tool._id;
    // fetch(`https://shielded-sea-60001.herokuapp.com/tool/${id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // })
    //     .then(res => res.json())

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{tool.name}</td>
                <td>{tool.availableQuantity}</td>
                <td> <button onClick={handleUpdate} className="btn btn-secondary">Update</button> </td>
                <td> <button
                    onClick={() => {
                        swal({
                            title: "Are you sure?",
                            text: "Once deleted, you will not able to recover this tool!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    fetch(`https://shielded-sea-60001.herokuapp.com/tool/${id}`, {
                                        method: 'DELETE',
                                        headers: {
                                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                        }
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            swal("Tool has deleted!", {
                                                icon: "success",
                                            });
                                            refetch();
                                            toast('Tool deleted');
                                        })
                                } else {
                                    swal("Your tool is safe!");
                                }
                            })
                    }}
                    className="btn btn-error"
                >Delete</button> </td>
            </tr>

        </>
    );
};

export default ManageProductsTable;