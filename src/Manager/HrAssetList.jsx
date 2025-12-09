import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { motion } from 'framer-motion';



const HrAssetList = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const {data:hrAssets=[]}=useQuery({
        queryKey:["assets",user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/assets?email=${user?.email}`)
            return res.data.data;
        }
    })

     
    return (
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
                    <button className="px-6 py-1 text-2xl cursor-pointer mr-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                      <FaRegEdit />
                    </button>
                    <button className="px-6 py-1 cursor-pointer text-2xl bg-gradient-to-r from-red-500 to-rose-400 hover:from-rose-400 hover:to-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ">
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default HrAssetList;