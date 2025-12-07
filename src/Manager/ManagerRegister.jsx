import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";

const ManagerRegister = () => {
  const { userRegister } = useAuth();
  const axios = useAxios();
  // Rect form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle register for
  const handleManagerRegister = async(data) => {
     //Prepare form data for image
    try{
       const image = data.companyLogo[0];
    const formData = new FormData();
    formData.append("image", image);
    const image_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY
    }`;
      // Post image to get url .using imageBB
        const res=await axios.post(image_api_url, formData)
       const logo = res.data.data.display_url; //image url
      
      //  User register 
       await userRegister(data.managerEmail, data.managerPassword)
      
    
  // post manager info 
        const userPostInfo = {
          managerName: data.managerName,
          managerEmail: data.managerEmail,
          companyName: data.companyName,
          managerDateOfBirth:data.managerDateOfBirth,
          companyLogo:logo,
        };
        await axios.post("/users",userPostInfo)
         Swal.fire({
           icon: "success",
           title: "Registered Successfully!",
           text: "You can now login as HR Manager",
           confirmButtonText: "OK",
         });

    }
    catch(error){
      console.log(error)
    }

      
     
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <form
        onSubmit={handleSubmit(handleManagerRegister)}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Join as HR Manager
        </h2>
        <p className="text-center text-gray-500">
          Create your account to manage your company's team
        </p>

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
            placeholder="Enter your full name"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          {errors.managerName && (
            <span className="text-red-500">This field is required</span>
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
            placeholder="Enter your company name"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          {errors.companyName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Company Logo
            </span>
          </label>
          <input
            {...register("companyLogo")}
            type="file"
            className="file-input file-input-primary w-full file-input-bordered"
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-gray-700">Email</span>
          </label>
          <input
            {...register("managerEmail", { required: true })}
            type="email"
            placeholder="email@company.com"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          {errors.managerEmail && (
            <span className="text-red-500">This field is required</span>
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
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          {errors.managerPassword && (
            <span className="text-red-500">This field is required</span>
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
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          {errors.managerDateOfBirth && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-semibold mt-4"
        >
          Register as HR Manager
        </button>

        {/* Optional small footer text */}
        <div>
          <p>
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-green-400 hover:underline ">login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ManagerRegister;
