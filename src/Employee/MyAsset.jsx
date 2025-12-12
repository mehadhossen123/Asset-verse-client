import React, { useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { MdOutlineWebAsset } from 'react-icons/md';
motion

const MyAsset = () => {
    const axiosSecure = useAxiosSecure();
    const [search,setSearch]=useState("")

    const { user } = useAuth();
    const { data: myAssets = [] } = useQuery({
      queryKey: ["requests", user?.email,search],
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/requests/asset?email=${user?.email}&requestStatus=approved&searchText=${search}`
        );
        return res.data.data;
      },
    });

    return (
      <div className=" ">
        {/* Search box  */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl text-center mt-4 text-white"
        >
          Your All Assigned Asset :{myAssets.length}
        </motion.p>
        <div className="flex justify-center mt-5 ">
          <div className="join">
            <div>
              <label className="input validator join-item w-[700px]">
                <MdOutlineWebAsset className='text-2xl' />
                <input
                onChange={(e)=>setSearch(e.target.value)}
               
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

        <div className="overflow-x-auto bg-white mx-5 my-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center text-yellow-700 font-bold">#</th>
                <th className="text-center text-yellow-700 font-bold">
                  Asset Image
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Asset Name
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Asset Type
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Company Name
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Request Date{" "}
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Approve Date
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Status
                </th>
                <th className="text-center text-yellow-700 font-bold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myAssets.map((asset, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={asset.assetImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{asset.assetName}</td>
                  <td>{asset.assetType}</td>
                  <th>{asset.companyName}</th>
                  <th>{new Date(asset.requestDate).toLocaleString()}</th>
                  <th>{new Date(asset.approvedDate).toLocaleString()}</th>
                  <th>{asset.requestStatus}</th>
                  <th>
                    {asset.assetType === "Returnable" && (
                      <button className="button">Return</button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyAsset;