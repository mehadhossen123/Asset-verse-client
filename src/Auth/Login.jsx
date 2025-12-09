import React from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";

import useAuth from "../Hooks/useAuth";
import "../../src/CustomItem/buttonOne.css";
import PageWarper from "../CustomItem/PageWarper";

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
    <PageWarper>
      <div className="bg-black min-h-screen px-5">
        <div className="max-w-md mx-auto mt-30 p-6 my-10 bg-white  rounded-xl shadow-md">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl text-yellow-700  font-bold">Login your Account</h1>
            <p className="text-blue-400 mt-1">Login with asset verse</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 mx-5  my-10">
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
            <button type="submit" className="button w-full">
              Login
            </button>

            {/* Login Link
        <p className="text-center text-gray-500 mt-2">
          New here? please{" "}
          <Link
            to="/auth/manager-register"
            state={location.state}
            className="link link-hover font-semibold"
          >
            Register
          </Link>
        </p> */}
          </form>
        </div>
      </div>
    </PageWarper>
  );
};

export default Login;
