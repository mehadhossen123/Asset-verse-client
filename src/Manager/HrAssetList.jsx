import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAxios from '../Hooks/useAxios';
import PageWarper from '../CustomItem/PageWarper';
import Loader from '../Components/Loading/Loader';


const HrAssetList = () => {
 const { reset, register, handleSubmit } = useForm();
 const [assetId, setAssetId] = useState();
 const axios=useAxios()



  const modalRef=useRef()
  
  const { user } = useAuth();
  const axiosSecure=useAxiosSecure()
  const { data: hrAssets = [] ,refetch,isLoading} = useQuery({
    queryKey: ["assets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assets?email=${user?.email}`);
      return res.data.data;
    },
  });
  if(isLoading){
    return <Loader></Loader>
  }

  //handleDeleteAsset
  const handleDeleteAsset=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/assets/${id}`).then((res) => {
          console.log(res.data)
          refetch()
           Swal.fire({
             title: "Deleted!",
             text:`${res?.data?.message}`,
             icon: "success",
           });
         
        });
       
      }
    });
  }

  const handleOpenModal=(id)=>{
    setAssetId(id)
    modalRef.current.showModal()

  }
  const  handleEditProduct=async(data)=>{
    modalRef.current.close();

    
     const productImage = data.productImage[0];
    const formData = new FormData();
    formData.append("image", productImage);

    const image_api_url =`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY }`;

    const product_image_url = await axios .post(image_api_url,formData);
    const productImageUrl= product_image_url.data.data.display_url;
   
  
   const updatedInfo = {
    
     productName: data.productName,
     productImage: productImageUrl,
     productType: data.productType,
     productQuantity: parseInt(data.productQuantity),
   };
   axiosSecure.patch(`/assets/${assetId}`,updatedInfo).then((res)=>{
   
    

    refetch()
    reset()
    console.log(res?.data)
     Swal.fire({
                  position: "center",
                  icon: "success",
                  title:`${res?.data?.message}`,
                  showConfirmButton: false,
                  timer: 1500,
                });
   }).catch((error)=>{
    console.log(error)
     Swal.fire({
       position: "center",
       icon: "success",
       title: `Internal server error`,
       showConfirmButton: false,
       timer: 1500,
     });
   })

   
  }

  return (
    <PageWarper>
      <>
        {/* Edit modal si here  */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          {/* Modal body is here  */}
          <div className="modal-box">
            <h3 className="font-bold text-yellow-700 text-center text-3xl">
              Edit Your Asset
            </h3>
            {/* Edit part  */}
            <form
              onSubmit={handleSubmit(handleEditProduct)}
              className="space-y-3"
            >
              {/* Product Name */}
              <div>
                <label className="text-sm font-medium">Product Name</label>
                <input
                  {...register("productName")}
                  type="text"
                  className="w-full p-2 border rounded-md mt-1 text-sm"
                  placeholder="Enter product name"
                />
              </div>

              {/* Product Image */}
              <div>
                <label className="text-sm font-medium mb-1">
                  Product Image
                </label>
                <input
                  {...register("productImage")}
                  type="file"
                  className="file-input file-input-primary w-full"
                />
              </div>

              {/* Product Type */}
              <div>
                <label className="text-sm font-medium">Product Type</label>
                <select
                  {...register("productType")}
                  name="productType"
                  className="w-full p-2 border rounded-md mt-1 text-sm"
                >
                  <option value="">Select Type</option>
                  <option value="Returnable">Returnable</option>
                  <option value="Non-returnable">Non-returnable</option>
                </select>
              </div>

              {/* Product Quantity */}
              <div>
                <label className="text-sm font-medium">Product Quantity</label>
                <input
                  {...register("productQuantity")}
                  type="number"
                  className="w-full p-2 border rounded-md mt-1 text-sm"
                  placeholder="Enter quantity"
                />
              </div>

              <button type="submit" className="button w-full">
                Update
              </button>
            </form>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div>
          {hrAssets.length === 0 ? (
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl text-center my-10 font-bold text-white"
              >
                You Have No Asset{" "}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg mt-4 text-yellow-700 text-center"
              >
                Please post an asset{" "}
              </motion.p>
            </div>
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl text-center my-10 font-bold text-white"
            >
              Your Total Posted Asset{" "}
            </motion.h1>
          )}

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-yellow-700 font-bold text-center">#</th>
                  <th className="text-yellow-700 font-bold text-center mr-5">
                    {" "}
                    All posted Product{" "}
                  </th>
                  <th className="text-yellow-700 font-bold text-center">
                    Product Type
                  </th>
                  <th className="text-yellow-700 font-bold text-center">
                    Product Quantity
                  </th>
                  <th className="text-yellow-700 font-bold text-center">
                    Post date{" "}
                  </th>
                  <th className="text-yellow-700 font-bold text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {hrAssets.map((asset, i) => (
                  <tr key={i}>
                    <td className="text-center text-white"> {i + 1}</td>

                    <td className="">
                      <div className="flex items-center F gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle text-white h-12 w-12">
                            <img
                              src={asset.productImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-white">
                            {asset.productName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center text-white">
                      {asset.productType}
                    </td>
                    <td className="text-center text-white">
                      <br />
                      {asset.productQuantity}
                    </td>
                    <td className="text-center text-white">
                      {" "}
                      {new Date(asset.dateAdded).toLocaleDateString()}
                    </td>
                    <td className="text-center text-white">
                      <button
                        onClick={() => handleOpenModal(asset._id)}
                        className="px-6 py-1 text-2xl cursor-pointer mr-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteAsset(asset._id)}
                        className="px-6 py-1 cursor-pointer text-2xl bg-gradient-to-r from-red-500 to-rose-400 hover:from-rose-400 hover:to-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300 "
                      >
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </PageWarper>
  );
};

export default HrAssetList;