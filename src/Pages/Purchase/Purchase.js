import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const { register, formState: { errors }, getValues, watch, handleSubmit, reset } = useForm({ mode: "onBlur" });


    const { data: tool, isLoading, refetch } = useQuery(['available'], () => fetch(`https://shielded-sea-60001.herokuapp.com/tools/${id}`, {
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
    const quantityWatch = watch('quantity', tool?.minimumQuantity);
    const onSubmit = data => {
        const totalPrice = parseInt(data.quantity) * parseInt(tool.unitPrice);
        const order = {
            productName: tool.name,
            email: user?.email,
            quantity: data.quantity,
            totalPrice: totalPrice,
            address: data.address
        }
        fetch('https://shielded-sea-60001.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Order Purchase Successfully');
                reset();

            });

        const updatedQuantity = {
            id: id,
            quantity: data.quantity
        }
        fetch(`https://shielded-sea-60001.herokuapp.com/tool/${tool._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
            })
    };



    return (
        <div className='bg-base-100 py-7 px-22' >
            <h2 className="text-2xl text-center underline underline-offset-4 font-bold my-5">Welcome to Purchase</h2>
            <div className='flex flex-col md:flex-row container mx-auto my-4 border-b-4 md:border-b-0' >
                <div className="hero hover:shadow-xl hover:bg-base-300 rounded-lg">
                    <div className="hero-content">
                        <div className="max-w-md">
                            <figure className='py-2'>
                                <img src={tool.image} alt="tool" className='rounded-xl' />
                            </figure>
                            <h1 className="text-xl font-bold py-1">Product ID: <span className='font-normal' >{tool._id}</span> </h1>
                            <h1 className="text-xl font-bold py-1">Name: <span className='font-normal' >{tool.name}</span> </h1>
                            <p className="py-1"> <span className='font-bold text-[17px]'>Description: </span> {tool.description}</p>
                            <p className="py-1"> <span className='font-bold text-[17px]'>Available Quantity: </span> {tool.availableQuantity} pcs </p>
                            <p className="py-1"> <span className='font-bold text-[17px]'>Minimum Orderable: </span> {tool.minimumQuantity} pcs </p>
                            <p className="py-1"> <span className='font-bold text-[17px]'>Unit Price: </span> ${tool.unitPrice}</p>
                        </div>
                    </div>
                </div>
                <div className="hero hover:shadow-xl hover:bg-base-300 bg-base-100 md:hover:bg-base-0 rounded-lg px-4 md:px-1 py-6 md:pt-0">
                    <div className="max-w-md">
                        <h1 className="text-xl font-bold py-1 text-center">Please Fill the form to complete orders</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input className="input input-bordered font-bold border" value={user?.displayName} disabled />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className="input input-bordered font-bold" value={user?.email} disabled />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="phone"
                                    placeholder="Active Phone Number"
                                    className="input input-bordered font-bold"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors?.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone.message}</span>}
                                    {errors?.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.phone.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address Line</span>
                                </label>
                                <input type="address" className="input input-bordered font-bold bg-white" placeholder='Exact locatoin' {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address Line is Required'
                                    }
                                })} />
                                <label className="label">
                                    {errors?.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.address?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input name='quantity' type="number" defaultValue={tool?.minimumQuantity} className="input input-bordered font-bold bg-white" placeholder='Quantity to order'
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Quantity is Required'
                                        },
                                        min: {
                                            value: tool.minimumQuantity,
                                            message: 'Cannot be less than minimum quantity '
                                        },
                                        max: {
                                            value: tool.availableQuantity,
                                            message: 'Cannot be greater than available quantity'
                                        }
                                    }
                                    )} />
                                <label className="label">
                                    {errors?.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.quantity.message}</span>}
                                    {errors?.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors?.quantity.message}</span>}
                                    {errors?.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors?.quantity.message}</span>}
                                </label>
                            </div>
                            <h2 className="xl font-bold pb-2">Total Price: $  {(tool?.unitPrice) * (getValues('quantity') ? getValues('quantity') : 0)} </h2>
                            <div className='text-center'>
                                <input disabled={true ? (getValues('quantity') < tool.minimumQuantity) || (getValues('quantity') > tool.availableQuantity) : false} id='submitButton' className='btn w-full max-w-xs text-white' type="submit" value="Complete Purchase" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;