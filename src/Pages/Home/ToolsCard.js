import React from 'react';

const ToolsCard = ({ tool }) => {
    const { name, image, description, minimumQuantity, availableQuantity, unitPrice } = tool;
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <figure class="px-10 pt-5">
                        <img style={{ height: '225px', width: '338px' }} src={image} alt="power machine" class="rounded-xl" />
                    </figure>
                    <h1 className="text-2xl font-bold mt-3">{name}</h1>
                    <p className="pt-2">{description.length > 130 ? description.slice(0, 130) + '...' : description} </p>
                    <p className="py-1" >Available Quantity: <span className='text-secondary' >{availableQuantity}</span> Pcs</p>

                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;