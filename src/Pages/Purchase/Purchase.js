import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const { id } = useParams();
    const [tool, setTool] = useState([]);
    const { _id, name, image, description, minimumQuantity, availableQuantity, unitPrice } = tool;
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id]);
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });
    const onSubmit = data => {
        console.log(data);
    };



    return (
        <div className='bg-base-100 py-7 px-22' >
            <h2 className="text-2xl text-center underline underline-offset-4 font-bold my-5">Welcome to Purchase</h2>
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
                    <div class="max-w-md">
                        <h1 class="text-xl font-bold py-1">Please Fill the form to complete orders</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input class="input input-bordered font-bold" value={displayName} disabled />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input class="input input-bordered font-bold" value={email} disabled />
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
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address Line</span>
                                </label>
                                <input type="address" class="input input-bordered font-bold bg-white" placeholder='Exact locatoin' {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }
                                })} />
                                <label className="label">
                                    {errors?.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.address.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input name='quantity' type="number" defaultValue={minimumQuantity} class="input input-bordered font-bold bg-white" placeholder='Quantity to order'
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Quantity is Required'
                                        },
                                        min: {
                                            value: minimumQuantity,
                                            message: 'Cannot be less than minimum quantity '
                                        },
                                        max: {
                                            value: availableQuantity,
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
                            {/* <p className='pb-2'>Total: {totalPrice} </p> */}
                            <div className='text-center'>
                                <input className='btn w-full max-w-xs text-white' type="submit" value="Complete Purchase" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;