import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch(`http://localhost:5000/users`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Make Admin</h2>
            <div>

            </div>
        </div>
    );
};

export default MakeAdmin;