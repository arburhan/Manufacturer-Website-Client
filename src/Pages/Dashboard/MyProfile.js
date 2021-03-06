import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CommonImage from '../../Images/Image.jpg';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    // const { email, displayName, photoURL } = user;
    const { register, reset, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });

    const { data: profile, isLoading, refetch } = useQuery('myprofile', () => fetch(`https://shielded-sea-60001.herokuapp.com/user/${user.email}`, {
        method: 'GET',
        headers: {
            authoraization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        const user = {
            alternativeEmail: data.email,
            education: data.education,
            name: data.name,
            phone: data.phone,
            linkedIn: data.url,
            location: data.location
        }
        fetch(`https://shielded-sea-60001.herokuapp.com/myprofile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
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
                    <div>
                        <figure>
                            <img className='w-28 rounded-xl' src={user?.photoURL === null ? CommonImage : user?.photoURL} alt="" />
                        </figure>
                        <h3 className="text-xl p-2 my-1">{!profile?.name ? user?.displayName : profile?.name}</h3>
                    </div>
                    <p className='border-2 my-2 p-2 rounded-lg'> <span className='font-bold'> Email:</span> {user?.email}</p>
                    {
                        profile.alternativeEmail && <div>
                            <h3 className='border-2 my-2 p-2 rounded-lg'> <span className='font-bold'>Alternative Email:</span>  {profile?.alternativeEmail}</h3>
                            <h3 className='border-2 my-2 p-2 rounded-lg'> <span className='font-bold'>Education:</span>  {profile?.education}</h3>
                            <h3 className='border-2 my-2 p-2 rounded-lg'> <span className='font-bold'>Address:</span>  {profile?.location}</h3>
                            <p className='border-2 my-2 p-2 rounded-lg '> <span className='font-bold text-xs'>LinkedIn Profile:</span> <span className='text-xs'>{profile?.linkedIn}</span> </p>
                            <h3 className='border-2 my-2 p-2 rounded-lg'> <span className='font-bold'>Mobile Number: </span> {profile?.phone}</h3>
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
                                placeholder="Your Name"
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