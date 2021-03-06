import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, reset, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });
    const onSubmit = data => {
        const review = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            description: data.description,
            rating: data.rating
        }
        fetch('https://shielded-sea-60001.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order Purchase Successfully');
                reset();

            });
    }

    return (
        <section className='px-5 md:8'>
            <h2 className='text-2xl'>My Review</h2>
            <div className='flex justify-center'>
                <div className='w-full lg:w-6/12 md:w-full p-6 rounded-lg border-2'>
                    <h2 className="text-xl my-2">Add a Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className="input input-bordered font-bold" value={user.displayName} disabled />
                        </div>
                        <div className="form-control  py-3">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                },
                                // maxLength: {
                                //     value: 2055,
                                //     message: 'Cannot be greater than 255 charecter'
                                // }
                            })} className="textarea textarea-bordered h-24" placeholder="Details about your review"></textarea>
                            <label className="label">
                                {errors?.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.description.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input name='rating' type="number" step='any' defaultValue={4} className="input input-bordered font-bold bg-white" placeholder='Rating'
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'rating is Required'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Cannot be less than minimum 1 '
                                    },
                                    max: {
                                        value: 5,
                                        message: 'Cannot be greater than 5'
                                    }
                                }
                                )} />
                            <label className="label">
                                {errors?.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.rating.message}</span>}
                                {errors?.rating?.type === 'min' && <span className="label-text-alt text-red-500">{errors?.rating.message}</span>}
                                {errors?.rating?.type === 'max' && <span className="label-text-alt text-red-500">{errors?.rating.message}</span>}
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

export default AddReview;