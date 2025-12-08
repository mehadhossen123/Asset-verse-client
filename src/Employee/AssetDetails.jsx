import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AssetDetails = () => {
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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
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

  return (
    <div className="p-6 max-w-4xl mx-auto">
        <h1 className="my-5 text-4xl text-center">See The Product Details</h1>
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-sm transition"
      >
        ← Go Back
      </button>

      <div className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Asset Image */}
        <div>
          <img
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
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition">
            Request This Asset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;
