import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";

const ManagerRegister = () => {
  const { userRegister, updateUserProfile } = useAuth();
  const axios = useAxios();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleManagerRegister = async (data) => {
    try {
      await userRegister(data.managerEmail, data.managerPassword);
     await updateUserProfile({
        displayName: data.managerName,
        photoURL: data.managerProfile,
      });


      const userPostInfo = {
        managerName: data.managerName,
        managerEmail: data.managerEmail,
        companyName: data.companyName,
        managerDateOfBirth: data.managerDateOfBirth,
        companyLogo: data.companyLogo,
        managerProfile: data.managerProfile,
      };

      await axios.post("/users", userPostInfo);
      reset();

      Swal.fire({
        icon: "success",
        title: "Registered Successfully!",
        text: "You can now login as HR Manager",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <form
        onSubmit={handleSubmit(handleManagerRegister)}
        className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Join as HR Manager
        </h2>
        <p className="text-center text-gray-500">
          Create your account to manage your company's team
        </p>
        {/* GRID FORM START */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Full Name
              </span>
            </label>
            <input
              {...register("managerName", { required: true })}
              type="text"
              placeholder="Enter full name"
              className="input input-bordered w-full"
            />
            {errors.managerName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Email
              </span>
            </label>
            <input
              {...register("managerEmail", { required: true })}
              type="email"
              placeholder="email@company.com"
              className="input input-bordered w-full"
            />
            {errors.managerEmail && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Password
              </span>
            </label>
            <input
              {...register("managerPassword", { required: true })}
              type="password"
              placeholder="Min 6 characters"
              className="input input-bordered w-full"
            />
            {errors.managerPassword && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Company Name
              </span>
            </label>
            <input
              {...register("companyName", { required: true })}
              type="text"
              placeholder="Enter company name"
              className="input input-bordered w-full"
            />
            {errors.companyName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Date of Birth */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Date of Birth
              </span>
            </label>
            <input
              {...register("managerDateOfBirth", { required: true })}
              type="date"
              className="input input-bordered w-full"
            />
            {errors.managerDateOfBirth && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Company Logo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Company Logo URL
              </span>
            </label>
            <input
              {...register("companyLogo", { required: true })}
              type="text"
              placeholder="Enter company logo URL"
              className="input input-bordered w-full"
            />
            {errors.companyLogo && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Profile Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Profile Image URL
              </span>
            </label>
            <input
              {...register("managerProfile", { required: true })}
              type="text"
              placeholder="Enter profile image URL"
              className="input input-bordered w-full"
            />
            {errors.managerProfile && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>{" "}
        {/* <-- GRID END */}
        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-semibold mt-4"
        >
          Register as HR Manager
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ManagerRegister;
