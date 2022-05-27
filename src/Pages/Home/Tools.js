import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const { data: tools, isLoading, refetch } = useQuery('alltools', () => fetch(`https://shielded-sea-60001.herokuapp.com/tools`, {
        method: 'GET',
        headers: {
            'authoraization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-12 container mx-auto px-7'>
            <h2 className="text-3xl text-center text-[#0f172a] font-bold"> <span className='underline underline-offset-4' >Tools</span> </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    tools?.slice(-6).reverse().map(tool => <ToolsCard key={tool._id} refetch={refetch} tool={tool} ></ToolsCard>)
                }
            </div>
        </div>
    );
};

export default Tools;