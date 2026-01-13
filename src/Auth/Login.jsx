import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";

import useAuth from "../Hooks/useAuth";
import "../../src/CustomItem/buttonOne.css";
import PageWarper from "../CustomItem/PageWarper";
import Swal from "sweetalert2";


const Login = () => {
  const location = useLocation();
   const [show ,setShow]=useState()
   const [demoPass,setDemoPass]=useState('')
   const [demoEmail,setDemoEmail]=useState(' ')
   
   const handleDemoCrediantial=(role)=>{
    if(role==='hr'){
      setDemoEmail("mosaref@gmail.com");
      setDemoPass("123456")
    }
    if(role==='user'){
      setDemoEmail("liton@gmail.com");
      setDemoPass(123456)
    }

   }

   
  



  const navigate = useNavigate();
  const { userSignIn } =useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
  
    // console.log(data)
    userSignIn(data.email, data.password)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in successful",
          showConfirmButton: false,
          timer: 1500,
        });
       
        navigate(location?.state||"/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

 

  return (
    <PageWarper>
      <div className="bg-black min-h-screen px-5">
        <div className="max-w-md mx-auto mt-30 p-6 my-10 bg-white  rounded-xl shadow-md">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl text-yellow-700  font-bold">
              Login your Account
            </h1>
            <p className="text-blue-400 mt-1">Login with asset verse</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-6 mx-5  my-10"
          >
            {/* Email */}
            <div>
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                value={demoEmail}
                placeholder="Enter your email address"
                {...register("email", { required: true })}
                className="input input-bordered w-full h-12 text-lg px-4"
              />
              {errors.email && (
                <p className="text-red-600 mt-1">This field is required</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label font-semibold">Password</label>
              <input
              value={demoPass}
                type={`${show === true ? "text" : "password"}`}
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                className="input input-bordered w-full h-12 text-lg px-4"
              />
              <IoEyeOutline
                onClick={() => setShow(!show)}
                className="absolute right-3 mt-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-gray-500"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-1">Password is required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-600 mt-1">
                  Password must be 6 characters or longer
                </p>
              )}
            </div>
            {/* Forget password  */}
            <Link
              to={"/auth/change-password"}
              className="text-sm hover:text-green-500 cursor-pointer"
            >
              Forget password?
            </Link>

            {/* Submit Button */}
            <button type="submit" className="button w-full">
              Login
            </button>
            <div>
              <h1 className="text-center  text-blue-400 my-3">Demo Login</h1>
              <div className="flex justify-between ">
                <button
                  onClick={() => handleDemoCrediantial("hr")}
                  className="btn"
                >
                  login as hr
                </button>
                <button
                  onClick={() => handleDemoCrediantial("user")}
                  className="btn"
                >
                  login as user
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </PageWarper>
  );
};

export default Login;
