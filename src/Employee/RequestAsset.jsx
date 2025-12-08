import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const RequestAsset = () => {
  const axiosSecure = useAxiosSecure();

  const { data: requestAsset = [] } = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assets`);
      return res.data.data;
    },
  });

  const handleViewDetails = (id) => {
    navigate(`/assets/${id}`);
  };


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Request Assets ({requestAsset.length})
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {requestAsset.map((asset) => (
          <div
            key={asset._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Asset Image */}
            <img
              src={asset.productImage}
              alt={asset.productName}
              className="w-full h-48 object-cover"
            />

            {/* Asset Info */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">
                {asset.productName}
              </h2>
              <p className="text-gray-600 mt-1">Type: {asset.productType}</p>
              <p className="text-gray-600 mt-1">
                Available Quantity: {asset.availableQuantity}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Posted on: {new Date(asset.dateAdded).toLocaleDateString()}
              </p>

              {/* View Details Button */}
              <button onClick={()=>} className="button">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestAsset;
