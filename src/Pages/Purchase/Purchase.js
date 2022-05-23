import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [id])
    return (
        <div>
            <h2 className="text-2xl">Welcome to Purchase</h2>

        </div>
    );
};

export default Purchase;