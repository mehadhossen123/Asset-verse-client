import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';


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
        <h1 className="text-center">Total asset : {hrAssets.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className='text-black font-bold text-center'>#</th>
                <th className='text-black font-bold text-center mr-5'> All posted Product </th>
                <th className='text-black font-bold text-center'>Product Type</th>
                <th className='text-black font-bold text-center'>Product Quantity</th>
                <th className='text-black font-bold text-center'>Post date </th>
                <th className='text-black font-bold text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {hrAssets.map((asset, i) => (
                <tr key={i}>
                  <td className='text-center'> {i + 1}</td>

                  <td className=''>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={asset.productImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{asset.productName}</div>
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>{asset.productType}</td>
                  <td className='text-center'>
                    <br />
                    {asset.productQuantity}
                  </td>
                  <td className='text-center'>{asset.dateAdded}</td>
                  <td className='text-center'>
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