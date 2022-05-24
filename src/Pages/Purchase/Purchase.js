import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState([]);
    const { _id, name, image, description, minimumQuantity, availableQuantity, unitPrice } = tool;
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id]);
    console.log(tool)
    return (
        <div className='bg-base-200 py-3 px-22' >
            <h2 className="text-2xl text-center">Welcome to Purchase</h2>
            <div className='flex flex-col md:flex-row container mx-auto my-4' >
                <div class="hero hover:shadow-xl hover:bg-base-300 rounded-lg">
                    <div class="hero-content">
                        <div class="max-w-md">
                            <figure className='py-2'>
                                <img src={image} alt="tool" className='rounded-xl' />
                            </figure>
                            <h1 class="text-xl font-bold py-1">Product ID: <span className='font-normal' >{_id}</span> </h1>
                            <h1 class="text-xl font-bold py-1">Name: <span className='font-normal' >{name}</span> </h1>
                            <p class="py-1"> <span className='font-bold text-[17px]'>Description: </span> {description}</p>
                            <p class="py-1"> <span className='font-bold text-[17px]'>Available Quantity: </span> {availableQuantity} pcs </p>
                            <p class="py-1"> <span className='font-bold text-[17px]'>Minimum Orderable: </span> {minimumQuantity} pcs </p>
                            <p class="py-1"> <span className='font-bold text-[17px]'>Unit Price: </span> ${unitPrice}</p>
                        </div>
                    </div>
                </div>
                <div class="hero hover:shadow-xl hover:bg-base-300 rounded-lg">
                    <div class="hero-content">
                        <div class="max-w-md">
                            <figure>
                                <img src={image} alt="tool" className='rounded-xl' />
                            </figure>
                            <h1 class="text-xl font-bold py-1">{name}</h1>
                            <p class="py-1">{description}</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;