import React from 'react';

const MakeAdminTable = ({ refetch, index, user }) => {
    return (
        <>
            <tr>
                <th> {index + 1} </th>
                <th>{user.email}</th>
                <th> <button className='btn btn-accent btn-xs' >Make Admin</button> </th>
                <th> <button className='btn btn-error btn-xs' >Remove User</button> </th>
            </tr>

        </>
    );
};

export default MakeAdminTable;