import { async } from '@firebase/util';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        toast.success('verification mail send!');
        toast.success('check mail on inbox or spambox');
        setTimeout(() => {
            toast.error('Navigate now login');
        }, 3000);
        setTimeout(() => {
            navigate('/login')
        }, 8000);

    }
    return (
        <div className='container mx-auto text-center'>
            <h2 className="text-4xl my-5">Reset Password</h2>
            <div className='flex justify-center p-5' >
                <form className='border-2 p-8 rounded-2xl shadow-md' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl pb-5">Enter Your Email For Reset Password</h2>
                    <div className='flex justify-center'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className='py-4'>
                        {sending ? <button className="btn loading w-full max-w-xs">sending mail</button> : <input className='btn w-full max-w-xs text-white' type="submit" value="send verification" />}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;