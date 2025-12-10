import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { ImCross } from "react-icons/im";
import { FcApprove } from "react-icons/fc";

const RequestedAsset = () => {

      const axiosSecure = useAxiosSecure();
      const { user } = useAuth();
      const { data:requestedAsset = [] } = useQuery({
        queryKey: ["requests", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/requests?email=${user?.email}`);
          return res.data.data;
        },
      });
 
      const handleAssetApproved=(data)=>{
        console.log("have to approved ", data)

      }


    return (
      <div>
        <h1 className="text-red-700">
          All requested asset :{requestedAsset.length}{" "}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-yellow-700 text-center">#</th>
                <th className="text-yellow-700 text-center">Employee</th>
                <th className="text-yellow-700 text-center">Asset</th>
                <th className="text-yellow-700 text-center">Date</th>
                <th className="text-yellow-700 text-center">Status</th>
                <th className="text-yellow-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestedAsset.map((asset, i) => (
                <tr key={i}>
                  <td className="text-white text-center">{i + 1}</td>

                  <td className="flex justify-center">
                    
                     
                      <div>
                        <div className="font-bold text-white">
                          {asset.requesterName}
                        </div>
                      </div>
                
                  </td>

                  <td className="text-center">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={asset.assetImage} />
                    </div>
                  </td>

                  <td className="text-center text-white">
                    {asset.requestDate}
                  </td>
                  <td className="text-center text-white">
                    {asset.requestStatus}
                  </td>
                  <td className="text-center text-white">
                    <button onClick={()=>handleAssetApproved(asset)} className="px-6 py-1 text-2xl cursor-pointer mr-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                      <FcApprove />
                    </button>
                    <button className="px-6 py-1 cursor-pointer text-2xl bg-gradient-to-r from-red-500 to-rose-400 hover:from-rose-400 hover:to-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ">
                      <ImCross />
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

export default RequestedAsset;