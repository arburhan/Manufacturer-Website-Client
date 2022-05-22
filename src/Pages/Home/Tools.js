import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('Tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    console.log(tools)
    return (
        <div className='my-12 container mx-auto'>
            <h2 className="text-3xl text-center text-[#0f172a] font-bold"> <span className='underline underline-offset-4' >Tools</span> </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    tools.slice(0, 6).map(tool => <ToolsCard tool={tool} ></ToolsCard>)
                }
            </div>
        </div>
    );
};

export default Tools;