import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const { register, reset, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });
    const { data: profile, isLoading, refetch } = useQuery('myprofile', () => fetch(`http://localhost:5000/myprofile/${user.email}`, {
        method: 'GET',
        headers: {
            'authoraization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {

    }
    return (
        <section className='px-5 md:8'>
            <h2 className="text-2xl">My Profile</h2>
            <div className='flex justify-center md:mb-8'>
                <div className='w-full lg:w-6/12 md:w-full p-6 rounded-lg border-2'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-xl pb-2">Customize your profile</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Product Image URL"
                                className="input input-bordered w-full max-w-xs"
                                {...register("url", {
                                    required: {
                                        value: true,
                                        message: 'URL is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.url?.type === 'required' && <span className="label-text-alt text-red-500">{errors.url.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Available Quantity that stock"
                                className="input input-bordered w-full max-w-xs"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Quantity is Required'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Minimum quantity 1'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Unit Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Per unit price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Minimum quantity 1'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                {errors.price?.type === 'min' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>
                        {/* <div className="form-control">
                <label className="label">
                    <span className="label-text">Orderable Quantity</span>
                </label>
                <input
                    type="number"
                    placeholder="Orderable Quantity that stock"
                    className="input input-bordered w-full max-w-xs"
                    {...register("orderQuantity", {
                        required: {
                            value: true,
                            message: 'Quantity is Required'
                        },
                        min: {
                            value: 1,
                            message: 'Minimum quantity 1'
                        }
                    })}
                />
                <label className="label">
                    {errors.url?.type === 'required' && <span className="label-text-alt text-red-500">{errors.url.message}</span>}
                    {errors.url?.type === 'min' && <span className="label-text-alt text-red-500">{errors.url.message}</span>}
                </label>
            </div> */}
                        <div className="form-control max-w-md ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                },
                                maxLength: {
                                    value: 800,
                                    message: 'Cannot be greater than 255 charecter'
                                }
                            })} className="textarea textarea-bordered h-24" placeholder="Details about your review"></textarea>
                            <label className="label">
                                {errors?.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.description.message}</span>}
                                {errors?.description?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors?.description.message}</span>}
                            </label>
                        </div>
                        <div className='text-center'>
                            <input className='btn btn-accent btn-wide' type="submit" value="Add Review" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;