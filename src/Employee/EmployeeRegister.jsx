import React from 'react';
import { useForm } from 'react-hook-form';

const EmployeeRegister = () => {
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleEmployeeRegister=data=>{
        console.log(data)
      }
    return (
      <div>
        <form  onSubmit={handleSubmit(handleEmployeeRegister)} className="max-w-lg mx-auto p-6 bg-base-100 shadow-xl rounded-xl space-y-4">
          <h2 className="text-2xl font-bold text-center mb-4">
            Join as Employee
          </h2>

          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              name="name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="personal@email.com"
              className="input input-bordered w-full"
              name="email"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Min 6 characters"
              className="input input-bordered w-full"
              name="password"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Date of Birth</span>
            </label>
            <input
              type="date"
              className="input input-bordered w-full"
              name="dateOfBirth"
              required
            />
          </div>

          {/* Role (Auto Assigned) */}
          <input type="hidden" name="role" value="employee" />

          {/* Submit Button */}
          <button className="btn btn-primary w-full mt-4">
            Register as Employee
          </button>
        </form>
      </div>
    );
};

export default EmployeeRegister;