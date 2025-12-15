import React, { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import PageWarper from '../CustomItem/PageWarper';
import img from '../assets/billy-huynh-W8KTS-mhFUE-unsplash.jpg';
import Swal from 'sweetalert2';

const UpdatedProfile = () => {
    const { updateUserProfile,user } = useAuth();
    const {
      register,
      handleSubmit,
      reset,
     
      formState: { errors },
    } = useForm();

    useEffect(()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    },[])

    const updateProfile=(data)=>{
        
        updateUserProfile({
            displayName:data.name,
            photoURL:data.photo
        }).then(()=>{
            reset()
            
          
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Yor profile have been updated",
              showConfirmButton: false,
              timer: 1500,
            });

        })

    }
    return (
      <div style={{ backgroundImage: `url(${img})` }}>
        <PageWarper>
          <div className="bg-black min-h-screen px-5">
            <div className="max-w-md mx-auto mt-30 p-4 my-10 bg-white  rounded-xl shadow-md">
              {/* Header */}
              <div className="text-center mb-4">
                <h1 className="text-4xl text-yellow-700  font-bold">
                  Update your profile
                </h1>
                <p className="text-blue-400 mt-1">
                  Maintain accurate contact info
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(updateProfile)}
                className="space-y-6 mx-5  my-10"
              >
                {/* Name  */}
                <div>
                  <label className="label font-semibold">Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                   
                    placeholder="Enter your name"
                    className="input input-bordered w-full h-12 text-lg px-4"
                  />
                  {errors.name && (
                    <p className="text-red-600 mt-1">This field is required</p>
                  )}
                </div>
                <div>
                  <label className="label font-semibold">Email</label>
                  <input
                    {...register("email")}
                    readOnly
                    type="email"
                    value={user?.email}
                    placeholder="Enter your email address"
                    className="input input-bordered w-full h-12 text-lg px-4"
                  />
                </div>
               

                {/* Password */}
                <div>
                  <label className="label font-semibold">Photo URL</label>
                  <input
                    {...register("photo", { required: true })}
                    type="text"
                    placeholder="Enter your photo url"
                    className="input input-bordered w-full h-12 text-lg px-4"
                  />
                </div>
                {errors.photo && (
                  <p className="text-red-600 mt-1">This field is required</p>
                )}

                {/* Submit Button */}
                <button type="submit" className="button w-full">
                  Update
                </button>
              </form>
            </div>
          </div>
        </PageWarper>
      </div>
    );
};

export default UpdatedProfile;