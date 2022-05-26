import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CommonImage from '../../Images/Image.jpg';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { email, displayName, photoURL } = user;
    console.log(user)
    const { register, reset, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });

    const { data: profile, isLoading, refetch } = useQuery('myprofile', () => fetch(`http://localhost:5000/user/${email}`, {
        method: 'GET',
        headers: {
            'authoraization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(profile);
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        // console.log('user data: ', data)
        const user = {
            alternativeEmail: data.email,
            education: data.education,
            name: data.name,
            phone: data.phone,
            linkedIn: data.url,
            location: data.location
        }
        fetch(`http://localhost:5000/myprofile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
                refetch();
                toast.success('Profile Update Successfull');
            })

    }
    return (
        <section className='px-5 md:8'>
            <h2 className="text-2xl">My Profile</h2>
            <div className='flex justify-center md:mb-8'>
                <div className='w-full lg:w-6/12 md:w-full p-6 rounded-lg border-2'>
                    <figure>
                        <img className='w-28 rounded-full' src={user.photoURL === null ? CommonImage : user.photoURL} alt="" />
                    </figure>
                    <h3 className="text-xl py-2">Name: {!profile.name ? user.displayName : profile.name}</h3>
                    <p className='border-b-2'> <span className='font-bold'> Email:</span> {user.email}</p>
                    {
                        profile.alternativeEmail && <div>
                            <h3 className='border-b-2 2-b-2'> <span className='font-bold'>Alternative Email:</span>  {profile.alternativeEmail}</h3>
                            <h3 className='border-b-2 2-b-2'> <span className='font-bold'>Education:</span>  {profile.education}</h3>
                            <h3 className='border-b-2 2-b-2'> <span className='font-bold'>Address:</span>  {profile.address}</h3>
                            <h3 className='border-b-2 2-b-2'>  <span className='font-bold'>LinkedIn Profile:</span> {profile.linkedIn}</h3>
                            <h3 className='border-b-2 2-b-2'> <span className='font-bold'>Mobile Number: </span> {profile.phone}</h3>
                        </div>
                    }
                </div>
            </div>
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
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input
                                type="education"
                                placeholder="Education Institute Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Education is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Another Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn Link</span>
                            </label>
                            <input
                                type="url"
                                placeholder="LinkedIn Profile Link"
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
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input
                                type="phone"
                                placeholder="Mobile Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Mobile Number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Location</span>
                            </label>
                            <input
                                type="address"
                                placeholder="Location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Location is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                            </label>
                        </div>
                        <div className='text-center'>
                            <input className='btn btn-accent btn-wide' type="submit" value='update' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;