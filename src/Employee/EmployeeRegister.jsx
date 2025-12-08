import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import useAxios from '../Hooks/useAxios';
import Swal from 'sweetalert2';

const EmployeeRegister = () => {
    const { userRegister, updateUserProfile } = useAuth();
    const axios=useAxios()
     const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleEmployeeRegister=async(data)=>{
         try {
              await userRegister(data.employeeEmail, data.employeePassword);
             await updateUserProfile({
               displayName: data.employeeName,
               photoURL: data.employeePhoto,
             });
        
        
              const userPostInfo = {
                role:"employee",
                employeeName: data.employeeName,
                employeeEmail: data.employeeEmail,
                employeeDfoBirth: data.employeeDfoBirth,
                employeePhoto: data.employeePhoto,
              };
        
              await axios.post("/users", userPostInfo);
              reset();
        
              Swal.fire({
                icon: "success",
                title: "Registered Successfully!",
                text: "You can now login as Employee ",
                confirmButtonText: "OK",
              });
            } catch (error) {
              console.log(error);
            }


        
      }
    return (
      <div>
        <form
          onSubmit={handleSubmit(handleEmployeeRegister)}
          className="max-w-lg mx-auto p-6 bg-base-100 shadow-xl rounded-xl space-y-4"
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Join as Employee
          </h2>

          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              {...register("employeeName", { required: true })}
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
            {errors.employeeName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              {...register("employeeEmail", { required: true })}
              type="email"
              placeholder="personal@email.com"
              className="input input-bordered w-full"
            />
            {errors.employeeEmail && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          {/* Employee Photo url  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo url</span>
            </label>
            <input
              {...register("employeePhoto", { required: true })}
              type="text"
              placeholder="Enter your photo rul"
              className="input input-bordered w-full"
            />
            {errors.employeePhoto && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              {...register("employeePassword", { required: true })}
              type="password"
              placeholder="Min 6 characters"
              className="input input-bordered w-full"
            />
            {errors.employeePassword && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Date of Birth */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Date of Birth</span>
            </label>
            <input
              {...register("employeeDfoBirth", { required: true })}
              type="date"
              className="input input-bordered w-full"
            />
            {errors.employeeDfoBirth && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="button w-full mt-4">
            Register as Employee
          </button>
        </form>
      </div>
    );
};

export default EmployeeRegister;