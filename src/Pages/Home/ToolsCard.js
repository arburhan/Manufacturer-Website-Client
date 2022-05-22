import React from 'react';

const ToolsCard = ({ tool }) => {
    const { name, image, description, minimumQuantity, availableQuantity, unitPrice } = tool;
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-2xl">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <figure class="px-10 pt-5">
                        <img style={{ height: '225px', width: '338px' }} src={image} alt="power machine" class="rounded-xl" />
                    </figure>
                    <h1 className="text-2xl font-bold mt-3">{name}</h1>
                    <p className="pt-2" title={description}>{description.length > 130 ? description.slice(0, 120) + '...' : description} </p>
                    <p className="py-1 font-bold" >Available Quantity: <span className='text-secondary' >{availableQuantity}Pcs</span> </p>
                    <p className=' font-bold'>Unit Price: <span className='text-secondary'> ${unitPrice}</span> </p>
                    <p className='my-1 font-bold'>Minimum Order: <span className='text-secondary'> {minimumQuantity} pcs</span> </p>

                    <button className="btn btn-accent text-white my-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;