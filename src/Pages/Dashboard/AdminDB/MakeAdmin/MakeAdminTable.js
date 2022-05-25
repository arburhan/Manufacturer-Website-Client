import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminTable = ({ refetch, index, user }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin')
                }
            })
    }
    const removeUser = () => {
        toast.error('this feature conmming soon')
    }
    return (
        <>
            <tr>
                <th> {index + 1} </th>
                <td>{user.email}</td>
                <td> {user.role === 'admin' ? 'Already Admin' : <button onClick={makeAdmin} className='btn btn-accent btn-xs' >Make Admin</button>} </td>
                <td> <button onClick={removeUser} className='btn btn-error btn-xs' >Remove User</button> </td>
            </tr>

        </>
    );
};

export default MakeAdminTable;