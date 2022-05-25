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
    return (
        <>
            <tr>
                <th> {index + 1} </th>
                <th>{user.email}</th>
                <th> {user.role === 'admin' ? 'Already Admin' : <button onClick={makeAdmin} className='btn btn-accent btn-xs' >Make Admin</button>} </th>
                <th> <button className='btn btn-error btn-xs' >Remove User</button> </th>
            </tr>

        </>
    );
};

export default MakeAdminTable;