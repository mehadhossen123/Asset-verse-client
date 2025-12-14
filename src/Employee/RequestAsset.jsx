import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import { MdOutlineWebAsset } from "react-icons/md";

const RequestAsset = () => {
  const [searchText, setSearchText] = useState("");
  const [requestAsset, setRequestAsset] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [totalApps, setTotalApps] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // console.log(page, totalApps);
  console.log(searchText)

  const limit = 8;

  useEffect(() => {
    fetch(
      ` http://localhost:5000/assets?limit=${limit}&skip=${
        currentPage * limit
      }&search=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRequestAsset(data.data);
        setTotalApps(data.total);
        setPage(Math.ceil(data.total / limit));
      });
  }, [currentPage,searchText]);

  const handleViewDetails = (id) => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold mb-6  text-white text-center">
        Request Assets ({totalApps})
      </h1>
      {/* Search bar  */}
      <div className="flex justify-center my-5 ">
        <div className="join">
          <div>
            <label className="input validator join-item w-[700px]">
              <MdOutlineWebAsset className="text-2xl" />
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search By asset name"
                required
              />
            </label>
          </div>
          <button className=" bg-amber-600 join-item cursor-pointer  font-bold py-1 px-1">
            Search
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {requestAsset.map((asset) => (
          <motion.div
            style={{}}
            whileHover={{ scale: 1.05 }}
            key={asset._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Asset Image */}
            <img
              src={asset.productImage}
              alt={asset.productName}
              className="w-full h-48 object-cover hover:scale-110 hover:duration-1000"
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
              <p className="text-gray-400 text-sm mt-1">
               Company name : {asset.companyName}
              </p>

              {/* View Details Button */}
              <button
                onClick={() => handleViewDetails(asset._id)}
                className="button"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap  py-10 gap-5">
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="btn"
          >
            Prev
          </button>
        )}
        {[...Array(page).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={` btn text-black font-bold border-0 ${
              i === currentPage && "btn-primary"
            }`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < page - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default RequestAsset;
