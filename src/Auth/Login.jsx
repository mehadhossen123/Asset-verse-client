import React from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";

import useAuth from "../Hooks/useAuth";

const Login = () => {
  const location = useLocation();



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
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

 

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-xl shadow-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Login your Account</h1>
        <p className="text-gray-500 mt-1">Register with asset verse</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
        {/* Email */}
        <div>
          <label className="label font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("email", { required: true })}
            className="input input-bordered w-full h-12 text-lg px-4"
          />
          {errors.email && (
            <p className="text-red-600 mt-1">This field is required</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="label font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true, minLength: 6 })}
            className="input input-bordered w-full h-12 text-lg px-4"
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
          to={"/password"}
          className="text-sm hover:text-green-500 cursor-pointer"
        >
          Forget password?
        </Link>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-primary text-black btn-neutral w-full h-12 text-lg mt-2"
        >
          Login
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-2">
          New here? please{" "}
          <Link
            to="/register"
            state={location.state}
            className="link link-hover font-semibold"
          >
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="divider divider-neutral">or</div>

        {/* Google Login Button */}
       
      </form>
    </div>
  );
};

export default Login;
