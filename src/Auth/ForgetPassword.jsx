import React, { useState } from 'react';
import PageWarper from '../CustomItem/PageWarper';
import { IoEyeOutline } from 'react-icons/io5';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();
    // const [show,setShow]=useState()
    const { resetPassword}=useAuth()
    const handlePasswordReset=(data)=>{
        resetPassword(data.email)
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please check your email",
          showConfirmButton: false,
          timer: 1500,
        });

    }
    return (
      <PageWarper>
        <div className="mt-36 min-h-screen px-5">
          <form
            onSubmit={handleSubmit(handlePasswordReset)}
            className="max-w-md mx-auto bg-white p-6   rounded-xl shadow space-y-5"
          >
            <h2 className="text-3xl font-bold text-center text-yellow-700">
              Reset Password
            </h2>

            {/* Email */}
            <div className="form-control">
              <label className="label font-medium">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />

              {errors.email && (
                <p className="text-red-600 mt-1">This field is required</p>
              )}
            </div>

            {/* New Password */}
            {/* <div className="form-control">
              <label className="label font-medium">New Password</label>
              <div className="relative">
                <input
                  type={`${show === true ? "text" : "password"}`}
                  placeholder="Enter new password"
                  className="input input-bordered w-full pr-10"
                />

                <IoEyeOutline
                  onClick={() => setShow(!show)}
                  className="absolute right-3 mt-1 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-gray-500"
                />
              </div>
            </div> */}

            {/* Submit */}
            <button type="submit" className="button w-full">
              Reset Password
            </button>
          </form>
        </div>
      </PageWarper>
    );
};

export default ForgetPassword;