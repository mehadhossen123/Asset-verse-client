import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loader from "../Components/Loading/Loader";
import { motion } from "framer-motion";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const AssetDetails = () => {
  const{user}=useAuth()
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: singleData,
isLoading,
    isError,
  } = useQuery({
    queryKey: ["assets", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assets/${id}`);
      return res.data;
    },
  });

  // Loading state
  if (isLoading) {
    return <Loader></Loader>
  }

  // Error state
  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-red-600">
          Failed to load asset.
        </p>
      </div>
    );
  }


  const handleProductRequest=(data)=>{
    const assetInfo = {
      assetId: data._id,
      assetName: data.productName,
      assetImage: data.productImage,
      assetType: data.productType,
      requesterName:user?.displayName,
      requesterEmail:user?.email,
      requestStatus:'pending',
      note:'',
      hrEmail:data.hrEmail,
      companyName:data.companyName



    };
   axiosSecure.post("/requests",assetInfo).then((res)=>{
    console.log(res)
    if( res.data.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your request is pending ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
   })

  }

  return (
    <div className="p-6 max-w-5xl h-[700px] mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="my-5 text-4xl text-yellow-700 text-center font-bold"
      >
        See The Product Details
      </motion.h1>
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-800 rounded-lg shadow-sm transition"
      >
        ← Go Back
      </button>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 40 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Asset Image */}
        <div>
          <motion.img
          animate={{y:[0 ,-2 ,0 ,2 ,0]}}
          transition={{duration:0.5,repeat:Infinity,ease:"easeInOut"}}
            src={singleData?.productImage}
            alt={singleData?.productName}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>

        {/* Asset Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {singleData?.productName}
          </h1>

          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Type:</span>{" "}
            {singleData?.productType}
          </p>

          <p className="text-gray-600 text-lg mt-2">
            <span className="font-semibold">Available Quantity:</span>{" "}
            {singleData?.availableQuantity}
          </p>

          <p className="text-gray-500 mt-2">
            <span className="font-semibold">Posted On:</span>{" "}
            {new Date(singleData?.dateAdded).toLocaleDateString()}
          </p>

          {/* Request Button */}
          <button
            onClick={() => handleProductRequest(singleData)}
            className="mt-6 w-full button text-white py-3 rounded-lg shadow-md transition"
          >
            Request This Asset
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AssetDetails;
