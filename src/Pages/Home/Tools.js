import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const navigate = useNavigate();
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setTools(data);
            });
    }, [tools, navigate])
    return (
        <div className='my-12 container mx-auto px-7'>
            <h2 className="text-3xl text-center text-[#0f172a] font-bold"> <span className='underline underline-offset-4' >Tools</span> </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    tools?.slice(-6).reverse().map(tool => <ToolsCard key={tool._id} tool={tool} ></ToolsCard>)
                }
            </div>
        </div>
    );
};

export default Tools;